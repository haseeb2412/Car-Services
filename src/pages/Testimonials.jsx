import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import Testimonial from '../components/UI/Testimonial'

export default function Testimonials() {
  return (

    <Helmet> 

        <CommonSection title="Testimonials" />
      {/* <AboutSection aboutClass="aboutPage" /> */}
        <center><h1>this is the testimonials</h1></center>

        <div className="my-testimonials"
            style={{
                maxWidth:'1170px',
                padding:'25px 0px',
                margin:"0 auto",
            }}
        >
        <Testimonial /> 
        </div>
        
    </Helmet>
  )
}
