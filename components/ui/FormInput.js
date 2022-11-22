import { useState } from "react";

function FormInput(props) {
  const [focus, setFocus] = useState(false);
  const { label, errorMessage, errors, onChange, id, ...inputProps } = props;
  const handleFocus = () => {
    setFocus(true);
  };

  return (
    <div className='flex flex-col text-black my-4 group-input contactInput'>
      <label className='ml-2 mb-1 text-gray-400'>{label}</label>
      {/* check if typoe is a text area */}
      {props.type === "textarea" ? (
        <textarea
          className='p-2 w-full rounded-lg resize-none min-h-[170px] group-invalid:border-red-500'
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focus.toString()}
        />
      ) : (
        <input className='p-2 w-full rounded-lg group ' {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focus.toString()} />
      )}
      <p className=' text-red-500  '>{errorMessage}</p>
      {errors ? <span className='text-red-500'>{errors}</span> : null}
    </div>
  );
}

export default FormInput;
