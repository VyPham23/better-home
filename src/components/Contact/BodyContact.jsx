import './Contact.css'

export default function BodyContact() {
  return (
    <div>
      <div className='contact_area container mt-3 text-center'>
          <div className="left_block_contact col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="image_block_contact">
                <img className='img-fluid' src="./images/ava1.jpg" alt="ava" />
                <div className="name_contact">
                  <span>Micky Jackson</span>
                </div>
              </div>
              <div className="contact_infor">
                  <div className='contact_details'>
                    <img className='img-fluid image_icon' src="./images/talk.png" alt="contact-detail" />
                    <span>097877766665</span>
                  </div>
                  <div className='contact_details'>
                    <img className='img-fluid image_icon' src="./images/whatsapp.png" alt="contact-detail" />
                    <span>097877766665</span>
                  </div>
                  <div className='contact_details'>
                    <img className='img-fluid image_icon' src="./images/zalo.png" alt="contact-detail" />
                    <span>097877766665</span>
                  </div>
              </div>
          </div>
          <div className="right_block_contact col-lg-6 col-md-6 col-sm-6 col-12">
              <div className="image_block_contact">
                <img className='img-fluid' src="./images/ava2.jpg" alt="ava" />
                <div className="name_contact">
                  <span>Jackson Mra</span>
                </div>
              </div>
              <div className="contact_infor">
                  <div className='contact_details'>
                    <img className='img-fluid image_icon' src="./images/talk.png" alt="contact-detail" />
                    <span>097877766665</span>
                  </div>
                  <div className='contact_details'>
                    <img className='img-fluid image_icon' src="./images/whatsapp.png" alt="contact-detail" />
                    <span>097877766665</span>
                  </div>
                  <div className='contact_details'>
                    <img className='img-fluid image_icon' src="./images/zalo.png" alt="contact-detail" />
                    <span>097877766665</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}
