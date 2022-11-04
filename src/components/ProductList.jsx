import React from 'react'
import { useFilterContext } from '../Contexts/FilterContext'
import ListView from './ListView';
import GridView from './GridView';

const ProductList = () => {

  const {filteredProducts, gridView} = useFilterContext();
  console.log(gridView);

  return gridView===false ? <ListView products={filteredProducts}/> : <GridView products={filteredProducts}/>
}

export default ProductList