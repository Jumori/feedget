import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from '../mail-adapter'

const transport = nodemailer.createTransport({
  host: 'smtp.mailtrap.io',
  port: 2525,
  auth: {
    user: process.env.MAILTRAP_USER,
    pass: process.env.MAILTRAP_PASS
  }
})

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <suporte@feedget.com>',
      to: 'John Doe <johndoe@email.com>',
      subject,
      html: body
    })
  }
}
