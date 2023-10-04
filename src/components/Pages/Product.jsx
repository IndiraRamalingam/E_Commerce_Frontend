// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import product_data from '../../Data';
// 
// function Product() {
//     const [productData,setProductData]=useState(product_data);
//     const[filterData,setFilterData]=useState(productData);
//     const params=useParams();
//     let p_id=params.id
// 
//     useEffect(()=>{
//         filterProduct(Number(p_id))
//     },[])
// 
//     const filterProduct = (value) => {
//         const updatedList = productData.filter((x)=>x.id === value);
//         console.log(updatedList)
//         setFilterData(updatedList);
//     }
// 
//   return (
//    <>
//      <div className='mb-5'>
//      {filterData.map((e) => {
//           return (
//             <div className='row'>
//             <div className="col-md-6 d-flex justify-content-center mt-5 mb-4">
//             <img src={e.image} alt={e.title}  className='' height="400px" width="400px" />
//             </div>
//             <div className="col-md-6 mt-5 mb-4">
//                 <h4 className="text-uppercase text-black-50">
//                     {e.category}
//                 </h4>
//                 <h1 className="fs-5 text-black-50">{e.title}</h1>
//                 <p className="text-black-50 fw-bolder">
//                     Rating {e.rating && e.rating.rate} 
//                     <i className="fa fa-star"></i>
//                 </p>
//                 <h3 className="text-black-50 fw-bold my-4">
//                 ₹ {e.price}
//                 </h3>
//                 <p className='text-black-50'>{e.description}</p>
//                 <button className="btn btncolorcart px-4 py-2" onClick={()=>addProduct(product)}>
//                     Add to Cart
//                 </button>
//               
//             </div>
//             </div>
//           )
//         })}   
// 
//    </div>
//    </>
//   )
// }
// 
// export default Product



















import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cartSlice';

const Product = ({id,image,title,price}) =>{
    
    const dispatch = useDispatch();

  return (
    <>
    
     <div className="col-md-3 mt-5 me-2">
            <div className="card border-warning h-100 text-center p-4" key={id}>
              <img src={image} className="card-img-top" alt={title} height="250px" />
              <div className="card-body">
                <h5 className="card-title mb-0 mt-2 mb-2">{title.substring(0,25)}...</h5>
                <p className="card-text fs-5 fw-normal fst-italic" style={{color:'#f4a51c'}}>
                Price: ₹{price}
                </p>
                <button className='btn btncolorcart' onClick={() => dispatch(addToCart({ id, image, title, price }))}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
    </>
  )
}

export default Product











