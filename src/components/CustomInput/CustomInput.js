const CustomInput = ({
  type,
  name,
  placeholder,
  label,
  className,
  value,
  onChange,
  onBlur,
  disabled
}) => {
  return (
    <>
      {/* <div>CustomInput</div> */}

      <div>
        <label
          htmlFor= { name }
          className={ `mb-1 ${className}` }
        >
          { label }
        </label>

        <input
          id={ name }
          type={ type }
          name={ name }
          placeholder={ placeholder }
          className={ `form-control ${className}` }
          value={ value }
          onChange={ onChange }
          onBlur={ onBlur }
          disabled={ disabled }
        />
      </div>
    </>
  )
}

export default CustomInput;