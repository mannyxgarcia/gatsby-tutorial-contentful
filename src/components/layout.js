import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function layout({children}) {
  return (
    <React.Fragment>
      <Navbar/>
      <main>{children}</main>
      <Footer/>
    </React.Fragment>
  )
}

export default layout
