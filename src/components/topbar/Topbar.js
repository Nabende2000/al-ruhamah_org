import React from 'react'
import './Topbar.css'
import { useNavigate } from 'react-router-dom';

function Topbar() {
  const navigate = useNavigate();

  const handleLogoNameClick = (event) => {
    event.preventDefault();
    // Navigate to the home page or the desired route when the logo is clicked
    navigate('/');
  };


  const handleBlogClick = (event) => {
    event.preventDefault();
    // Navigate to the Blog page or the desired route
    navigate('/blog');
  };

  const handleMonthlyGivingClick = (event) => {
    event.preventDefault();
    // Navigate to the Monthly Giving page or the desired route
    navigate('/monthly-giving');
  };

  const handleFAQClick = (event) => {
    event.preventDefault();
    // Navigate to the FAQ page or the desired route
    navigate('/faq');
  };

  const handleDonationPoliciesClick = (event) => {
    event.preventDefault();
    // Navigate to the Donation Policies page or the desired route
    navigate('/donation-policies');
  };

  const handleAboutUsClick = (event) => {
    event.preventDefault();
    // Navigate to the Donation Policies page or the desired route
    navigate('/about-us');
  };


  return (
    <div>
      <nav className='topbar flex'>
        <label className='logo_name' onClick={handleLogoNameClick}>Al-Ruhamah Organization</label>

        <ul className='topbar_links flex'>
        <li><a href='#' onClick={handleAboutUsClick}>About Us</a></li>
          <li><a href='#' onClick={handleBlogClick}>Our Blog</a></li>
          <li><a href='#' onClick={handleMonthlyGivingClick}>Monthly Giving</a></li>
          <li><a href='#' onClick={handleFAQClick}>FAQ</a></li>
          <li><a href='#' onClick={handleDonationPoliciesClick}>Donation Policies</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Topbar