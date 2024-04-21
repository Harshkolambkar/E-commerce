import React from 'react'
import './Footer.css'
export default function Footer() {
  return (
    
    <div class='footer'>
        <div class="row">
            <div class="col-4">
                <div className='text-content'>
                    <h1>Sign Up for NewsLetter</h1>
                    <h5>Sign up for our news letter for weekly update <br/> on new fashion trends</h5>
                </div>
            </div>
            <div class="col-4">
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Email" aria-label="Search"/>
                <button class="btn btn-outline-dark" type="submit">submit</button>
            </form>
            </div>
        </div>
        <div class="row">
            <div class='col'>
                <ul class='navigation'>
                    <li><a href='#'>Terms & Conditions</a></li>
                    <li><a href='#'>Privacy Policy</a></li>
                </ul>
            </div>
            <div class='col'>
                <ul class='navigation'>
                    <li><a href='#'>Home</a></li>
                    <li><a href='#'>Contact Us</a></li>
                </ul>
            </div>
        </div>
    </div>
    
  )
}
