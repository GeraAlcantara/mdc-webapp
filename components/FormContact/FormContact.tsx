import { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

import Captcha from './Captcha'
import * as CONSTANTS from './FormContact.constants'

function FormContact({ defaultCaptchaKey }: { defaultCaptchaKey: string }) {
  const router = useRouter()
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([])
  const [captchaKey, setCaptchaKey] = useState<string>(defaultCaptchaKey)
  const [captchaSolved, setCaptchaSolved] = useState<boolean>(false)
  const [values, setValues] = useState<Values>({
    FirstName: '',
    LastName: '',
    Company: '',
    CompanySize: '',
    Email: '',
    Phone: '',
    Country: ''
  })
  const [errors, setErrors] = useState<Values>({})
  const [captchaError, setCaptchaError] = useState<boolean>(false)
  const [formError, setFormError] = useState<string>('')

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)

    setValues({
      FirstName: data.get('FirstName') as string,
      LastName: data.get('LastName') as string,
      Company: data.get('Company') as string,
      CompanySize: data.get('CompanySize') as string,
      Email: data.get('Email') as string,
      Phone: data.get('Phone') as string,
      Country: data.get('Country') as string
    })
    validation(values)
  }

  const sendEmail = async (values: Values) => {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/contact`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: { ...values, selectedIndexes }
    }

    try {
      const response = await axios(config)

      if (response.status === 200) {
        //console.log(response.data)
        const { captchaIsOK, send } = response.data

        if (!captchaIsOK) {
          setCaptchaKey(new Date().getTime().toString())
          setCaptchaError(true)
          //console.log('The captcha is not correct')
        }
        if (send) {
          //console.log('Message sent')
          /* clear message */
          setValues({
            FirstName: '',
            LastName: '',
            Company: '',
            CompanySize: '',
            Email: '',
            Phone: '',
            Country: ''
          })
          /* clear errors */
          setErrors({})
        }
        if (captchaIsOK) {
          setCaptchaError(false)
          setCaptchaSolved(true)

          router.replace('/gracias')
        }
      }
      if (response.status === 400) {
        //console.log('Error' + response.data.message)
        setFormError(response.data.message)
      }
    } catch (error) {
      //console.log(error)
    }
  }

  const validation = (data: Values) => {
    let errors: Values = {}

    if (!data.FirstName) {
      errors.FirstName = 'El nombre es obligatorio'
    } else if (!/^[a-zA-ZÀ-ÿ\s]{3,30}$/.test(data.FirstName)) {
      errors.FirstName =
        'El primer nombre debe tener entre 10 y 30 caracteres y no contener números o símbolos'
    }
    if (!data.LastName) {
      errors.LastName = 'El apellido es obligatorio'
    } else if (!/^[a-zA-ZÀ-ÿ\s]{3,40}$/.test(data.LastName)) {
      errors.LastName =
        'El apellido debe tener entre 10 y 40 caracteres y no contener números o símbolos'
    }
    if (!data.Email) {
      errors.Email = 'El correo es obligatorio'
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/.test(data.Email)) {
      errors.Email = 'Debe de ser una dirección de correo válida'
    }
    if (!data.Phone) {
      errors.Phone = 'El teléfono es obligatorio'
    } else if (!/^[0-9]{10,15}$/.test(data.Phone)) {
      errors.Phone = 'El teléfono debe tener entre 10 y 15 caracteres'
    }

    if (Object.keys(errors).length === 0) {
      sendEmail(data)
    }

    /* setErrors */
    setErrors(errors)
  }

  return (
    <div className="py-5 px-7 xl:py-10 xl:px-14 bg-slate-200 rounded-3xl h-full">
      <form action="POST" className="group" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row md:gap-6 justify-between">
          <div className="md:w-1/2">
            <div className="flex flex-col gap-4 pt-4">
              <h1 className="text-secondary text-3xl lg:text-5xl font-bold ">Escríbenos</h1>
              <p className="text-gray-600 font-light w-5/6">
                Ingresa tus datos de contacto y en breve uno de nuestros representantes se
                comunicará contigo.
              </p>
            </div>
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="FirstName">
                Nombre
              </label>
              <input
                className="p-2 w-full rounded-2xl border-slate-300 border-2"
                id="FirstName"
                name="FirstName"
                pattern="^[a-zA-ZÀ-ÿ\s]{3,30}$"
                placeholder="Escribe tu primer nombre"
                required={true}
                type="text"
                value={values.FirstName}
                onChange={onChange}
              />
              {errors.FirstName && <p className="text-red-600">{errors.FirstName}</p>}
            </div>
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="LastName">
                Apellido
              </label>
              <input
                className="p-2 w-full rounded-2xl border-slate-300 border-2 "
                id="LastName"
                name="LastName"
                pattern="^[a-zA-ZÀ-ÿ\s]{3,40}$"
                placeholder="Escribe tu apellido"
                required={true}
                type="text"
                value={values.LastName}
                onChange={onChange}
              />
              {errors.LastName && <p className="text-red-600">{errors.LastName}</p>}
            </div>
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="Company">
                Empresa
              </label>
              <input
                className="p-2 w-full rounded-2xl border-slate-300 border-2"
                id="Company"
                name="Company"
                pattern="^[a-zA-ZÀ-ÿ\s]{3,30}$"
                placeholder="Escribe el nombre de tu empresa"
                required={false}
                type="text"
                value={values.Company}
                onChange={onChange}
              />
            </div>
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="CompanySize">
                Tamaño de la empresa
              </label>
              <select
                className="p-2 self-start rounded-2xl border-slate-300 border-2"
                defaultValue="Selecciona una opción"
                id="CompanySize"
                name="CompanySize"
                required={false}
                value={values.CompanySize}
                onChange={onChange}
              >
                <option value="Selecciona una opción">Selecciona una opción</option>
                <option value="1-10">1-10</option>
                <option value="11-50">11-50</option>
                <option value="51-100">51-100</option>
                <option value="101-500">101-500</option>
                <option value="501-1000">501-1000</option>
                <option value="1001-5000">1001-5000</option>
                <option value="5001-10000">5001-10000</option>
                <option value="10001-50000">10001-50000</option>
                <option value="50001-100000">50001-100000</option>
              </select>
            </div>
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="Email">
                Correo electrónico
              </label>
              <input
                className="p-2 w-full rounded-2xl border-slate-300 border-2"
                id="Email"
                name="Email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$"
                placeholder="Escribe tu correo electrónico"
                required={true}
                type="email"
                value={values.Email}
                onChange={onChange}
              />
              {errors.Email && <p className="text-red-600">{errors.Email}</p>}
            </div>
            {/* Phone */}
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="Phone">
                Teléfono
              </label>
              <input
                className="p-2 w-full rounded-2xl border-slate-300 border-2"
                id="Phone"
                name="Phone"
                pattern="^[0-9]{10,15}$"
                placeholder="Escribe tu número de teléfono"
                required={true}
                type="tel"
                value={values.Phone}
                onChange={onChange}
              />
              {errors.Phone && <p className="text-red-600">{errors.Phone}</p>}
            </div>
            {/* Country */}
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="Country">
                País
              </label>
              <select
                className="p-2 self-start rounded-2xl border-slate-300 border-2 "
                defaultValue="Selecciona una opción"
                id="Country"
                name="Country"
                required={false}
                value={values.Country}
                onChange={onChange}
              >
                <option value="Selecciona una opción">Selecciona una opción</option>
                {CONSTANTS.CountryCodes.map((country) => (
                  <option key={country.code} value={country.label}>
                    {country.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <Captcha captchaKey={captchaKey} onChange={setSelectedIndexes} />
        </div>
        <div className="flex justify-end h-4">
          {captchaError ? (
            <p className="text-red-600 pb-4">The captcha is not correct, Please try Again </p>
          ) : (
            <p className="text-red-600 pb-6" />
          )}
        </div>

        <div className="flex justify-end">
          <div className="inline-flex">
            <button
              className="bg-secondary py-2 px-8 text-brandWhite rounded-full w-full mt-4 hover:bg-brandBlue-400 hover:scale-105 transition-all duration-150 will-change-transform disabled:bg-gray-400 disabled:text-gray-600"
              disabled={selectedIndexes.length > 0 ? false : true}
              type="submit"
            >
              Enviar
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default FormContact
