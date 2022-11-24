import { useState } from "react";
import Captcha from "./Captcha";
import axios from "axios";
import { useRouter } from "next/router";

function CaptchaForm({ defaultCaptchaKey }) {
  const router = useRouter();
  const [message, setMessage] = useState("");
  const [selectedIndexes, setSelectedIndexes] = useState([]);
  const [captchaKey, setCaptchaKey] = useState(defaultCaptchaKey);
  const [captchaSolved, setCaptchaSolved] = useState(false);
  const [error, setError] = useState(false);

  /* Send message */
  const send = async () => {
    if (!message) {
      alert("The message is requiered");
      return;
    }
    const config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/send`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { message, selectedIndexes },
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        const { captchaIsOK, send } = response.data;

        if (!captchaIsOK) {
          setCaptchaKey(new Date().getTime());
          setError(true);
          console.log("The captcha is not correct");
        }
        if (send) {
          console.log("Message sent");
          /* clear message */
          setMessage("");
        }
        if (captchaIsOK) {
          setCaptchaSolved(true);
          setError(false);
          /* router.replace("/gracias"); */
        }

        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='pt-8'>
        <h1 className='text-4xl font-bold text-center'>Test captcha</h1>
      </div>
      {captchaSolved ? (
        <div className='flex flex-col items-center justify-center h-[200px]'>
          <h1 className='text-4xl font-bold text-center pb-4'>¡Gracias!</h1>
          <p className='text-2xl font-bold text-center'>Tu mensaje ha sido enviado 👍</p>
        </div>
      ) : (
        <div className='flex justify-center mt-12'>
          <div>
            <input className='text-gray-900 px-2 py-1 rounded-md' type='text' placeholder='Message' onChange={(e) => setMessage(e.currentTarget.value)} />
            <Captcha captchaKey={captchaKey} onChange={setSelectedIndexes} />
            {error ? <p className='text-red-600 pb-4'>The captcha is not correct, Please try Again </p> : <p className='text-red-600 pb-6'></p>}

            <button onClick={send} className='bg-secondary py-1 px-6 rounded-md'>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default CaptchaForm;
