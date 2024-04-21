import React from 'react';
// import ImageWithPlaceholder from './ImageWithPlaceholder';
import './Styles.css'
import './Productlist.css'
import ProductList from './ProductList';
import trial from '../images/trial.jpg'

export default function Content() {
  return (
    <>
        <div class='container-fluid'>
            <div class='row'>
            <div class='col-6'>
                <h1>Welcome To Our Website</h1>
            </div>
            <div class='col-3'>
                {/* <ImageWithPlaceholder imageUrl="https://via.placeholder.com/300x200" /> */}
                <img src={trial} style={{width: '400px', height: '200px'}}/>
            </div>
            </div>


            <div class="row">
                <form class="d-flex">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width:'500px'}}/>
                </form>
                <ul class='myclass'>
                    <li><a href='#'>Newest</a></li>
                    <li><a href='#'>price: low to high</a></li>
                    <li><a href='#'>price: high to low</a></li>
                </ul>
                
            </div>

            <div class='row'>
                <ProductList />
            </div>
      </div>
    </>
  );
}
