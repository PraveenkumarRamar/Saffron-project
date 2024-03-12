import React, { useState } from 'react'
import Zoom from 'react-reveal/Zoom';
import ReactCardFlip from 'react-card-flip'
import Bg from '../Assets/sample2.mp4'
import Footer from './Footer'
import { Link } from 'react-router-dom';

function Home() {
    const [isFlipped, SetIsflipped] = useState(false)
    const [isFlippedFr, SetIsflippedFr] = useState(false)
    const [isFlippedSe, SetIsflippedSe] = useState(false)
    function handleFlip() {
        SetIsflipped(!isFlipped)
    }
    function secondCard() {
        SetIsflippedFr(!isFlippedFr)
    }
    function thirdCard() {
        SetIsflippedSe(!isFlippedSe)
    }
    return <>
        <div id='home' className='text-white'>
            <div className='media'>
                <Zoom>
                    <img className='w-100' src="https://images.unsplash.com/photo-1543332164-6e82f355badc?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHdlbGNvbWV8ZW58MHx8MHx8fDA%3D" alt=""/>
                </Zoom>
            </div>
            {/* Bio */}
            <Zoom>
                <div className='container-fluid pt-1'>
                    <div className='row'>
                        <div className='col-md-8 ' >
                            <h4 className="display">Z Princess Saffron Splendor</h4>
                            <p className='cont'> Unveil the richness of Z Princes Saffron, where quality meets elegance. Explore our golden strands and elevate your culinary experience – a sensory journey into the heart of authenticity. Discover the magic in every thread, Delve into a legacy of excellence with Z Princes Saffron. Handpicked and meticulously handled, our saffron threads carry a story of tradition and taste.
                            </p>
                        </div>
                        <div className='col-md-4 justify-content-center ' >
                            <img className='imag' style={{ "width": "16rem" }} src="https://img.freepik.com/free-photo/saffron-spice-still-life-composition_23-2149130019.jpg" alt="saffron" />
                        </div>
                    </div>
                </div>
            </Zoom>
            {/* Cards-info */}
            <div className='container-fluid' >
                <div className='row text-center' >
                    <div className='col-md-4'>
                        {/* Indian Saffron */}
                        <Zoom>
                            <ReactCardFlip isFlipped={isFlipped} flipDirection='horizontal'>
                                {/* Front-side of the card */}
                                <div className="card m-3">
                                    <img src="https://us.123rf.com/450wm/ripiopv/ripiopv2304/ripiopv230403692/202618286-saffron-flower-close-up-shot-dark-background-generative-ai-illustration.jpg" className="card-img-top" alt="indian saffron" />
                                    <div className="card-body">
                                        <h5 className="card-title">Indian Kashmir Saffron</h5>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <a href="#a" className="btn btn-primary" onClick={handleFlip}>KNOW MORE</a>
                                    </div>
                                </div>

                                {/*Back side of the card */}
                                <div className="card m-3"   >
                                    <div className="card-body">
                                        <h5 className="card-title">Indian Kashmir Safrron</h5>
                                        <p className="card-text flip-card">"Experience the pinnacle of taste with Indian Saffron's unparalleled quality, adding richness to your dishes. Unleash its antioxidant benefits for a flavorful and health-conscious culinary journey"</p>
                                        <p className="card-text"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i></p>
                                        <a href="#a" className="btn btn-primary" onClick={handleFlip}>Click here to Front</a>
                                    </div>
                                </div>
                            </ReactCardFlip>
                        </Zoom>
                    </div>
                    <div className='col-md-4'>
                        {/* Spain saffron */}
                        <Zoom>
                            <ReactCardFlip isFlipped={isFlippedFr} flipDirection='horizontal'>
                                {/* Front-side of the card */}
                                <div className="card m-3"   >
                                    <img src="https://i.pinimg.com/474x/2d/09/71/2d0971f4f2d348403ab8d9cb613f835d.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Premium Spain Saffron</h5>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <a href="#a" className="btn btn-primary" onClick={secondCard}>KNOW MORE</a>
                                    </div>
                                </div>

                                {/* Backside of the card */}
                                <div className="card m-3"   >
                                    <div className="card-body">
                                        <h5 className="card-title">Premium Spain Saffron</h5>
                                        <p className="card-text flip-card">"Savor the excellence of Spanish Saffron, renowned for its top-tier quality, elevating your dishes with a burst of unique flavor. Embrace its antioxidant properties for a culinary experience that combines exquisite taste with health benefits."</p>
                                        <p className="card-text"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i></p>
                                        <a href="#a" className="btn btn-primary" onClick={secondCard}>Click here to Front</a>
                                    </div>
                                </div>
                            </ReactCardFlip>
                        </Zoom>
                    </div>
                    <div className='col-md-4'>
                        {/* Iran Saffron */}
                        <Zoom>
                            <ReactCardFlip isFlipped={isFlippedSe} flipDirection='horizontal'>
                                {/* Front-side of the card */}
                                <div className="card m-3" >
                                    <img src="https://i.pinimg.com/474x/77/ec/b1/77ecb129570775b0069293a7886a564a.jpg" className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Iran Saffron</h5>
                                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                                        <a href="#a" className="btn btn-primary" onClick={thirdCard}>KNOW MORE</a>
                                    </div>
                                </div>
                                {/* Backside of the card */}
                                <div className="card m-3" >
                                    <div className="card-body">
                                        <h5 className="card-title">Iran Saffron</h5>
                                        <p className="card-text flip-card">"Indulge in the premium quality of Iranian Saffron, imparting a distinctive richness to your dishes. Experience not only its exquisite flavor but also the potential health benefits of this sought-after spice."</p>
                                        <p className="card-text"><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></p>
                                        <a href="#a" className="btn btn-primary" onClick={thirdCard}>Click here to Front</a>
                                    </div>
                                </div>
                            </ReactCardFlip>
                        </Zoom>
                    </div>
                </div>
            </div>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div style={{ "textAlign": "center" }}>
                            <Zoom>
                                <h4 style={{ "padding": "1rem" }}>Our Product Gallery</h4>
                            </Zoom>
                            <Zoom>
                                <div className='scroll-container' >
                                    <img src="https://i.pinimg.com/474x/e8/69/b3/e869b3b941bba0d2618ad05b2afda3cc.jpg" alt="Cinque Terre" style={{ "width": "15rem" }} />
                                    <img src="https://i.pinimg.com/474x/bb/df/e6/bbdfe64455f9ee7c1140fa020627cf52.jpg" alt="Forest" style={{ "width": "15rem" }} />
                                    <img src="https://i.pinimg.com/474x/00/ac/a1/00aca10c9e579115d16c2b3a43a25b75.jpg" alt="Northern Lights" style={{ "width": "15rem" }} />
                                    <img src="https://i.pinimg.com/474x/b2/1e/25/b21e259551cfbab88c1584a5ab5ced4c.jpg" alt="Mountains" style={{ "width": "15rem" }} />
                                    <img src="https://i.pinimg.com/474x/58/cb/3b/58cb3b110d1be3e3e196ea706f1f68a0.jpg" alt="Mountains" style={{ "width": "15rem" }} />
                                    <img src="https://i.pinimg.com/474x/b2/70/ed/b270ed5a7f8344ea37723d1640d36ec9.jpg" alt="Mountains" style={{ "width": "15rem" }} />
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </div>
            </div>
            <Zoom>
            <div className='row w-100 '>
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
            <Zoom>
                <Footer />
            </Zoom>
        </div>

    </>
}

export default Home