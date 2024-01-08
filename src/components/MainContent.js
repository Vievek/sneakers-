import React from 'react'
import ProductImage from './ProductImage'
import ProductInfo from './ProductInfo'
function MainContent() {
  return (
    <>
        <div className='mainContent'>
            <ProductImage/>
            <ProductInfo/>
        </div>
    </>
  )
}

export default MainContent