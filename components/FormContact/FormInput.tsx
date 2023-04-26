import { useState } from 'react'
// FormInputProps extend InputProps

interface InputProps {
  placeholder: string
  name: string
  onChange: (
    e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>
  ) => void
  label: string
  id: number
  value: string
  type: string
  errorMessage: string
  required?: boolean
  pattern?: string
  focused?: string
  errors?: string
}

function FormInput(props: InputProps) {
  const [focus, setFocus] = useState<Boolean>(false)
  const { label, errorMessage, errors, onChange, id, ...inputProps } = props

  const HandleFocus = (
    e: React.FocusEvent<HTMLInputElement> | React.FocusEvent<HTMLTextAreaElement>
  ) => {
    e.preventDefault()
    setFocus(true)
  }

  return (
    <div className="flex flex-col text-black my-4 contactInput">
      <label className="ml-2 mb-1 text-gray-400">{label}</label>
      {/* check if type is a text area */}
      {props.type === 'textarea' ? (
        <textarea
          className="p-2 w-full rounded-2xl resize-none min-h-[180px] border-slate-300 border"
          onChange={onChange}
          {...inputProps}
          data-focused={focus.toString()}
          onBlur={HandleFocus}
        />
      ) : (
        <input
          className="p-2 w-full rounded-2xl border-slate-300 border "
          {...inputProps}
          data-focused={focus.toString()}
          onBlur={HandleFocus}
          onChange={onChange}
        />
      )}
      <p className=" text-red-500 text-sm mt-1 ml-2 ">{errorMessage}</p>
      {errors ? <span className="text-red-500 text-sm">{errors}</span> : null}
    </div>
  )
}

export default FormInput
