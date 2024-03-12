import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Animatedcursor from './Components/Animatedcursor'
import Home from './Components/Home'
import Nav from './Components/Navb'
import Product from './Components/Product'
import Productcontext from './Context/Productcontext'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import About from './Components/About'
import Contact from './Components/Contact'
import Dynamicword from './Components/Dynamicword'
// import Footer from './Components/Footer'


function App() {
  let [cartValue,SetcartValue] = useState(0)
  return <>
    <BrowserRouter>
      <Animatedcursor />
      <div className='' >
        <Nav cartValue={cartValue} />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/products' element={<Productcontext>
            <Product SetcartValue={SetcartValue} />
          </Productcontext>} />
          <Route path='/sign-in' element={<Signin />} />
          <Route path='/sign-up' element={<Signup />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/dy' element={<Dynamicword/>} />
          <Route path='*' element={<Navigate to='/home' />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
}

export default App  