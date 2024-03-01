import React, { useCallback, useEffect } from 'react'
import './Program_Details_Modal.css'
import program_img from '../../assets/background.jpg'
import cards_data from '../../data/cards_data';

{/** 
function Program_Details_Modal({ open, onClose, selectedProgramId }) {
    if(!open) return null;

    const selectedProgram = cards_data.find((program => program.id === selectedProgramId));


  return (
    <div onClick={onClose} className='overlay'>
        <div onClick={(e) => {
            e.stopPropagation(); 
        }} className='modalContainer'>
            <img src={`/images/${selectedProgram.imagePath}`} alt='Program Img' />
            <div className='modalRight'>
                <p className='closeBtn' onClick={onClose}>X</p>
                <div className='content'>
                    <p><strong>Project Title:</strong><br /><span className='program-title'> {selectedProgram.projectName} </span> </p> <br />
                    
                    <p><strong>Project Description:</strong> <br /> <span className='program-desc'>{selectedProgram.projectDescription}</span></p>
                </div>
                <div className='btnContainer'>
                    <button className='btnPrimary'>
                        
                        <span className='bold'></span>, I love NFT's
                        Donate Now
                    </button>
                    <button className='btnOutline'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
*/}

export const Program_Details_Modal = ({openProgramDetailsModal, setOpenProgramDetailsModal, selectedProgramId}) => {
    const selectedProgram = cards_data.find((program => program.id === selectedProgramId));

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && openProgramDetailsModal){
            setOpenProgramDetailsModal(false);
        }
    }, [setOpenProgramDetailsModal, openProgramDetailsModal]);

    useEffect(() =>{
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress]);

    return (
        <>
            {openProgramDetailsModal ? 
            <div>
                <div className='modal-container' onClick={()=>setOpenProgramDetailsModal((prev) => !prev)}>
                        <div className="modal-wrapper"  onClick={(e) => e.stopPropagation()}>
                            <img src={`/images/${selectedProgram.imagePath}`} alt="" className="modal-img" /> 

                            <div className="modal-content">
                                <p><strong>Project Title:</strong><br /><span className='program-title'> {selectedProgram.projectName} </span> </p> <br />
                                <p className='program-desc'><strong>Project Description:</strong> <br /> <span className='program-desc'>{selectedProgram.projectDescription}</span></p>
                                
                                <div className='btnContainer'>
                                    <button className='btnPrimary'>
                                        
                                        <span className='bold'></span>Donate Now
                                    </button>
                                    <button className='btnOutline'>
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                            <p className="modal_close_btn" aria-label='Close Modal' onClick={()=> setOpenProgramDetailsModal(prev=>!prev)}>X</p>                           
                        </div>   
                        </div>
                </div>

            
            
            
            
            
            
            
            
            
            :null}
        </>
    );

}




{/** 
export default Program_Details_Modal*/}