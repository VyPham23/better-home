import './Contact.css'

export default function ButtonsContact() {
  return (
    <div className='buttons_contact mt-5 mb-3'>
      <div>
        <h2 className='title_contact_infor'>GET IN TOUCH</h2>
        <p className='text-center description_contact'>Anytime, anywhere, with superior quality products, we are with you at every moment</p>
      </div>
      <div className='row mt-3'>
        <div className='col-lg-4 col-md-4 col-sm-4 col-12 mb-2'>
          <button className="intro_button_2"><i class="bi bi-geo-alt" style={{ fontSize: 20 }}></i>
            <br /> 92C Nguyen Huu Canh St,
            <br /> Binh Thanh District, Ho Chi Minh City
          </button>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-4 col-12 mb-2'>
          <button className="intro_button_2">
            <i class="bi bi-telephone" style={{ fontSize: 20 }}></i>
            <br />
            <br />(+84) 090 453 234
          </button>
        </div>
        <div className='col-lg-4 col-md-4 col-sm-4 col-12 mb-2'>
          <button className="intro_button_2">
            <i class="bi bi-envelope-open" style={{ fontSize: 20 }}></i>
            <br />
            <br />betterhomesinvest@gmail.com
          </button>
        </div>
      </div>
    </div>

  )
}
