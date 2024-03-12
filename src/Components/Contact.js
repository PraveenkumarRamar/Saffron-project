import React from 'react'
import Zoom from 'react-reveal/Zoom';
// import Card from './Card'
import contact from '../Assets/contact.jpg'
import { Link } from 'react-router-dom';
import Footer from './Footer'
function Contact() {
    return <>
        <div className='container-fluid contact text-white'>
            <div className='row '>
                <div className='col-md-12'>
                    <Zoom>
                        <img src={contact} className='w-100' alt="" />
                    </Zoom>
                </div>
            </div>
            <div className='row contact-bg'>
                <div className='col-md-12 ps-5 pt-5 w-75'>
                    <h3>Not satisfied with your purchase?</h3>
                    <p>To report grievances based on issues of quality, flavour, potency, breakage, leakage, spoilage, tampering and/or courier errors, contact us via phone or email. We shall quickly remedy the situation. Simply mention your Order ID along with your complaint for a quick and satisfactory resolution.</p>
                </div>
            </div>
            <div className='row '>
                <div className='col-md-4'>
                    <Zoom>
                        <div className="card m-3 text-center"  >
                            <i className="fa-solid fa-phone text-center pt-3 display-2" ></i>
                            <div className="card-body ">
                                <h5 className="card-title">Phone</h5>
                                <a href="tel:+9172001 50577" className="btn btn-primary w-100">Call-Us</a>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className='col-md-4'>
                    <Zoom>
                        <div className="card m-3 text-center bg-gray"  >
                            <i className="fa-solid fa-envelope text-center pt-3 display-2"></i>                            <div className="card-body">
                                <h5 className="card-title">Email-Us</h5>
                                <a href="mailto:Zprincesssaffron@gmail.com" className="btn btn-success w-100">Mail-us</a>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div className='col-md-4'>
                    <Zoom>
                        <div className="card m-3 text-center"  >
                            <i className="fa-brands fa-whatsapp text-center pt-3 display-2"></i>
                            <div className="card-body">
                                <h5 className="card-title">WhatsApp</h5>
                                {/* <p className="card-text">Address : NO. 21 ,2ND STREET, RAMAMOORTHI AVENUE, SAKTHI NAGAR, PORUR,CHENNA1-600116,TN,INDIA</p> */}
                                <a href="whatsapp:contact=7538870577@s.whatsapp.com&message=I'd like to chat with you" target='_blank'  className="btn btn-warning w-100">Chat with us</a>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
            <div className='row pt-5'>
                <Zoom>
                    <div className='col-md-12'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.089101560505!2d80.1599463737773!3d13.029997687290749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5261003cabacbb%3A0x7813c73ce5723fa9!2sHey%20Ram%20Infrastructure!5e0!3m2!1sen!2sin!4v1709172872736!5m2!1sen!2sin" width="100%" height="450" style={{ "border": "1px solid black" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </Zoom>
            </div>
            <div className='row pt-5 text-center'>
                <Zoom>
                    <div className='col-md-12 '>
                        <div className='display-2 p-3'>
                            GET IN TOUCH
                        </div>
                        <div className='d-flex justify-content-center'>
                            <form className='w-50 '>
                                <div className="form-group pb-3 ">
                                    <input type="text" className="form-control form-inp" placeholder="First Name" />
                                </div>
                                <div className="form-group pb-3">
                                    <input type="text" className="form-control form-inp" placeholder="Last Name" />
                                </div>
                                <div className="form-group pb-3">
                                    <input type="email" className="form-control form-inp" id="exampleInputEmail1" placeholder="Enter email" />
                                    <small id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</small>
                                </div>
                                <div className="pb-3">
                                    <textarea className="form-control form-msg" id="exampleFormControlTextarea1" placeholder='message area' rows="3"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </Zoom>
            </div>
            <div className='row pt-5 text-center'>
                <div className='col-md-6'>
                    <div className='cards2'>
                        <h4>Customer Care</h4>
                        <div  >
                            <b>Hotline :</b> <Link style={{"textDecoration":"none","color":"white"}} to="tel:+91 72001 50577" >+91 72001 50577 <br />Call or SMS</Link><br />
                            <Link style={{"textDecoration":"none","color":"white"}} to="https://www.facebook.com/login/" target='blank'>Facebook</Link><br />
                            <Link style={{"textDecoration":"none","color":"white"}} to="https://www.instagram.com/accounts/login/?hl=en" target='blank'>Instagram</Link><br />
                            <Link style={{"textDecoration":"none","color":"green","fontWeight": "bold"}} to="/h" >HeyRam infrastructure<br />First product</Link><br />
                        </div>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div className='cards2'>
                        <h4>Corporate Requisites</h4>
                        <div><b>FSSAI License No : </b>12423008002367</div>
                        <div><b>GSTIN : </b> 33ABFA6551N1ZZ</div>
                        <div><b>MSME UAN : </b>TN-02-0006511</div><br />
                        <div>
                            <Link style={{"textDecoration":"none","color":"green","fontWeight": "bold"}} to="/a">Terms and Conditions</Link><br />
                            <Link style={{"textDecoration":"none","color":"green","fontWeight": "bold"}} to="/b">Privacy Policy</Link><br />
                            <Link style={{"textDecoration":"none","color":"green","fontWeight": "bold"}} to="/c">Cancellation and refund</Link><br />
                            <Link style={{"textDecoration":"none","color":"green","fontWeight": "bold"}} to="/d">Shipping and delivery</Link><br />
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    </>
}

export default Contact