import React from 'react'
import './Bank_details_page.css';
import mtn_momo_logo from '../../assets/mtn momo.png'
import stanbic from '../../assets/stanbic_icon.png'

function Bank_details_page() {
  return (
    <div>
         <div className="donate-section">
              <h2>Donate to Al-Ruhamah Organisation</h2>
         </div>

        <div className="bank-details-container">
        <h2>Support us through MOMO Pay or Bank Transfer</h2>

      <table className="bank-details-table">
        <tbody>
          <tr>
            <td>
                <img src={mtn_momo_logo} alt="MTN MOMO Logo" className="mtn-momo-logo" /> <br />
                MTN (UGANDA) MOMO PAY
            </td>
            <td>
              Merchant Code: 321469 <br />
              Dial Code: *185*3*(Merchant Code)#
            </td>
          </tr>
          <tr>
            <td>
              <img src={stanbic} alt="MTN MOMO Logo" className="stanbic-icon" /> <br/>
              STANBIC BANK DETAILS
            </td>
            <td>
              <strong>Bank Name:</strong> Stanbic Bank Uganda Limited <br />
              <strong>Swift Code:</strong> SBICUGKXXX <br />
              <strong>Branch Name:</strong> Republic Street - Mbale, Uganda <br />
              <strong>Bank Address:</strong> Stanbic Bank (Mbale Branch). P.O. BOX 973, Kampala, Uganda - Bombo Road <br />
             {/** <strong>EURO Account Number: </strong> 9030015787103 <br  />
              <strong>USD ACCOUNT NUMBER: </strong> 9030015116209 <br  /> */} 
              <strong>Account No:</strong> 9030023984554 <br />
              <strong>Beneficiary Name:</strong> AL-RUHAMAH ORGANISATION
            </td>
          </tr>
          {/* Add more rows for additional bank details */}
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default Bank_details_page