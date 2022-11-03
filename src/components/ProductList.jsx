import React from 'react'
import { useFilterContext } from '../Contexts/FilterContext'

const ProductList = () => {

  const AllProducts = useFilterContext();

  console.log(AllProducts);
  return (
    <div>ProductList</div>
  )
}

export default ProductList