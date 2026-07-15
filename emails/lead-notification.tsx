import {
  Body,
  Container,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export interface Lead {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const label: React.CSSProperties = {
  margin: "0",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "1.5px",
  color: "#8a8a8a",
};

const value: React.CSSProperties = {
  margin: "4px 0 24px",
  fontSize: "16px",
  lineHeight: "24px",
  color: "#ffffff",
};

const link: React.CSSProperties = {
  color: "#ffffff",
  textDecoration: "underline",
};

export default function LeadNotification({ name, email, phone, message }: Lead) {
  return (
    <Html lang="pt">
      <Preview>Novo contacto de {name} através do site</Preview>
      <Body
        style={{
          backgroundColor: "#f2f2f2",
          fontFamily: "Helvetica, Arial, sans-serif",
          margin: "0",
          padding: "32px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "600px",
            backgroundColor: "#000000",
            overflow: "hidden",
          }}
        >
          <Section
            style={{
              padding: "40px 32px",
              textAlign: "center",
              borderBottom: "1px solid #1e1e1e",
            }}
          >
            <Text style={{ margin: "0", fontSize: "24px", color: "#ffffff" }}>
              <span style={{ fontWeight: "bold" }}>dot.</span> design e comunicação
            </Text>
          </Section>

          <Section style={{ padding: "48px 40px 40px" }}>
            <Heading
              as="h1"
              style={{
                margin: "0 0 8px",
                fontSize: "28px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Novo pedido de contacto
            </Heading>
            <Text
              style={{
                margin: "0 0 32px",
                fontSize: "15px",
                lineHeight: "24px",
                color: "#8a8a8a",
              }}
            >
              Recebeu uma nova mensagem através do formulário do site{" "}
              <Link href="https://dotdesign.pt" style={link}>
                dotdesign.pt
              </Link>
              .
            </Text>

            <Text style={label}>Nome</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`} style={link}>
                {email}
              </Link>
            </Text>

            <Text style={label}>Telefone</Text>
            <Text style={value}>
              <Link href={`tel:${phone}`} style={link}>
                {phone}
              </Link>
            </Text>

            <Hr style={{ borderColor: "#2a2a2a", margin: "8px 0 24px" }} />

            <Text style={label}>Mensagem</Text>
            <Text style={{ ...value, whiteSpace: "pre-wrap", margin: "4px 0 0" }}>
              {message}
            </Text>

            <Hr style={{ borderColor: "#2a2a2a", margin: "40px 0 24px" }} />

            <Text style={{ margin: "0", fontSize: "13px", color: "#8a8a8a" }}>
              Pode responder diretamente a este email para contactar o cliente.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
