import React from 'react'
import './Navbar.css'
import logo from '../../assets/al-ruhamah-org.png'
import search_icon from '../../assets/search.png'
import shopping_cart_icon from '../../assets/shopping_cart_icon.svg'

function Navbar() {
  return (
    <div className='navbar-container'>
      <div>
        <div className='logo-container-image'>
            <img className='logo_img' src={logo}></img>
        </div>

        <div className='phone-links-wrap'>
            <div className='phone_Number'>+256 774 132 665</div>  
                 
            <div className='additional-phone-links'>
                <a href='tel:+256759200235'><span className="dotted-underline">Request Call</span></a>
                <a href='#'><span>Contact Us</span></a>
            </div>
        </div>
       </div> 

        <div className='cart-user-wrap'>
            <div className='search-container '>
              <form action='' className='search-bar'>
                <input type='text' placeholder='Search Anything' name='q' />
                  <button type='submit'><img src={search_icon} alt='' /></button>
              </form>
            </div>

            <div className='shopping-icon-cart'>
                <img src={shopping_cart_icon} />
                <span className='quantity'>0</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar