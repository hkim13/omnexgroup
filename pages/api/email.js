import nodemailer from 'nodemailer';


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { fullName, email, subject, message } = req.body;

    let transporter = nodemailer.createTransport({
      host: 'mail.smtp2go.com',
      port: 2525, 
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME, 
        pass: process.env.SMTP_PASSWORD,
      },
    });

    try {
      const emailRes = await transporter.sendMail({
        from: email, 
        to: 'contactus@omnexgroup.com', 
        subject: subject, 
        text: `Message from ${fullName}: ${message}`,
        html: `<b>Message from ${fullName}:</b><p>${message}</p>`,
      });

      console.log('Message Sent', emailRes.messageId);
      res.status(200).json({ status: 'Ok' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ status: 'Error', message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
