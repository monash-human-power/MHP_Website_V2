import React from 'react'
import PageSection from '../components/PageSection'
import Image from 'next/image'

export default function contactUs() {
  return (
    <>
      <PageSection colourWay="dark">
        <div>
          <Image src="/contactImage.png" layout='responsive' width={2000} height={100} alt="" />
        </div>
        <div className='flex flex-wrap justify-center items-center mt-5' style={{ color: '#acf601' }}>
          <h1 >Contact Us</h1>
        </div>
      </PageSection>
    </>
  )
}
