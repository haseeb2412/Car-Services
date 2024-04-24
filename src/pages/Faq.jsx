import React, { useState } from 'react';
import "../styles/faq.css"
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/UI/CommonSection';
import AboutSection from '../components/UI/AboutSection';

export default function Faq() {
    const [open, setOpen] = useState('1');
    const toggle = (id) => {
      if (open === id) {
        setOpen();
      } else {
        setOpen(id);
      }
    };
  return (
    <>
    <Helmet> 
        <CommonSection title="FAQ" />
      {/* <AboutSection aboutClass="aboutPage" /> */}

    <center><h2  
    style={{
      fontWeight:'600'
    }}>FREQUENTLY ASKED QUESTIONS</h2></center>
    <div className='my001'
    >
      <Accordion open={open} toggle={toggle}>
        <AccordionItem>
          <AccordionHeader className="bold" targetId="1">Can I Book a vehicle for someone else and pay using my credit card?</AccordionHeader>
          <AccordionBody accordionId="1">
          Yes, you can do that.
          <br /><br />
Please make sure you provide us the passengers full name, cell number and email address so we can provide the status updates to the passanger.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader className="bold" targetId="2">Are your fleet vehicles insured?</AccordionHeader>
          <AccordionBody accordionId="2">
          Yes, all vehicles that are providing transportation service to our clients are insured along with our general liability policy.
          </AccordionBody>
        </AccordionItem>
        <AccordionItem>
          <AccordionHeader className="bold" targetId="3">What is your COVID-19 Safety Procedure?</AccordionHeader>
          <AccordionBody accordionId="3">
          We follow all COVID-19 guidelines. All the vehicles are sanitized before and after each ride. The chauffeurs wear mask and we get regular temperature check ups to ensure your safety. 
          </AccordionBody>
        </AccordionItem>
      </Accordion>
    </div>
    </Helmet>
    

    </>
  )
}



{/* <AccordionHeader className="bold" targetId="3">What is your COVID-19 Safety Procedure?</AccordionHeader>
<AccordionBody accordionId="3">
We follow all COVID-19 guidelines. All the vehicles are sanitized before and after each ride. The chauffeurs wear mask and we get regular temperature check ups to ensure your safety. 
</AccordionBody>
</AccordionItem>
</Accordion>
</div>
</Helmet> */}