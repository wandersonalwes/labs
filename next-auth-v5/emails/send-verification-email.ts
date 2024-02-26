import { sendEmail } from './send-email'

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`

  sendEmail({
    from: 'oi@wandersonalwes.com.br',
    subject: 'Confirme sua conta',
    to: email,
    html: `<p>Clique <a href="${confirmLink}">aqui</a> para confirmar sua conta</p>`,
  })
}
