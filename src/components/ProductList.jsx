import React from 'react'
import { useFilterContext } from '../Contexts/FilterContext'
import ListView from './ListView';
import GridView from './GridView';

const ProductList = () => {

  const {filterProducts, gridView} = useFilterContext();

  return gridView===false ? <ListView products={filterProducts}/> : <GridView products={filterProducts}/>
}

export default ProductList