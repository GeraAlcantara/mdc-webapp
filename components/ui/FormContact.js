import React from "react";
import FormInput from "./FormInput";

function FormContact() {
  /* usestate to define one object with diferent inputs */
  const [payload, setPayload] = React.useState({
    name: "",
    email: "",
    message: "",
  });
  const inputs = [
    {
      id: "input1",
      name: "name",
      placeholder: "Nombre",
      type: "text",
      label: "Nombre",
    },
    {
      id: "input2",
      name: "email",
      placeholder: "Correo",
      type: "email",
      label: "Correo",
    },
    {
      id: "input3",
      name: "message",
      placeholder: "Mensaje",
      type: "textarea",
      label: "Mensaje",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      {inputs.map((input) => (
        <FormInput key={input.id} {...input} />
      ))}
      <div className='flex justify-end'>
        <div className='inline-flex'>
          <button className='bg-secondary  py-2 px-8  text-white rounded-lg w-full mt-4' type='submit'>
            Enviar
          </button>
        </div>
      </div>
    </form>
  );
}

export default FormContact;
