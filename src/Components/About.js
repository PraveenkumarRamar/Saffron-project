import React from 'react'
import Zoom from 'react-reveal/Zoom';
import Footer from './Footer'
import { Link } from 'react-router-dom'


function About() {
    return <>
        <div className='container-fluid about text-white'>
            <div className='row  pt-1 pb-1'>
                <div className='col-md-4 about-img d-flex justify-content-center'>
                    <Zoom>
                        <img className='img1' src="https://t4.ftcdn.net/jpg/01/08/34/53/360_F_108345358_mREIebrNXJM0iuAlxvEshj1j2QrhhzpK.jpg" style={{ "width": "18rem" }} alt="imag2" />
                    </Zoom>
                </div>
                <div className='col-md-8'>
                    <Zoom>
                        <p className=''>HeyRam Infrastructures provides Z Princess Saffron A++: Royal Gift Premium Packing: Enhances Natural Glow on Your Face During Pregnancy High-quality products are being exported and are too expensive, therefore we are assisting our customers by offering them fresh, high-quality products at reasonable costs with eye-catching packaging. Z Princess customers are primarily drawn to the packaging and are happy with the quality after consuming.</p>
                    </Zoom>
                </div>
            </div>
            <div className='row  pt-1 pb-1'>
                <div className='col-md-8 align-items-center'>
                    <Zoom>
                        <div className='h3 a-heading'>
                            Products
                        </div>
                        <p>Saffron is the initial product of Z Princess Saffron. The company offers premium, fresh saffron at reasonable costs with attractive packaging.Z Princess Saffron offers antioxidant-rich saffron, known for its potential mood-boosting effects and traditional uses in culinary and medicinal practices, providing a premium addition to your health and well-being.</p>
                    </Zoom>
                </div>
                <div className='col-md-4 about-img d-flex justify-content-center'>
                    <Zoom>
                        <img className='img2' style={{ "width": "20rem" }} src="https://www.reachaccountant.com/wp-content/uploads/2016/08/online-shopping-image-wallpaper.jpg" alt="image1" />
                    </Zoom>
                </div>
            </div>
            <div className='row  pt-1 pb-1'>
                <div className='col-md-4 about-img d-flex justify-content-center'>
                    <Zoom>
                        <img className='img3' src="https://img.freepik.com/premium-photo/compass-with-needle-pointing-word-vision-with-blur-effect-plus-blue-black-tones-conceptual-image-immustration-company-business-anticipation-strategy_556904-1981.jpg" style={{ "width": "17rem" }} alt="imag2" />
                    </Zoom>
                </div>
                <div className='col-md-8 p-1'>
                    <Zoom>
                        <Zoom><h3 className='p-1 a-heading'>Mission</h3></Zoom>
                        <Zoom> <p className=''>Z Princess Saffron's mission is to provide high-quality saffron to its customers at an affordable price. The company believes that everyone should have access to saffron, regardless of their income.</p></Zoom>
                        <Zoom><h3 className='p-1 a-heading'>Vision</h3></Zoom>
                        <Zoom><p>Z Princess Saffron's vision is to be the world's leading supplier of high-quality saffron. The company is committed to providing its customers with the best possible product and experience.</p></Zoom>
                        <Zoom><h3 className='p-1 a-heading'>Purity Beyond Compromise:</h3></Zoom>
                        <Zoom> <p>At Z princes Sffron, we stand unwavering in our commitment to purity. Each saffron thread we offer is meticulously sourced, ensuring unadulterated excellence. We believe in delivering a saffron experience that is as pure as the lands it hails from.</p></Zoom>
                    </Zoom>
                </div>
            </div>
            <Zoom>
            <div className='row w-100 text-center pt-2 foot-bar '>
                    <div className='col-md-4'>
                        <div className='cards2'>
                            <h4>Customer Care</h4>
                            <div  >
                                <b>Hotline :</b> <Link style={{ "textDecoration": "none", "color": "white" }} to="tel:+91 72001 50577" >+91 72001 50577 <br />Call or SMS</Link><br /><br />
                                <Link style={{ "textDecoration": "none", "color": "white" }} to="https://www.facebook.com/login/" target='blank'>Facebook</Link><br />
                                <Link style={{ "textDecoration": "none", "color": "white" }} to="https://www.instagram.com/accounts/login/?hl=en" target='blank'>Instagram</Link><br />
                                <Link style={{ "textDecoration": "none", "color": "green", "fontWeight": "bold" }} to="/h" >HeyRam infrastructure<br />First product</Link><br />
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-md-4'>
                        <div>
                            <Link style={{ "textDecoration": "none", "color": "white" }} to="/a">Terms and Conditions</Link><br />
                            <Link style={{ "textDecoration": "none", "color": "white" }} to="/b">Privacy Policy</Link><br />
                            <Link style={{ "textDecoration": "none", "color": "white" }} to="/c">Cancellation and refund</Link><br />
                            <Link style={{ "textDecoration": "none", "color": "white" }} to="/d">Shipping and delivery</Link><br />
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className='cards2'>
                            <h4>Corporate Requisites</h4><br /><br />
                            <div><b>FSSAI License No : </b>12423008002367</div><br />
                            <div><b>GSTIN : </b> 33ABFA6551N1ZZ</div><br />
                            <div><b>MSME UAN : </b>TN-02-0006511</div><br /><br />
                            {/* <div>
                                <Link style={{ "textDecoration": "none", "color": "white" }} to="/a">Terms and Conditions</Link><br />
                                <Link style={{ "textDecoration": "none", "color": "white" }} to="/b">Privacy Policy</Link><br />
                                <Link style={{ "textDecoration": "none", "color": "white" }} to="/c">Cancellation and refund</Link><br />
                                <Link style={{ "textDecoration": "none", "color": "white" }} to="/d">Shipping and delivery</Link><br />
                            </div> */}
                        </div>
                    </div>
                </div>
            </Zoom>
            <Footer/>
        </div>
    </>
}

export default About