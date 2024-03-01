import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    const handleAboutUsClick = (event) => {
        event.preventDefault();
        // Navigate to the Donation Policies page or the desired route
        navigate('/about-us');
      };


  return (
    <div>
        <footer>
            <div className='footer-container'>
                <div className='sec aboutus'>
                        <h2> About Us </h2>
                        <p>
                            Al-Ruhmah Organization (AO) is a nonprofit voluntary community based organization (CBO) committed to providing a platform for the Inspiration, empowerment and sustainability of vulnerable communities in Uganda through promoting opportunities to support, connect and grow communities, through lobbying, networking, education, agriculture, health care, provision of safe water and sanitation, emergency relief and among others in the communities.
                        </p>
                        <ul className='sci'>
                        <li><a href='https://www.facebook.com/profile.php?id=100079620605049'>
                            <i class="fa-brands fa-facebook-f"></i></a>
                        </li>

                        <li>
                            <a href='#'>
                                <i class="fa-brands fa-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href='https://www.instagram.com/alruhamahorganization?igsh=MWMxZDd4ZDA0ajE5MA=='>
                                <i class="fa-brands fa-instagram"></i>
                            </a>
                        </li>
                        <li>
                            <a href='#'>
                                <i class="fa-brands fa-youtube"></i>
                            </a>
                        </li>
                    </ul>
                </div>

                <div className='sec quickLinks'>
                    <h2>Quick Links</h2>
                    <ul>
                        <li><a href='#' onClick={handleAboutUsClick}>About</a></li>
                        <li><a href='#'>FAQ</a></li>
                        <li><a href='#'>Help</a></li>
                        <li><a href='#'>Donation Policies</a></li>
                        <li><a href='#'>Our Team</a></li>
                    </ul>
                </div>

                <div className='sec contact'>
                    <h2>Contact Info</h2>
                    <ul className='info'>
                            <li>
                                <span><i className='fa fa-map-marker' aria-hidden="true"></i></span>
                                <span>Buyonjo Cell, <br />
                                        Mbale Northern City Division, <br /> P.O.Box Mbale, Uganda, <br />
                                        East Africa
                                </span>
                            </li>
                            <li>
                                <span><i className='fa fa-phone' aria-hidden="true"></i></span>
                                <p><a href='tel:+256774132665'>+256 774 132 665</a><br />
                                    <a href='tel:+256759820913'>+256 757 356 696</a>
                                </p>
                            </li>
                            <li>
                                <span><i className='fa fa-envelope' aria-hidden="true"></i></span>
                                <p>
                                    <a href='mailto:al-ruhamahorganizationlmd@gmail.com'>al-ruhamahorganizationlmd@gmail.com</a>
                                </p>
                            </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className='copyRightText'>
            <p className='copyright'>Copyright &copy; 2024 Al-Ruhamah Organization. All Rights Reserved</p>
            <p className="poweredBy">Powered by <a href='#'>Eriville</a></p>
        </div>
    </div>
  )
}

export default Footer