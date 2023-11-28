"use client"

import Image from 'next/image'
import Heading from '@/components/Heading'
import BigButton from '@/components/BigButton';
import { useState } from 'react';

export default function OurSolutionsPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordion = (id) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <main>
      <div className='pb-8'>
        <Heading
          heading= "For Businesses"
          title= "Explore our Solutions"
          detail= "Discover how our innovative solutions can simplify and enhance money transfer transactions by exploring our range of services."
        />
      </div>
      <div>
        <div className='flex flex-col justify-center gap-4'>
          {activeAccordion === 'commercial' && (
            <div className='flex flex-col gap-4 pb-4'>
              <div className='flex flex-col h-[262px] justify-between p-7 border border-[#52DB78] rounded-3xl'>
                <h3>Commercial Payments</h3>
                <hr className='-mx-2'/>
                <p>Commercial Payments promotes financial inclusion and empower excluded small businesses by providing a secure cost effective solution for vendor payments.</p>
              </div>
              <div className='relative h-[237px]'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_407334020.webp" alt="" width="100%"/>
              </div>
            </div>
          )}
          <BigButton className='btn-blue' onClick={() => handleAccordion('commercial')}>Commercial Payments</BigButton>
          
          {activeAccordion === 'onlineAgent' && (
            <div className='flex flex-col gap-4 pb-4'>
              <div className='flex flex-col h-[262px] justify-between p-7 border border-[#52DB78] rounded-3xl'>
                <h3>Online Agent Platform</h3>
                <hr className='-mx-2'/>
                <p>Omnex agents have access to our superior online management software designed to help agents efficiently assist their customers in sending money back home.</p>
              </div>
              <div className='relative h-[237px]'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_469348689.webp" alt="" width="100%"/>
              </div>
            </div>
          )}
          <BigButton className='btn-gray' onClick={() => handleAccordion('onlineAgent')}>Online Agent Platform</BigButton>
          
          {activeAccordion === 'payLink' && (
            <div className='flex flex-col gap-4 pb-4'>
              <div className='flex flex-col h-[262px] justify-between p-7 border border-[#52DB78] rounded-3xl'>
                <h3>Pay by Link</h3>
                <hr className='-mx-2'/>
                <p>By offering convenient one-click money transfers through mobile phones, you can attract a larger customer base throughout your entire state and grow your business.</p>
              </div>
              <div className='relative h-[237px]'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_574823710.webp" alt="" width="100%"/>
              </div>
            </div>
          )}
          <BigButton className='btn-black' onClick={() => handleAccordion('payLink')}>Pay by Link</BigButton>
          
          {activeAccordion === 'unoKiosk' && (
            <div className='flex flex-col gap-4 pb-4'>
              <div className='flex flex-col h-[262px] justify-between p-7 border border-[#52DB78] rounded-3xl'>
                <h3>Uno Kiosk</h3>
                <hr className='-mx-2'/>
                <p>Uno Kiosk is a secure and hassle-free solution designed to help migrant workers easily send money to their loved ones, regardless of their physical location and transportation accessibility.</p>
              </div>
              <div className='relative h-[237px]'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_579649494.webp" alt="" width="100%"/>
              </div>
            </div>
          )}
          <BigButton className='btn-green' onClick={() => handleAccordion('unoKiosk')}>Uno Kiosk</BigButton>
        </div>
      </div>
      
    </main>
  )
}