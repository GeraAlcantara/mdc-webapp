import { useState } from "react";

function FormInput(props) {
  const [focus, setFocus] = useState(false);
  const { label, errorMessage, errors, onChange, id, ...inputProps } = props;
  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className='flex flex-col text-black my-4 contactInput'>
      <label className='ml-2 mb-1 text-gray-400'>{label}</label>
      {/* check if type is a text area */}
      {props.type === "textarea" ? (
        <textarea
          className='p-2 w-full rounded-2xl resize-none min-h-[180px] border-slate-300 border'
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focus.toString()}
        />
      ) : (
        <input
          className='p-2 w-full rounded-2xl border-slate-300 border '
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focus.toString()}
        />
      )}
      <p className=' text-red-500 text-sm mt-1 ml-2 '>{errorMessage}</p>
      {errors ? <span className='text-red-500 text-sm'>{errors}</span> : null}
    </div>
  );
}

export default FormInput;
