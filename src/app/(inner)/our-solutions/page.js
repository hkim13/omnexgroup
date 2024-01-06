"use client"

import Heading from '@/components/Heading'
import BigButton from '@/components/BigButton';
import { useState } from 'react';

export default function OurSolutionsPage() {
  const [activeAccordion, setActiveAccordion] = useState('unoKiosk');

  const handleAccordion = (id) => {
    if (activeAccordion === id) {
     return;
    } 
      setActiveAccordion(id);
  };
  
  const getOrder = (buttonName) => {
    return activeAccordion === buttonName ? 'order-last' : '';
  };

  return (
    <main className='px-6 pt-[80px] md:pt-[85px] pb-[40px]'>
      {/* mobile display */}
      <div className='pb-8 lg:hidden'>
        <Heading
          heading= "For Businesses"
          title= "Explore our Solutions"
          detail= "Discover how our innovative solutions can simplify and enhance money transfer transactions by exploring our range of services."
        />
      </div>
      <div className='sm:flex sm:flex-row gap-4 mx-auto justify-center sm:items-end'>
        <div className='flex flex-col justify-end lg:justify-between sm:w-[612px] lg:h-[600px]'>
          <div className='hidden lg:flex pb-8'>
            <Heading
              heading= "For Businesses"
              title= "Explore our Solutions"
              detail= "Discover how our innovative solutions can simplify and enhance money transfer transactions by exploring our range of services."
            />
          </div>
          <div className='pb-4 sm:pb-0'>
            {activeAccordion === 'commercial' && (
              <div className='flex flex-col gap-4 lg:flex-row-reverse'>
                <div className='flex flex-col gap-8 p-7 border border-[#52DB78] rounded-3xl min-h-max lg:max-w-[378px] lg:gap-0 lg:justify-between'>
                  <h3>Commercial Payments</h3>
                  <hr className='-mx-2'/>
                  <p>Commercial Payments promotes financial inclusion and empower excluded small businesses by providing a secure cost effective solution for vendor payments.</p>
                </div>
                <div className='relative h-[237px] lg:h-[262px]'>
                  <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_407334020.webp" alt="" width="100%"/>
                </div>
              </div>
            )}
            {activeAccordion === 'unoKiosk' && (
              <div className='flex flex-col gap-4 lg:flex-row-reverse'>
                <div className='flex flex-col gap-8 p-7 border border-[#52DB78] rounded-3xl min-h-max lg:max-w-[378px] lg:gap-3 lg:justify-between'>
                  <h3>Uno Kiosk</h3>
                  <hr className='-mx-2'/>
                  <p>Uno Kiosk is a secure and hassle-free solution designed to help migrant workers easily send money to their loved ones, regardless of their physical location and transportation accessibility.</p>
                </div>
                <div className='relative h-[237px] lg:h-[279px]'>
                  <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_579649494.webp" alt="" width="100%"/>
                </div>
              </div>
            )}
            {activeAccordion === 'onlineAgent' && (
              <div className='flex flex-col gap-4 lg:flex-row-reverse'>
                <div className='flex flex-col gap-8 p-7 border border-[#52DB78] rounded-3xl min-h-max lg:max-w-[378px] lg:gap-0 lg:justify-between'>
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
              <div className='flex flex-col gap-4 lg:flex-row-reverse'>
                <div className='flex flex-col gap-8 p-7 border border-[#52DB78] rounded-3xl min-h-max lg:max-w-[378px] lg:gap-0 lg:justify-between'>
                  <h3>Pay by Link</h3>
                  <hr className='-mx-2'/>
                  <p>By offering convenient one-click money transfers through mobile phones, you can attract a larger customer base throughout your entire state and grow your business.</p>
                </div>
                <div className='relative h-[237px] lg:h-[262px]'>
                  <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_574823710.webp" alt="" width="100%"/>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className='flex flex-col gap-4'>
          <BigButton className={`btn-blue sm:h-[236px] ${getOrder('commercial')}`} onClick={() => handleAccordion('commercial')}>  <span className="sm:hidden">Commercial Payments</span>
          <span className="hidden sm:block">Commercial<br/>Payments</span></BigButton>
          
          <BigButton className={`btn-gray sm:h-[65px] ${getOrder('onlineAgent')}`} onClick={() => handleAccordion('onlineAgent')}>Online Agent Platform</BigButton>
          <BigButton className={`btn-black sm:h-[140px] ${getOrder('payLink')}`} onClick={() => handleAccordion('payLink')}>Pay by Link</BigButton>
          <BigButton className={`btn-green sm:h-[65px] ${getOrder('unoKiosk')}`} onClick={() => handleAccordion('unoKiosk')}>Uno Kiosk</BigButton>
        </div>
      </div>
 
    </main>
  )
}