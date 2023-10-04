import React from 'react'
import Products from './Products'

function Home() {
  return (
    <>
      <div style={{ marginTop: '-16px' }}>
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190621/ourmid/pngtree-cute-baby-products-promotion-banner-poster-background-image_180440.jpg" height="450" alt="E-Commerce Application" />
              <div className="carousel-caption d-none d-md-block" style={{height:'50vh'}}>
                <h1 style={{marginBottom:'50px',fontStyle:'italic'}}>Upto <span style={{fontSize:'55px'}}>30%</span> Off</h1>
                <h2 style={{fontStyle:'italic'}}>Cool Fashion collection for Cool Kids</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Products />
    </>
  )
}

export default Home