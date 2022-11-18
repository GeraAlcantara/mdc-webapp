/**
 *
 * @param {*} props
 * @returns
 */
function FormInput(props) {
  return (
    <div className='flex flex-col text-black my-4'>
      <label className='sr-only'>{props.label}</label>
      {/* check if typoe is a text area */}
      {props.type === "textarea" ? (
        <textarea className='p-2 w-full rounded-lg resize-none min-h-[170px]' name={props.name} placeholder={props.placeholder} />
      ) : (
        <input className='p-2 w-full rounded-lg' type={props.type} name={props.name} placeholder={props.placeholder} />
      )}
    </div>
  );
}

export default FormInput;
