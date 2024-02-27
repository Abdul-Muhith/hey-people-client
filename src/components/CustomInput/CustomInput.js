import React from 'react'

const CustomInput = ({type, name, placeholder, label, className, value, onChange, onBlur}) => {
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
        />
      </div>
    </>
  )
}

export default CustomInput;