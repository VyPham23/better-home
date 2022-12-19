import React from 'react'
import './Contact.css'

export default function ButtonsContact() {
  return (
    <div className='buttons_contact'>
      <h2 id='title1'  >Get in tough</h2>
      <p id='title2' className='text-center'>Anytime, anywhere, with superior quality products, we are with you at every moment</p>
      <div className="intro_button_1">
        <button className="intro_button_2"><i class="bi bi-geo-alt" style={{fontSize: 20}}></i> <br/>Room 302, Saigon Pearl Office Building, 
        <br/> 92C Nguyen Huu Canh St, 
        <br/> Binh Thanh District, Ho Chi Minh City, VietNam</button>
        <button className="intro_button_2"><i class="bi bi-telephone" style={{fontSize: 20}}></i><br/>(+84) 090. 453.234</button>
        <button className="intro_button_2"><i class="bi bi-envelope-paper" style={{fontSize: 20}}></i><br/>betterhomesinvest@gmail.com</button>
        </div>
    </div>
    
  )
}
