export const inputs: InputProps[] = [
  {
    id: 101,
    name: 'FirstName',
    placeholder: 'Escribe tu primer nombre',
    type: 'text',
    errorMessage: 'El Nombre debe tener entre 3 y 30 caracteres y no contener números o símbolos',
    label: 'Nombre',
    pattern: '^[a-zA-ZÀ-ÿ\\s]{3,30}$',
    required: true
  },
  // apellido
  {
    id: 102,
    name: 'LastName',
    placeholder: 'Escribe tu apellido',
    type: 'text',
    errorMessage: 'El Apellido debe tener entre 3 y 40 caracteres y no contener números o símbolos',
    label: 'Apellido',
    pattern: '^[a-zA-ZÀ-ÿ\\s]{3,40}$',
    required: true
  },
  // compañia
  {
    id: 103,
    name: 'Company',
    placeholder: 'Escribe el nombre de tu compañia',
    type: 'text',
    errorMessage:
      'El Nombre de la compañia debe tener entre 3 y 30 caracteres y no contener números o símbolos',
    label: 'Compañia',
    pattern: '^[a-zA-ZÀ-ÿ\\s]{3,30}$',
    required: false
  },
  // compañia tañaño select
  {
    id: 104,
    name: 'CompanySize',
    placeholder: 'Selecciona el tamaño de tu compañia',
    type: 'select',
    errorMessage: 'Selecciona una opción',
    label: 'Tamaño de la compañia',
    pattern: 'none',
    required: false
  },
  {
    id: 105,
    name: 'Email',
    placeholder: 'tuemail@domino.com',
    type: 'email',
    errorMessage: 'Debe de ser una dirección de correo válida',
    label: 'Correo',
    pattern: '[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$',
    required: true
  },
  // phone
  {
    id: 106,
    name: 'Phone',
    placeholder: 'Escribe tu número de teléfono',
    type: 'tel',
    errorMessage: 'Debe de ser un número de teléfono válido',
    label: 'Teléfono',
    // country code + 10 digits
    pattern: '^[0-9]{10,15}$',
    required: true
  },
  // country
  {
    id: 107,
    name: 'Country',
    placeholder: 'Selecciona tu país',
    type: 'select',
    errorMessage: 'Selecciona una opción',
    label: 'País',
    pattern: 'none',
    required: false
  }
]

// alphabetically sorted español LATAM , USA, Canada, Mexico
export const CountryCodes = [
  { code: 'MX', label: 'México' },
  { code: 'AR', label: 'Argentina' },
  { code: 'BO', label: 'Bolivia' },
  { code: 'BR', label: 'Brasil' },
  { code: 'CL', label: 'Chile' },
  { code: 'CA', label: 'Canada' },
  { code: 'CO', label: 'Colombia' },
  { code: 'CR', label: 'Costa Rica' },
  { code: 'CU', label: 'Cuba' },
  { code: 'DO', label: 'República Dominicana' },
  { code: 'EC', label: 'Ecuador' },
  { code: 'SV', label: 'El Salvador' },
  { code: 'GT', label: 'Guatemala' },
  { code: 'HN', label: 'Honduras' },
  { code: 'NI', label: 'Nicaragua' },
  { code: 'PA', label: 'Panamá' },
  { code: 'PY', label: 'Paraguay' },
  { code: 'PE', label: 'Perú' },
  { code: 'PR', label: 'Puerto Rico' },
  { code: 'ES', label: 'España' },
  { code: 'US', label: 'Estados Unidos' },
  { code: 'UY', label: 'Uruguay' }
]
