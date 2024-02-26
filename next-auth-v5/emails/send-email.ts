import { resend } from '@/lib/resend'

type SendEmailProps = {
  from: string
  to: string
  subject: string
  html: string
}

export const sendEmail = async (props: SendEmailProps) => {
  try {
    await resend.emails.send(props)
  } catch (error) {
    console.log(error)
  }
}
