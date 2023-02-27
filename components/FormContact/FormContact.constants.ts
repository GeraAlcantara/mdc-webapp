export const inputs: InputProps[] = [
  {
    id: 1,
    name: 'name',
    placeholder: 'Escribe tu nombre',
    type: 'text',
    errorMessage: 'El Nombre debe tener entre 3 y 40 caracteres y no contener números o símbolos',
    label: 'Nombre',
    pattern: '^[a-zA-ZÀ-ÿ\\s]{3,40}$',
    required: true
  },
  {
    id: 2,
    name: 'email',
    placeholder: 'tuemail@domino.com',
    type: 'email',
    errorMessage: 'Debe de ser una dirección de correo válida',
    label: 'Correo',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
    required: true
  },
  {
    id: 3,
    name: 'message',
    placeholder: 'Escribe tu mensaje',
    type: 'textarea',
    errorMessage: ' El mensaje debe tener entre 10 y 200 caracteres',
    label: 'Mensaje',
    required: true
  }
]
