import React from 'react'
import './Main.css'
import ProductTitle from './ProductTitle'
import ProductDescription from './ProductDescription'
import PriceComponent from './PriceComponent'
import QuantitySelector from './QuantitySelector'
import AddToCartButton from './AddToCartButton'

function ProductInfo() {
  return (
    <>
    <div className='ProductInfo'>

      <ProductTitle/>
      <ProductDescription/>
      <PriceComponent/>
      <QuantitySelector/>
      <AddToCartButton/>
    </div>
    </>
  )
}

export default ProductInfo