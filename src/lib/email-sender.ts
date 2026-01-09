import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: import.meta.env.ARUBA_HOST, 
  port: Number(import.meta.env.ARUBA_PORT),             
  secure: true,           
  auth: {
    user: import.meta.env.ARUBA_FROM_EMAIL,
    pass: import.meta.env.ARUBA_PASSWORD,
  },
});

export async function sendEmail(name: string, email: string, message: string) {
  const mailOptions = {
    from: `"Modulo Contatti" <${import.meta.env.ARUBA_FROM_EMAIL}>`,
    to: import.meta.env.ARUBA_TO_EMAIL,
    replyTo: email,
    subject: `Nuovo messaggio dal sito da: ${name}`,
    text: message,
    html: `<p>Hai ricevuto un nuovo messaggio da <strong>${name}</strong></p> <br> <a href="mailto:${email}">${email}</a> <br> <p>${message}</p>` 
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
    return info;
  } catch (error) {
    console.error('Error sending email: ', error);
    throw error;
  }
}