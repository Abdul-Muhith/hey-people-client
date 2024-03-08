import React from 'react'

const ProductColor = ({productColor, setColor}) => {

  // console.log('productColor', productColor);

  return (
    <>
      {/* <div>ProdcutColor</div> */}

      <ul className="d-flex flex-wrap gap-10 ps-0 colors list-unstyled mb-0">
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li> */}

        { productColor && productColor?.map((item, i) => {
          return (
            <li
              key={ i }
              onClick={() => setColor(item?._id)}
              style={ { backgroundColor: item?.title } }
            ></li>
          )
        })}
      </ul>
    </>
  )
}

export default ProductColor;