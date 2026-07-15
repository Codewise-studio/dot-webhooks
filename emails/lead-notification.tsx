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

const red = "#D62F2F";

const label: React.CSSProperties = {
  margin: "0",
  fontSize: "11px",
  textTransform: "uppercase",
  letterSpacing: "1px",
  color: "#7A7A7A",
};

const value: React.CSSProperties = {
  margin: "2px 0 16px",
  fontSize: "16px",
  color: "#000000",
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
          padding: "24px 0",
        }}
      >
        <Container
          style={{
            maxWidth: "560px",
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Section style={{ backgroundColor: "#000000", padding: "24px 32px" }}>
            <Text
              style={{
                margin: "0",
                fontSize: "28px",
                fontWeight: "bold",
                color: "#ffffff",
                letterSpacing: "-0.5px",
              }}
            >
              dot<span style={{ color: red }}>.</span>
            </Text>
          </Section>

          <Section style={{ padding: "32px" }}>
            <Heading
              as="h2"
              style={{ margin: "0 0 4px", fontSize: "20px", color: "#000000" }}
            >
              Novo pedido de contacto
            </Heading>
            <Text style={{ margin: "0 0 24px", fontSize: "14px", color: "#7A7A7A" }}>
              Recebeu uma nova mensagem através do formulário do site{" "}
              <Link href="https://dotdesign.pt" style={{ color: red }}>
                dotdesign.pt
              </Link>
              .
            </Text>

            <Text style={label}>Nome</Text>
            <Text style={value}>{name}</Text>

            <Text style={label}>Email</Text>
            <Text style={value}>
              <Link href={`mailto:${email}`} style={{ color: red }}>
                {email}
              </Link>
            </Text>

            <Text style={label}>Telefone</Text>
            <Text style={value}>
              <Link href={`tel:${phone}`} style={{ color: red }}>
                {phone}
              </Link>
            </Text>

            <Hr style={{ borderColor: "#f2f2f2", margin: "8px 0 16px" }} />

            <Text style={label}>Mensagem</Text>
            <Text style={{ ...value, whiteSpace: "pre-wrap" }}>{message}</Text>
          </Section>

          <Section
            style={{
              backgroundColor: "#000000",
              padding: "16px 32px",
            }}
          >
            <Text style={{ margin: "0", fontSize: "12px", color: "#7A7A7A" }}>
              Dot. — Agência de Comunicação · Pode responder diretamente a este
              email para contactar o cliente.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
