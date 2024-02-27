import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Text,
} from '@react-email/components'
import * as React from 'react'

interface NotionMagicLinkEmailProps {
  loginCode?: string
}

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : ''

export const NotionMagicLinkEmail = ({
  loginCode,
}: NotionMagicLinkEmailProps) => (
  <Html>
    <Head />
    <Preview>Verificar e-mail</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>Verificar e-mail</Heading>
        <Link
          href={`https://mendi.app/auth/new-verification?token=${loginCode}`}
          target="_blank"
          style={{
            ...link,
            display: 'block',
            marginBottom: '16px',
          }}
        >
          Clique aqui para confirmar seu e-mail
        </Link>
        <Text
          style={{
            ...text,
            color: '#ababab',
            marginTop: '14px',
            marginBottom: '16px',
          }}
        >
          Se você não tentou criar uma conta, pode ignorar este e-mail com
          segurança.
        </Text>
        <Img
          src={`${baseUrl}/static/mendi-logo.png`}
          width="32"
          height="32"
          alt="Mendi Logo"
        />
        <Text style={footer}>
          <Link
            href="https://mendi.so"
            target="_blank"
            style={{ ...link, color: '#898989' }}
          >
            mendi.app
          </Link>
          , a solução perfeita
          <br />
          para cardápio digital.
        </Text>
      </Container>
    </Body>
  </Html>
)

NotionMagicLinkEmail.PreviewProps = {
  loginCode: '123456',
} as NotionMagicLinkEmailProps

export default NotionMagicLinkEmail

const main = {
  backgroundColor: '#ffffff',
}

const container = {
  paddingLeft: '12px',
  paddingRight: '12px',
  margin: '0 auto',
}

const h1 = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '40px 0',
  padding: '0',
}

const link = {
  color: '#2754C5',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  textDecoration: 'underline',
}

const text = {
  color: '#333',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '14px',
  margin: '24px 0',
}

const footer = {
  color: '#898989',
  fontFamily:
    "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '12px',
  lineHeight: '22px',
  marginTop: '12px',
  marginBottom: '24px',
}
