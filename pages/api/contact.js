import nodemailer from "nodemailer";

export default async function handler(req, res) {
  /* handle only post req */
  if (req.method === "GET") {
    return res.status(200).json({ message: "Get request not allowed " });
  }
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    /* get from .env data */
    service: "gmail",
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: "gerardo.alcantara@mexicodc.com",
    subject: `Forma de Contacto enviada por ${name}`,
    html: `<h1>Nombre: ${name}</h1>
        <h2>Email: ${email}</h2>
        <p>Mensaje: ${message}</p>`,
  };
  try {
    await transporter.sendMail(mailOptions);
    transporter.close();

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error sending email", error: error });
  }
}
