import { Hono } from "hono";
import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import LeadNotification, { type Lead } from "./emails/lead-notification";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST ?? "mail.dotcomunicacao.pt",
  port: Number(process.env.SMTP_PORT ?? 465),
  secure: (process.env.SMTP_PORT ?? "465") === "465",
  auth: {
    user: process.env.SMTP_USER ?? "leads@dotcomunicacao.pt",
    pass: process.env.SMTP_PASS,
  },
  tls: {
    // ISRG Root YR (cross-signed by X1) — not yet in Node/Bun CA bundle
    ca: [await Bun.file(new URL("./certs/isrg-root-yr.pem", import.meta.url)).text()],
  },
});

const app = new Hono();

app.get("/", (c) => c.json({ health: "ok" }));

app.post("/api/leads/site", async (c) => {
  let body: Record<string, string>;
  const type = c.req.header("content-type") ?? "";
  if (type.includes("application/json")) {
    body = await c.req.json();
  } else {
    // CF7 & friends post as form data
    body = (await c.req.parseBody()) as Record<string, string>;
  }

  const lead: Lead = {
    name: body["your-name"]?.trim() ?? "",
    email: body["your-email"]?.trim() ?? "",
    phone: body["your-phone"]?.trim() ?? "",
    message: body["your-message"]?.trim() ?? "",
  };

  if (!lead.name || !lead.email) {
    return c.json({ ok: false, error: "your-name and your-email are required" }, 400);
  }

  try {
    const info = await transporter.sendMail({
      from: process.env.LEADS_FROM ?? '"Leads" <leads@dotcomunicacao.pt>',
      to: process.env.LEADS_TO ?? "info@dotdesign.pt",
      replyTo: lead.email,
      subject: `Novo lead: ${lead.name}`,
      html: await render(LeadNotification(lead)),
    });
    return c.json({ ok: true, id: info.messageId });
  } catch (err) {
    console.error("smtp error:", err);
    return c.json({ ok: false, error: "email failed" }, 502);
  }
});

Bun.serve({
  port: Number(process.env.PORT ?? 3000),
  fetch: app.fetch,
});

console.log(`listening on :${process.env.PORT ?? 3000}`);
