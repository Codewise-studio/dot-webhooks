import {
  Body,
  Button,
  Container,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export interface ClientConfirmationProps {
  name: string;
  meetingUrl: string;
}

const paragraph: React.CSSProperties = {
  margin: "0 0 20px",
  fontSize: "16px",
  lineHeight: "28px",
  color: "#c8c8c8",
};

export default function ClientConfirmation({ name, meetingUrl }: ClientConfirmationProps) {
  return (
    <Html lang="pt">
      <Preview>Obrigado pelo seu contacto — vamos agendar uma reunião?</Preview>
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
                margin: "0 0 32px",
                fontSize: "32px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Olá, {name}
            </Heading>

            <Text style={paragraph}>
              Antes de mais, agradecemos o seu contacto e o interesse em trabalhar
              com a dot.
            </Text>

            <Text style={paragraph}>
              Gostaríamos de agendar uma breve reunião para conhecer melhor o
              projeto e perceber como podemos ajudar.
            </Text>

            <Text style={paragraph}>
              Quando teria disponibilidade para uma primeira reunião? Através do
              botão abaixo pode agendar uma reunião connosco no dia e horário que
              lhe for mais conveniente.
            </Text>

            <Section style={{ textAlign: "center", padding: "24px 0 8px" }}>
              <Button
                href={meetingUrl}
                style={{
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  fontSize: "15px",
                  fontWeight: "bold",
                  letterSpacing: "1.5px",
                  textTransform: "uppercase",
                  borderRadius: "8px",
                  padding: "18px 48px",
                  textDecoration: "none",
                }}
              >
                Agendar reunião
              </Button>
            </Section>

            <Hr style={{ borderColor: "#2a2a2a", margin: "48px 0 24px" }} />

            <Text style={{ margin: "0 0 8px", fontSize: "15px", color: "#8a8a8a" }}>
              Cumprimentos,
            </Text>
            <Text
              style={{
                margin: "0",
                fontSize: "16px",
                fontWeight: "bold",
                color: "#ffffff",
              }}
            >
              Tiago Alves
            </Text>
            <Text style={{ margin: "2px 0 0", fontSize: "13px", color: "#8a8a8a" }}>
              dotdesign.pt
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
