import { withIronSessionApiRoute } from "iron-session/next";
import { newCaptchaImages } from "./captcha-image";

export default withIronSessionApiRoute(
  async function handler(req, res, session) {
    /* check that req is post */
    if (req.method !== "POST") {
      res.status(405).json({ error: "Method not allowed" });
      return;
    }
    /* check that req has body */
    if (!req.body) {
      res.status(400).json({ error: "Bad request" });
      return;
    }
    const { message, selectedIndexes } = req.body;
    /* check wich image from the section are correct */
    /* [0, 4 ] */
    /* slectedidex */

    const correctIndexes = req.session.captchaImages.map((path, index) => (path.includes("/dogandmuffins/dog") ? index : -1)).filter((index) => index !== -1);

    /* Compare the arrays
     * wrong way [1,2,3] === [1,2,3] // false
     * right way [1,2,3].toString() === [1,2,3].toString() // true
     * or JSON.stringify([1,2,3]) === JSON.stringify([1,2,3]) // true
     * remember to sort the arrays before compare so the order of selectedIndexes is not important
     */
    const captchaIsOK = JSON.stringify(correctIndexes) === JSON.stringify(selectedIndexes.sort());

    if (!captchaIsOK) {
      // reset captcha images
      req.session.captchaImages = newCaptchaImages();
      await req.session.save();
    }

    /* send  */
    const send = captchaIsOK;
    // send email for real

    res.status(200).json({ captchaIsOK, send });
  },
  {
    cookieName: "MDC_SESSION",
    password: process.env.SESSION_SECRET,
  }
);
