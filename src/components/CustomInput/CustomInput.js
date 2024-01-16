import React from 'react'

const CustomInput = ({type, name, placeholder, className}) => {
  return (
    <>
      {/* <div>CustomInput</div> */}

      <div>
        <input
          type={ type }
          name={ name }
          placeholder={ placeholder }
          className={ `form-control ${className}` }
        />
      </div>
    </>
  )
}

export default CustomInput;