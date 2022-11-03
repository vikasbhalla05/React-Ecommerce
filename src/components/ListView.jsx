import React from 'react'
import { useFilterContext } from '../Contexts/FilterContext'

const ListView = () => {

  const {filteredProducts} = useFilterContext();
  return (
    <div>ListView</div>
  )
}

export default ListView