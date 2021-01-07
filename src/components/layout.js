import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Fragment } from 'react'

const layout = ({children}) => {
  return (
    <Fragment>
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </Fragment>
  )
}

export default layout