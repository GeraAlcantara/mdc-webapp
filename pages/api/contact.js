import { withIronSessionApiRoute } from "iron-session/next";
import { newCaptchaImages } from "./captcha-image";
import nodemailer from "nodemailer";
import { z } from "zod";

export default withIronSessionApiRoute(
  async function handler(req, res, session) {
    /* handle only post req */
    if (req.method !== "POST") {
      return res.status(200).json({ message: "Method not allowed" });
    }
    /* verify if req.body have {name & email & message}  */
    if (!req.body.name || !req.body.email || !req.body.message) {
      console.log(req.body.name, req.body.email, req.body.message, req.body.selectedIndexes);
      return res.status(400).json({ message: "Bad request" });
    }
    const { name, email, message, selectedIndexes } = req.body;
    /* validade name, email, message with zod to prevent XSS  */
    const schema = z.object({
      name: z.string().min(3).max(40),
      email: z.string().email(),
      message: z.string().min(10).max(150),
      selectedIndexes: z.array(z.number()).min(1).max(9),
    });
    try {
      schema.parse({ name, email, message, selectedIndexes });
    } catch (error) {
      return res.status(400).json({ message: "schema fail Bad request" });
    }
    /* check wich image from the captcha are correct */
    const correctIndexes = req.session.captchaImages
      .map((path, index) => (path.includes("/smartcatch/smartphone") ? index : -1))
      .filter((index) => index !== -1);

    const captchaIsOK = correctIndexes.toString() === selectedIndexes.sort().toString();

    if (!captchaIsOK) {
      // reset captcha images
      req.session.captchaImages = newCaptchaImages();
      await req.session.save();
    }

    /* create transporter */
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
      /* Real email send */
      const send = captchaIsOK;
      if (captchaIsOK) {
        await transporter.sendMail(mailOptions);
        return res.status(200).json({ message: "Email sent successfully", captchaIsOK, send });
      }
      return res.status(200).json({ message: "Email not sent", captchaIsOK, send });
    } catch (error) {
      res.status(500).json({ message: "Error sending email", error: error });
    }
  },
  {
    cookieName: "MDC_SESSION",
    password: process.env.SESSION_SECRET,
  }
);
