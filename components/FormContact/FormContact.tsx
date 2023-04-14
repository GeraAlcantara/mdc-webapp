import { useEffect, useState } from 'react'
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
    Position: '',
    CompanySize: '',
    Enquiry: '',
    Email: '',
    Phone: '',
    Country: ''
  })
  const [errors, setErrors] = useState<Values>({})
  const [captchaError, setCaptchaError] = useState<boolean>(false)
  const [formError, setFormError] = useState<string>('')
  const [validationOk, setValidationOk] = useState<boolean>(false)

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
      Position: data.get('Position') as string,
      CompanySize: data.get('CompanySize') as string,
      Enquiry: data.get('Enquiry') as string,
      Email: data.get('Email') as string,
      Phone: data.get('Phone') as string,
      Country: data.get('Country') as string
    })
    validation(values)
  }

  const validation = (data: Values): void => {
    const errors: Values = {}

    if (data.FirstName === '') {
      errors.FirstName = 'El nombre es obligatorio'
    } else if (!/^[a-zA-ZÀ-ÿ\s]{2,30}$/.test(data.FirstName)) {
      errors.FirstName =
        'El primer nombre debe tener entre 2 y 30 caracteres y no contener números o símbolos.'
    }
    if (!data.LastName) {
      errors.LastName = 'El apellido es obligatorio'
    } else if (!/^[a-zA-ZÀ-ÿ\s]{2,40}$/.test(data.LastName)) {
      errors.LastName =
        'El apellido debe tener entre 2 y 30 caracteres y no contener números o símbolos.'
    }
    if (!data.Email) {
      errors.Email = 'El correo es obligatorio'
    } else if (!/[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/.test(data.Email)) {
      errors.Email = 'Debe de ser una dirección de correo válida'
    }
    if (!data.Phone) {
      errors.Phone = 'El teléfono es obligatorio'
    } else if (!/([+]?\d{1,2}[.-\s]?)?(\d{3}[.-]?){2}\d{4}/g.test(data.Phone)) {
      errors.Phone = 'Ejemplo: +52-551-234-5678 ó 525512345678 Formato de teléfono incorrecto.'
    }

    if (!/^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/g.test(data.Company)) {
      errors.Company = 'No debe contener símbolos, usar solo letras y numeros.'
    }
    if (!/^[a-zA-ZÀ-ÿ0-9\s]{1,40}$/g.test(data.Position)) {
      errors.Position = 'No debe contener símbolos, usar solo letras y numeros.'
    }

    if (Object.keys(errors).length === 0) {
      setValidationOk(true)
    }

    /* setErrors */
    setErrors(errors)
  }

  useEffect(() => {
    const sendEmail = async (values: Values) => {
      const config = {
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
          const { captchaIsOK, send } = response.data

          if (!captchaIsOK) {
            setCaptchaKey(new Date().getTime().toString())
            setCaptchaError(true)
          }
          if (send) {
            // console.log('Message sent')
            /* clear message */
            setValues({
              FirstName: '',
              LastName: '',
              Company: '',
              Position: '',
              CompanySize: '',
              Enquiry: '',
              Email: '',
              Phone: '',
              Country: ''
            })
            /* clear errors */
            setErrors({})
            setFormError('')
          }
          if (captchaIsOK === true) {
            setCaptchaError(false)
            setCaptchaSolved(true)

            try {
              await router.replace('/gracias')
            } catch (error) {
              // console.log(error)
            }
          }
        }
        // post 400
      } catch (error: any) {
        if (error.response) {
          setFormError(error.response.data.message)
        }
      }
    }

    if (validationOk && Object.keys(errors).length === 0) {
      sendEmail(values)
    }

    return () => {
      setValidationOk(false)
    }
  }, [validationOk, values, errors, router])

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
                Nombre<span className="text-red-600">*</span>
              </label>
              <input
                className="p-2 w-full rounded-2xl border-slate-300 border-2"
                id="FirstName"
                name="FirstName"
                placeholder="Escribe tu primer nombre"
                required={true}
                type="text"
                value={values.FirstName}
                onChange={onChange}
              />
              {errors.FirstName && <p className="text-red-600 px-2">{errors.FirstName}</p>}
            </div>
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="LastName">
                Apellido<span className="text-red-600">*</span>
              </label>
              <input
                className="p-2 w-full rounded-2xl border-slate-300 border-2 "
                id="LastName"
                name="LastName"
                placeholder="Escribe tu apellido"
                required={true}
                type="text"
                value={values.LastName}
                onChange={onChange}
              />
              {errors.LastName && <p className="text-red-600 px-3">{errors.LastName}</p>}
            </div>
            {/* TODO: Letras y numeros */}
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="Company">
                Compañia
              </label>
              <input
                className="p-2 w-full rounded-2xl border-slate-300 border-2"
                id="Company"
                name="Company"
                placeholder="Escribe el nombre de tu empresa"
                required={false}
                type="text"
                value={values.Company}
                onChange={onChange}
              />
              {errors.Company && <p className="text-red-600 px-3">{errors.Company}</p>}
            </div>
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="Position">
                Puesto
              </label>
              <input
                className="p-2 w-full rounded-2xl border-slate-300 border-2"
                id="Position"
                name="Position"
                placeholder="Escribe el nombre de tu empresa"
                required={false}
                type="text"
                value={values.Position}
                onChange={onChange}
              />
              {errors.Position && <p className="text-red-600 px-3">{errors.Position}</p>}
            </div>
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="CompanySize">
                Tamaño de la empresa
              </label>
              <select
                className="p-2 self-start rounded-2xl border-slate-300 border-2 "
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
                <option value="5001-10000">5001- o más</option>
              </select>
            </div>
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="Enquiry">
                Interesado en
              </label>
              <select
                className="p-2 self-start rounded-2xl border-slate-300 border-2 "
                id="Enquiry"
                name="Enquiry"
                required={false}
                value={values.Enquiry}
                onChange={onChange}
              >
                <option value="Selecciona una opción">Selecciona una opción</option>
                <option value="Cursos de Librería">Cursos de Librería</option>
                <option value="Cursos a medida">Cursos a la medida</option>
                <option value="Traducciones">Traducciones</option>
                <option value="Socios Estratégicos">Socios Estratégicos</option>
                <option value="Otras producciones">Otras producciones</option>
              </select>
            </div>
            <div className="flex flex-col text-black my-4 contactInput">
              <label className="ml-2 mb-1 text-gray-400" htmlFor="Email">
                Correo electrónico<span className="text-red-600">*</span>
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
                Teléfono<span className="text-red-600">*</span>
              </label>
              <input
                className="p-2 w-full rounded-2xl border-slate-300 border-2"
                id="Phone"
                name="Phone"
                placeholder="Telefono de contacto"
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
        <div className="flex flex-col items-end justify-end ">
          {captchaError ? (
            <p className="text-red-600 pb-4">The captcha is not correct, Please try Again </p>
          ) : (
            <p className="text-red-600 pb-6" />
          )}
          {formError && <p className="text-red-600 pb-4">{formError}</p>}
        </div>

        <div className="flex justify-end">
          <div className="inline-flex">
            <button
              className="bg-secondary py-2 px-8 text-brandWhite rounded-full w-full mt-4 hover:bg-brandBlue-400 hover:scale-105 transition-all duration-150 will-change-transform disabled:bg-gray-400 disabled:text-gray-600"
              disabled={!(selectedIndexes.length > 0)}
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
