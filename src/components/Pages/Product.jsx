
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











