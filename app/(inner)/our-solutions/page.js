"use client"

import Image from 'next/image'
import Heading from '@/components/Heading'
import BigButton from '@/components/BigButton';
import { useState } from 'react';

export default function OurSolutionsPage() {
  const [activeAccordion, setActiveAccordion] = useState('commercial');

  const handleAccordion = (id) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <main>
      <div className="lg:flex lg:flex-col">
        {/* Section 1 */}
        <div className="lg:hidden lg:flex lg:flex-col lg:w-full">
          <Heading
            heading= "For Businesses"
            title= "Explore our Solutions"
            detail= "Discover how our innovative solutions can simplify and enhance money transfer transactions by exploring our range of services."
          />
        </div>

        {/* Container for Sections 2 and 3 */}
        <div className="flex flex-col md:flex-row lg:flex-row">
          {/* Section 2 */}
          <div>
          <div className="hidden lg:flex">
          <Heading
            heading= "For Businesses"
            title= "Explore our Solutions"
            detail= "Discover how our innovative solutions can simplify and enhance money transfer transactions by exploring our range of services."
          />
          </div>
          <div className="md:w-1/2 lg:w-full">
           
          {activeAccordion === 'commercial' && (
            <div className='flex flex-col lg:flex-row-reverse gap-4 pb-4'>
              <div className='flex flex-col min-h-max lg:max-w-[378px] justify-between p-7 border border-[#52DB78] rounded-3xl'>
                <h3>Commercial Payments</h3>
                <hr className='-mx-2'/>
                <p>Commercial Payments promotes financial inclusion and empower excluded small businesses by providing a secure cost effective solution for vendor payments.</p>
              </div>
              <div className='relative h-[237px] lg:h-[262px]'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_407334020.webp" alt="" width="100%"/>
              </div>
            </div>
          )}
          {activeAccordion === 'onlineAgent' && (
            <div className='flex flex-col lg:flex-row-reverse gap-4 pb-4'>
              <div className='flex flex-col min-h-max lg:max-w-[378px] justify-between p-7 border border-[#52DB78] rounded-3xl'>
                <h3>Online Agent Platform</h3>
                <hr className='-mx-2'/>
                <p>Omnex agents have access to our superior online management software designed to help agents efficiently assist their customers in sending money back home.</p>
              </div>
              <div className='relative h-[237px] lg:h-[262px]'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_469348689.webp" alt="" width="100%"/>
              </div>
            </div>
          )}
          {activeAccordion === 'payLink' && (
            <div className='flex flex-col lg:flex-row-reverse gap-4 pb-4'>
              <div className='flex flex-col min-h-max lg:max-w-[378px] justify-between p-7 border border-[#52DB78] rounded-3xl'>
                <h3>Pay by Link</h3>
                <hr className='-mx-2'/>
                <p>By offering convenient one-click money transfers through mobile phones, you can attract a larger customer base throughout your entire state and grow your business.</p>
              </div>
              <div className='relative h-[237px] lg:h-[262px]'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_574823710.webp" alt="" width="100%"/>
              </div>
            </div>
          )}
          {activeAccordion === 'unoKiosk' && (
            <div className='flex flex-col lg:flex-row-reverse gap-4 pb-4'>
              <div className='flex flex-col min-h-max lg:max-w-[378px] justify-between p-7 border border-[#52DB78] rounded-3xl'>
                <h3>Uno Kiosk</h3>
                <hr className='-mx-2'/>
                <p>Uno Kiosk is a secure and hassle-free solution designed to help migrant workers easily send money to their loved ones, regardless of their physical location and transportation accessibility.</p>
              </div>
              <div className='relative h-[237px] lg:h-[283px]'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_579649494.webp" alt="" width="100%"/>
              </div>
            </div>
          )}
          </div>

          </div>
          
          {/* Section 3 */}
          <div className="md:w-1/2 lg:w-full">
            <BigButton className='btn-blue md:h-[236px]' onClick={() => handleAccordion('commercial')}>Commercial Payments</BigButton>
            <BigButton className='btn-gray md:h-[65px]' onClick={() => handleAccordion('onlineAgent')}>Online Agent Platform</BigButton>
            <BigButton className='btn-black md:h-[140px]' onClick={() => handleAccordion('payLink')}>Pay by Link</BigButton>
            <BigButton className='btn-green md:h-[65px]' onClick={() => handleAccordion('unoKiosk')}>Uno Kiosk</BigButton>
          </div>
        </div>
      </div>

      
      
    </main>
  )
}