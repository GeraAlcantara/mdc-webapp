import { useEffect, useState } from "react";
import FormInput from "./FormInput";
import axios from "axios";

function FormContact() {
  /* usestate to define one object with diferent inputs */
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const inputs = [
    {
      id: "input1",
      name: "name",
      placeholder: "Escribe tu nombre",
      type: "text",
      errorMessage: "El Nombre debe tener entre 3 y 20 caracteres y no contener números o símbolos",
      label: "Nombre",
      pattern: "^[a-zA-ZÀ-ÿ\\s]{3,20}$",
      required: true,
    },
    {
      id: "input2",
      name: "email",
      placeholder: "tuemail@domino.com",
      type: "email",
      errorMessage: "Debe de ser una dirección de correo válida",
      label: "Correo",
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      required: true,
    },
    {
      id: "input3",
      name: "message",
      placeholder: "Escribe tu mensaje",
      type: "textarea",
      errorMessage: " El mensaje debe tener entre 10 y 200 caracteres",
      label: "Mensaje",
      required: true,
    },
  ];
  const onChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setValues({
      name: data.get("name").toString(),
      email: data.get("email").toString(),
      message: data.get("message").toString(),
    });
    validation(values);
    console.log(values);
  };

  const sendEmail = async (values) => {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };
    try {
      const response = await axios(config);
      if (response.status === 200) {
        console.log("Sucess");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const validation = (data) => {
    let errors = {};
    if (!data.name) {
      errors.name = "El nombre es obligatorio";
    } else if (!/^[a-zA-ZÀ-ÿ\s]{3,20}$/.test(data.name)) {
      errors.name = "El Nombre debe tener entre 3 y 20 caracteres y no contener números o símbolos";
    }
    if (!data.email) {
      errors.email = "El correo es obligatorio";
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/.test(data.email)) {
      errors.email = "Debe de ser una dirección de correo válida";
    }
    if (!data.message) {
      errors.message = "El mensaje es obligatorio";
      /* min 10 max 150 */
    } else if (data.message.length < 10 || data.message.length > 150) {
      errors.message = "El mensaje debe tener entre 10 y 200 caracteres";
    }
    if (Object.keys(errors).length === 0) {
      sendEmail(data);
    }
    /* setErrors */
    setErrors(errors);
    console.log(errors);
  };

  useEffect(() => {
    console.log("errors", errors);
  }, [errors, values]);

  return (
    <form onSubmit={handleSubmit} action='POST' className='group'>
      {inputs.map((input) => (
        <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange} errors={errors[input.name]} />
        /* if errors  */
      ))}
      <div className='flex justify-end'>
        <div className='inline-flex'>
          <button
            className='bg-secondary py-2 px-8 text-white rounded-lg w-full mt-4 hover:bg-brandBlue-400 hover:scale-105 will-change-transform'
            type='submit'
          >
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormContact;
