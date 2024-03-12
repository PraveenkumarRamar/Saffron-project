import React from 'react'
import { Link } from 'react-router-dom'
import Zoom from 'react-reveal/Zoom';

function Footer() {
    return <>
        <div className='container-fluid text-center text-White footer1'>
            <Zoom>
                <div className='row bg-dark'>
                    <div className='col-md-4 pt-3'>
                        <div>
                            © All rights reserved
                        </div>
                    </div>
                    <div className='col-md-4 pt-3'>
                        <div>
                            <Link to='/home' style={{"textDecoration":"None","color":"White"}}>Zprincess Saffron</Link>
                        </div>
                    </div>
                    <div className='col-md-4 pt-2'>
                        <div>
                            Designed and Devloped By <Link to='' style={{"textDecoration":"None","color":"White"}}> <b>HEYRAM INFRASTRUCTURES</b></Link>
                        </div>
                    </div>
                </div>
            </Zoom>
        </div>
    </>
}

export default Footer