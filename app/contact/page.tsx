"use client"
import React from 'react'
import PageSection from '../components/PageSection'
import Image from 'next/image'
import {ContactForm} from '../components/ContactForm'


export default function contact() {
  return (
    <>
      <PageSection colourWay="dark">
      <div className='flex flex-wrap justify-center items-center mt-5 text-green' >
  <h1>Contact Us</h1>
</div>
<div>
          <Image
            src="/contactImage.png"
            layout="responsive"
            height={50}
            width={2000}
            objectFit="cover"
            alt=""
          />
        </div>


<br></br>
        <p className="font-light text-center">
            Interested in contacting us? Want to book workshop or help us become the fastest HPV?
            </p>
            <br></br>

            <p className="font-light text-center">
            Contact us at monashhpt@gmail.com, or fill in the form below:
            </p>

    <ContactForm/>


      </PageSection>
    </>
  );
}
