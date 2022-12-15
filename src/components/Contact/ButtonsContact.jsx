import React from 'react'
import './Contact.css'

export default function ButtonsContact() {
  return (
    <div>
      <div className="intro_button">
                <button className="navbutton"><i class="bi bi-geo-alt" style={{fontSize: 20}}></i> <br/>Room 302, Saigon Pearl Office Building, 
                <br/> 92C Nguyen Huu Canh St, 
                <br/> Binh Thanh District, Ho Chi Minh City, VietNam</button>
                <button className="navbutton" ><i class="bi bi-telephone" style={{fontSize: 20}}></i><br/>(+84) 090. 453.234</button>
                <button className="navbutton"><i class="bi bi-envelope-paper" style={{fontSize: 20}}></i><br/>betterhomesinvest@gmail.com</button>
        </div>
    </div>
    
  )
}
