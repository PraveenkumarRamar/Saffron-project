import React, { useContext, useState } from 'react'
import Card from './Card'
import { productContextData } from '../Context/Productcontext'
import Zoom from 'react-reveal/Zoom';
import Nav from './Navb';
function Product({SetcartValue}) {

    let data = useContext(productContextData)
    console.log(data);
    return <>
        <div className='container-fluid product'>

            {/* <div className='row pt-4'>
                <div className='col-md-12'>
                    <img className='w-100' src="https://images.pexels.com/photos/36717/amazing-animal-beautiful-beautifull.jpg?cs=srgb&dl=pexels-pixabay-36717.jpg&fm=jpg" alt="" />
                </div>
            </div> */}
            <div className='row pt-2 our-product '>
                <div className='col-md-12  w-100 text-center text-white'>
                    <h2 className='p-2'>OUR PRODUCT</h2>
                    <p className=''><b>Experience the luxurious essence of Indian Kashmir, the rich flavor of Spanish, and the health benefits of Iron saffron, all with our A+ grade quality saffron products. Indulge in the finest saffron, carefully selected and curated to elevate your culinary and wellness experiences.</b></p>
                </div>
            </div>

            <div className='row pt-4'>
                {
                    data.product.map((e, i) => {
                        return <div className='col-md-3'>
                            <Card SetcartValue={SetcartValue}  key={i} input={e} />
                        </div>
                    })
                }
            </div>
        </div>
    </>
}

export default Product