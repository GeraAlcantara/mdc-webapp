import fs from "fs";
import { withIronSessionApiRoute } from "iron-session/next";
import * as path from "path";

export function newCaptchaImages() {
  const correctProbability = 0.5;
  return new Array(9).fill(null).map((value, index) => {
    const imageTypeCorrect = "smartphone";
    const imageTypeIncorrect = "laptop";
    const isCorrect = Math.random() < correctProbability;
    const number = Math.floor(Math.random() * (isCorrect ? 11 : 12)) + 1;
    const filename = (isCorrect ? imageTypeCorrect : imageTypeIncorrect) + number + ".jpg";
    const imagesDirectory = path.join(process.cwd(), "public/smartcatch");
    return `${imagesDirectory}/${filename}`;
  });
}

export default withIronSessionApiRoute(
  async function handler(req, res) {
    const index = req.query.index;
    if (!req.session) {
      req.session.captchaImages = newCaptchaImages();
      await req.session.save();
    }
    res.setHeader("Content-Type", "image/jpg");
    const imageBuffer = fs.readFileSync(req.session.captchaImages[index]);
    res.send(imageBuffer);
  },
  {
    cookieName: "MDC_SESSION",
    password: process.env.SESSION_SECRET,
    cookieOptions: {
      secure: process.env.NEXT_ENV === "production",
    },
  }
);
