import nodemailer from 'nodemailer';

const emailService = {
  transporter: nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    secure: process.env.EMAIL_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  }),

  sendEmail: async (to: string, subject: string, text: string, html?: string) => {
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to,
      subject,
      text,
      html,
    };

    try {
      await emailService.transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Email sending failed');
    }
  },

  sendVerificationEmail: async (to: string, verificationLink: string) => {
    const subject = 'Email Verification';
    const text = `Please verify your email by clicking on the following link: ${verificationLink}`;
    const html = `<p>Please verify your email by clicking on the following link: <a href="${verificationLink}">${verificationLink}</a></p>`;
    await emailService.sendEmail(to, subject, text, html);
  },

  sendNotificationEmail: async (to: string, message: string) => {
    const subject = 'Notification';
    const text = message;
    const html = `<p>${message}</p>`;
    await emailService.sendEmail(to, subject, text, html);
  },
};

export default emailService;