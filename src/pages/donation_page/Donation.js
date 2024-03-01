// Donation.js
import React, { useEffect, useState } from 'react';
import './Donation.css';
import { useLocation } from 'react-router-dom';
import cards_data from '../../data/cards_data';
import visa_card from '../../assets/Visa-Card.png'
import master_card from '../../assets/mastercard.jpg'
import paypal from '../../assets/paypal.png'
import amex from '../../assets/American-Express.png'
import { useNavigate } from 'react-router-dom'

const calculateFundingPercentage = (funded, remaining, target) => {
  const removeCurrencySign = (value) => {
    // Remove non-numeric characters, assuming the currency sign is at the beginning
    return Number(value.replace(/[^0-9.]+/g, ''));
  };

  const numericFunded = removeCurrencySign(funded);
  const numericRemaining = removeCurrencySign(remaining);
  const numericTarget = removeCurrencySign(target);

  if (numericTarget === 0) {
    return 0;
  }

  const percentage = Math.min(((numericFunded / numericTarget) * 100).toFixed(0), 100);
  return percentage;
}

function Donation() {
  const navigate = useNavigate();

  const location = useLocation();
  const selectedProgram = cards_data.find((program => program.id === location.state.project_id));

  const fundingPercentage = calculateFundingPercentage(
    selectedProgram.funded,
    selectedProgram.remaining,
    selectedProgram.target
  );

    useEffect(() => {
    // Set the scroll position to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const handleHomeClick = (event) => {
    event.preventDefault();
    // Navigate to the Home page
    navigate('/');
  };

  const handleBankDetailsPageClick = (event) => {
    event.preventDefault();
    // Define the logic to navigate to the Bank Details page
    navigate('/bank-details_page');  // Update '/bank-details' with your actual route
  };

  return (
    <div className="donation-container">
      <div className="project-info">

        <p className='donation-link'><a href='#' onClick={handleHomeClick}>Home</a> / Donation</p>

        <img src={`${process.env.PUBLIC_URL}/images/${selectedProgram.imagePath}`} alt="Project" />
        <p><span className='proj-title'>Project Title:</span> {selectedProgram.projectName}</p>
        <p><span>Project Description: </span> {selectedProgram.projectDescription}</p>
      </div>
      
      <div className="payment-options">

             <div className='skill-box1'>
                <div className='skill-bar1'>
                  <span className='skill-per1 reactjs1' style={{ width: `${fundingPercentage}%` }}>
                    <span className='tooltip1'>{fundingPercentage}%</span>
                  </span>
                </div>
              </div>

              <div className='target-texts1'>
                      <div className='text-item1'>
                          <span>Funded</span>
                          <span className='amount1'>{selectedProgram.funded}</span>
                      </div>
                    
                      <div className='text-item1'>
                        <span>Remaining</span>
                        <span className='amount1'>{selectedProgram.remaining}</span>
                      </div>

                      <div className='text-item1'>
                        <span>Target</span>
                        <span className='amount1'>{selectedProgram.target}</span>
                      </div>
                  </div>

        <p>Select a <span style={{color:'#1b61d7'}}>Payment </span>Options</p>

        <form action='#' className='paymention-radio-btn-container'>
          <input type="radio" name='payment' id='visa'  />
          <input type="radio" name='payment' id='mastercard'  />
          <input type="radio" name='payment' id='paypal'  />
          <input type="radio" name='payment' id='AMEX'  />

        <div className="category">
          <label for="visa" className='visaMethod'>
                <div className="imgName">
                  <div className="imgContainer visa">
                    <img src={visa_card} alt="" className="payment-img"  />
                  </div>
                  <span className="name">VISA</span>
                </div>
                <span className='check'><i className='fa solid fa-circle-check' style={{color:'#6064b6'}} ></i></span>
          </label>

          <label for="mastercard" className='mastercardMethod'>
                <div className="imgName">
                  <div className="imgContainer mastercard">
                    <img src={master_card} alt="" className="payment-img"  />
                  </div>
                  <span className="name">Mastercard</span>
                </div>
                <span className='check'><i className='fa solid fa-circle-check' style={{color:'#6064b6'}} ></i></span>
          </label>

          <label for="paypal" className='paypalMethod'>
                <div className="imgName">
                  <div className="imgContainer paypal">
                    <img src={paypal} alt="" className="payment-img"  />
                  </div>
                  <span className="name">PayPal</span>
                </div>
                <span className='check'><i className='fa solid fa-circle-check' style={{color:'#6064b6'}} ></i></span>
          </label>

          <label for="AMEX" className='amexMethod'>
                <div className="imgName">
                  <div className="imgContainer AMEX">
                    <img src={amex} alt="" className="payment-img" />
                  </div>
                  <span className="name">AMEX</span>
                </div>
                <span className='check'><i className='fa solid fa-circle-check' style={{color:'#6064b6'}} ></i></span>
          </label>
        </div>
        </form>

            <button className="donate-button">Donate Now</button>

            <div className="or-divider">
              <div className="line"></div>
                <div className="or-text">OR</div>
              <div className="line"></div>
          </div>

          <p className="bank-details-text">Use <a href='#' onClick={handleBankDetailsPageClick}> Other Account Details </a></p>
      </div>  

     

     
    </div>
  );
}

export default Donation;
