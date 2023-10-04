import React, { useState } from 'react'
import product_data from '../../Data';
import { useNavigate } from 'react-router-dom';

import Product from './Product';


function Products() {

  const [productData,setProductData]=useState(product_data);
  const[filterData,setFilterData]=useState(productData);
  const navigate=useNavigate();


//To filter products based on onclick value
  const filterProduct = (value) => {
    const updatedList = productData.filter((x)=>x.category === value);
    console.log(updatedList)
    setFilterData(updatedList);
}
  return (
    <>
    <div className="d-flex justify-content-center mt-5">
      <button className='btn btnproduct me-3' onClick={()=>setFilterData(productData)}>All</button>
      <button className='btn btnproduct me-3' onClick={()=>filterProduct("fashion")}>Fashion</button>
      <button className='btn btnproduct me-3' onClick={()=>filterProduct("feeding")}>Feeding</button>
      <button className='btn btnproduct me-3' onClick={()=>filterProduct("toys")}>Toys and Gifts</button>
      <button className='btn btnproduct me-3' onClick={()=>filterProduct("diaper")}>Diapers</button>
      <button className='btn btnproduct me-3' onClick={()=>filterProduct("skin")}>Skin Care & Health</button>
      </div>
      <div className="row justify-content-center">
        {filterData.map((e) => (
          <Product key={e.id} {...e}/>
        ))}
      </div>
    </>
  )
}

export default Products