import React, { useState, useRef, useEffect } from 'react'
import './Home.css'
import cards_data from '../../data/cards_data'
import background from '../../assets/background.jpg'
import { Program_Details_Modal } from '../../components/program_details_modal/Program_Details_Modal'
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

function Home() {
  const [loading, setLoading] = useState(false);
  const [selectedProgramId, setSelectedProgramId] = useState(null);
  const [openProgramDetailsModal, setOpenProgramDetailsModal] = useState(false);
  const navigate = useNavigate();

  const handleDonateClick = (id) => {
    setLoading(true);
    // Simulate loading delay (replace with actual data fetching logic)
    setTimeout(() => {
      setLoading(false);
      navigate(`/donation`,{state : {project_id : id}});
    }, 2000); // Adjust the duration as needed
    
    //navigate("/donation");
  };

  useEffect(() => {
    const body = document.body;
    if (loading) {
      body.classList.add('no-interaction'); // Add the class to disable interactions
      body.style.overflow = 'hidden';
    } else {
      body.classList.remove('no-interaction'); // Remove the class to enable interactions
      body.style.overflow = 'auto';
    }

    return () => {
      // Cleanup function to remove the class when component unmounts
      body.classList.remove('no-interaction');
      body.style.overflow = 'auto';
    };
  }, [loading]);

  useEffect(() =>{
    const body = document.body;
    if(openProgramDetailsModal){
      body.style.overflow = 'hidden'; // Disable scrolling
    } else {
      body.style.overflow = 'auto'; // Enable scrolling
    }

    // Cleanup function to re-enable scrolling when the component unmounts or modal is closed
    return () => {
      body.style.overflow = 'auto';
    };
  },[openProgramDetailsModal])


  //setOpenProgramDetailsModal(true)
 /* const handleProgramDetailsClick = (id) => {
    setSelectedProgramId(id);
    setOpenProgramDetailsModal(true);
  };*/

  const openModal = (id) =>{

    setOpenProgramDetailsModal(prev => !prev);
    setSelectedProgramId(id)
  }


  const projectNames = [
    'All',
    'Education Projects',
    'Zakat',
    'Waterwell Projects',
    'Mosque Constructions',
    'Orphans',
    'Noble Quran',
    'Relief Aid',
    'Health Care',
    'Qurban Projects'
  ];

  const [activeProject, setActiveProject] = useState(projectNames[0]);
  const handleProjectClick = (project) => {
    setActiveProject(project);
    setTag(project)
  };

  const tabsList = useRef();
  const rightArrowContainer = useRef();
  const leftArrowContainer = useRef();
  const [isLeftArrowActive, setIsLeftArrowActive] = useState(false);
  const [isRightArrowActive, setIsRightArrowActive] = useState(false);

  useEffect(() => {
    // Initial check on component mount
    manageIcons();
  }, []);

  const handleLeftArrowClick = () => {
    tabsList.current.scrollLeft -= 200;
    manageIcons();
  };

  const handleRightArrowClick = () =>{
    tabsList.current.scrollLeft += 200;
    manageIcons();
  } 

  const manageIcons = () =>{
    if(tabsList.current.scrollLeft ===0){
      setIsLeftArrowActive(false);
    } else if(tabsList.current.scrollLeft >= 20){
          setIsLeftArrowActive(true);
    } else {
          setIsLeftArrowActive(false);
    }

    let maxScrollValue = tabsList.current.scrollWidth - tabsList.current.clientWidth - 20;
    if(tabsList.current.scrollLeft >= maxScrollValue){
        setIsRightArrowActive(false);
    } else {
      setIsRightArrowActive(true);
    }
  }

  /*
  const cards_data = [
    {
        id:"1", 
        imageName:"img1.jpeg", 
        projectName: "Nakaloke Mosque",
        tag: "Mosque Constructions"
    },
    {
        id:"2", 
        imageName:"img2.jpeg", 
        projectName: "Masjib Bilal",
        tag: "Orphans"
    },
    {
        id:"3", 
        imageName:"img3.jpeg", 
        projectName: "Kinyoli Borehole",
        tag: "Mosque Constructions"
    },
    {
      id:"4", 
      imageName:"img3.jpeg", 
      projectName: "Kinyoli Borehole",
      tag: "Mosque Constructions"
  },
  {
    id:"4", 
    imageName:"img3.jpeg", 
    projectName: "Kinyoli Borehole",
    tag: "Mosque Constructions"
},
]*/

  const [tag, setTag] = useState('All');
  const [filteredCarts, setFilteredCarts] = useState([]);
  useEffect( () =>{
    tag === 'All' ? setFilteredCarts(cards_data):setFilteredCarts(cards_data.filter(card=>card.tag === tag));

  }, [tag]);
  
  return (
    <div className=''>
      
        {loading && (
        <div className='loading-overlay'>
          <div className='loading-spinner'></div>
        </div>
      )}

        <div className="scrollable-tabs-container">
          <div className={`left-arrow ${isLeftArrowActive ? "active" : ""}`} onClick={handleLeftArrowClick} ref={leftArrowContainer}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </div>

          <ul ref={tabsList}
          onScroll={manageIcons}>
            {projectNames.map((project, index) =>(
                 <li key={index}>
                  <a 
                      className={activeProject=== project ? 'active' : ""}  
                      href='#'
                      onClick={() =>handleProjectClick(project)}>
                          {project}
                  </a>
                </li>
            ))}
               
          {/**   <li><a href='#'>Education Projects</a></li>
            <li><a href='#'>Zakat</a></li>
            <li><a href='#'>Waterwell Projects</a></li>
            <li><a href='#'>Mosque Constructions</a></li>
            <li><a href='#'>Orphans</a></li>
            <li><a href='#'>Noble Quran</a></li>
            <li><a href='#'>Relief Aid</a></li>
            <li><a href='#'>Health Care</a></li>
            <li><a href='#'>Health Care</a></li>  */}
          </ul>

          <div className={`right-arrow ${isRightArrowActive ? 'active' : ''}`} onClick={handleRightArrowClick}
             ref={rightArrowContainer}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </div>
        </div>
        
        {
          filteredCarts.length === 0 ? (
            <div className='no-items-message'>No items available for the selected project.</div>
            ):( 
        <div className='cards-item-container'>
          {filteredCarts.map(cart => 
            <div className='item-cards' key={cart.id}>
            <img className='item-image' src={`${process.env.PUBLIC_URL}/images/${cart.imagePath}`} />
            <div className='title'>{cart.projectName}</div>

             <div className='skill-box'>
                <div className='skill-bar'>
                  <span className='skill-per reactjs'
                     style={{ width: `${calculateFundingPercentage(cart.funded, cart.remaining, cart.target)}%` }}>
                    <span className='tooltip'>{calculateFundingPercentage(cart.funded, cart.remaining, cart.target)}%</span>
                  </span>
                </div>
              </div>

              <div className='target-texts'>
                      <div className='text-item'>
                          <span>Funded</span>
                          <span className='amount'>{cart.funded}</span>
                      </div>
                    
                      <div className='text-item'>
                        <span>Remaining</span>
                        <span className='amount'>{cart.remaining}</span>
                      </div>

                      <div className='text-item'>
                        <span>Target</span>
                        <span className='amount'>{cart.target}</span>
                      </div>
                  </div>
                  <div className='card-buttons'>
                    <button className="donate" onClick={() => handleDonateClick(cart.id)}>Donate</button>
                    <button className="program-details" onClick={() => {openModal(cart.id)} }>Program Details</button>
                  </div>
          </div>
          )}
        </div>
        )}

        <div className='floating-social-media-icons'>
              <nav>
                <ul>
                  <li><a href="#">
                    <i className='fa fa-facebook-f'></i><span>Facebook</span></a>
                  </li>

                  <li><a href="#">
                    <i className='fa fa-twitter'></i><span>Twitter</span></a>
                  </li>

                  <li><a href="#">
                    <i className='fa fa-instagram'></i><span>Instagram</span></a>
                  </li>

                  <li><a href="#">
                    <i className='fa fa-youtube'></i><span>Youtube</span></a>
                  </li>
                
                </ul>
              </nav>
        </div>

       {/**  <Program_Details_Modal open={openProgramDetailsModal} onClose={() => setOpenProgramDetailsModal(false)}
         selectedProgramId={selectedProgramId}
        /> */}

        <div className='more-content-section'>

        </div>  




      <Program_Details_Modal openProgramDetailsModal={openProgramDetailsModal} setOpenProgramDetailsModal={setOpenProgramDetailsModal} selectedProgramId={selectedProgramId} />
    
      

    </div>
  );
}

export default Home