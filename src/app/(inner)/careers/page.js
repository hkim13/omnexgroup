"use client"

import Heading from '@/components/Heading'
import Button from '@/components/Button';
import { useState } from 'react';

export default function CareersPage() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordion = (id) => {
    if (activeAccordion === id) {
      setActiveAccordion(null);
    } else {
      setActiveAccordion(id);
    }
  };

  return (
    <main className='px-6 pt-[80px] md:pt-[85px] pb-[40px]'>
      <div className='pb-8'>
        <Heading
          heading= "Work with Us"
          title= "Careers"
          detail= "Discover rewarding career opportunities by joining Omnex Group and making a meaningful impact on the financial well-being of people and their loved ones around the world."
        />
      </div>
      
      {/* temporary - No current positions */}
      <div className='bg-[#F5F5F5] rounded-3xl max-w-[947px] h-[274px] px-8 py-12 flex items-center text-center mx-auto md:h-[402px]'>
        <div className='flex flex-col gap-4 md:gap-10'>
          <h3 className='text-[#253D84]'>Sorry, but we currently do not have any open positions.</h3>
          <p>However, please check back regularly as opportunities to join our team may arise sooner than you think!</p>
        </div>
      </div>


      {/* }
      <div className='flex flex-col gap-4'>
        <div className='flex flex-wrap justify-between sm:justify-start gap-2'>
          <Button className={`btn-gray text-[15px] ${activeAccordion === 'frontEndDeveloper' ? 'bg-[#333333] text-white' : '' }`} onClick={() => handleAccordion('frontEndDeveloper')}>Front end Developer</Button>
          <Button className={`btn-gray text-[15px] ${activeAccordion === 'saleAssistant' ? 'bg-[#333333] text-white' : '' }`} onClick={() => handleAccordion('saleAssistant')}>Sale Assistant</Button>
          <Button className={`btn-gray text-[15px] ${activeAccordion === 'saleAnalytics' ? 'bg-[#333333] text-white' : '' }`} onClick={() => handleAccordion('saleAnalytics')}>Sale Analytics</Button>
          <Button className={`btn-gray text-[15px] ${activeAccordion === 'marketingDevelopment' ? 'bg-[#333333] text-white' : '' }`} onClick={() => handleAccordion('marketingDevelopment')}>Marketing Development</Button>
        </div>
        {activeAccordion === null && (
        <div className='relative h-[239px] sm:h-[402px]'>
          <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_573681778.webp" alt="" width="100%"/>
        </div>
        )}

        {activeAccordion === 'frontEndDeveloper' && (
          <div className='flex flex-col gap-4'>
            <div className='relative h-[239px] sm:hidden'>
              <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_573681778.webp" alt="" width="100%"/>
            </div>
            <div className='border rounded-3xl sm:bg-[url("/Webp/AdobeStock_573681778.webp")] bg-cover bg-center bg-no-repeat'>
              <div className='rounded-3xl bg-[#333333]/75 text-white p-7 flex flex-col gap-10 sm:flex-row justify-center py-14 px-12 '>
              <div className='flex flex-col gap-4 sm:max-w-[553px]'>
                <h3>Front End Developer</h3>
                <p>As a Front-End Developer, you will be responsible for creating visually engaging and intuitive interfaces for our web and mobile applications. Working closely with our design and product teams, you will use your expertise in HTML, CSS, and JavaScript to turn mockups and wireframes into responsive and interactive user interfaces. As a member of our dynamic team, you will have the opportunity to work on cutting-edge projects, contribute to the development of innovative solutions, and shape the future of our business.</p>
              </div>
              <div className="relative border-t border-gray-300 sm:border-t-0 sm:border-l sm:w-px">
                <hr className="absolute inset-0 sm:relative h-full"/>
              </div>
              <div className='flex flex-col gap-10 sm:justify-between'>
                <div className='flex flex-col gap-4 sm:gap'>
                  <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>Call Us Now</div>
                  <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>40h/week</div>
                  <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>+5 years experience</div>
                  <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>65-70K</div>
                </div>
                <Button className='btn-green text-center'>Apply Now</Button>
              </div>
              </div>
            </div>
          </div>
          )}

          {activeAccordion === 'saleAssistant' && (
            <div className='flex flex-col gap-4'>
              <div className='relative h-[239px] sm:hidden'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_573681778.webp" alt="" width="100%"/>
              </div>
              <div className='border rounded-3xl sm:bg-[url("/Webp/AdobeStock_573681778.webp")] bg-cover bg-center bg-no-repeat'>
                <div className='rounded-3xl bg-[#333333]/75 text-white p-7 flex flex-col gap-10 sm:flex-row justify-center py-14 px-12 '>
                <div className='flex flex-col gap-4 sm:max-w-[553px]'>
                  <h3>Sale Assistant</h3>
                  <p>Sale Assistant - job description.</p>
                </div>
                <div className="relative border-t border-gray-300 sm:border-t-0 sm:border-l sm:w-px">
                  <hr className="absolute inset-0 sm:relative h-full"/>
                </div>
                <div className='flex flex-col gap-10 sm:justify-between'>
                  <div className='flex flex-col gap-4 sm:gap'>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>Call Us Now</div>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>40h/week</div>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>+5 years experience</div>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>65-70K</div>
                  </div>
                  <Button className='btn-green text-center'>Apply Now</Button>
                </div>
                </div>
              </div>
            </div>
          )}

          {activeAccordion === 'saleAnalytics' && (
            <div className='flex flex-col gap-4'>
              <div className='relative h-[239px] sm:hidden'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_573681778.webp" alt="" width="100%"/>
              </div>
              <div className='border rounded-3xl sm:bg-[url("/Webp/AdobeStock_573681778.webp")] bg-cover bg-center bg-no-repeat'>
                <div className='rounded-3xl bg-[#333333]/75 text-white p-7 flex flex-col gap-10 sm:flex-row justify-center py-14 px-12 '>
                <div className='flex flex-col gap-4 sm:max-w-[553px]'>
                  <h3>Sale Analytics</h3>
                  <p>Sale Analytics - job description.</p>
                </div>
                <div className="relative border-t border-gray-300 sm:border-t-0 sm:border-l sm:w-px">
                  <hr className="absolute inset-0 sm:relative h-full"/>
                </div>
                <div className='flex flex-col gap-10 sm:justify-between'>
                  <div className='flex flex-col gap-4 sm:gap'>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>Call Us Now</div>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>40h/week</div>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>+5 years experience</div>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>65-70K</div>
                  </div>
                  <Button className='btn-green text-center'>Apply Now</Button>
                </div>
                </div>
              </div>
            </div>
          )}

          {activeAccordion === 'marketingDevelopment' && (
            <div className='flex flex-col gap-4'>
              <div className='relative h-[239px] sm:hidden'>
                <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_573681778.webp" alt="" width="100%"/>
              </div>
              <div className='border rounded-3xl sm:bg-[url("/Webp/AdobeStock_573681778.webp")] bg-cover bg-center bg-no-repeat'>
                <div className='rounded-3xl bg-[#333333]/75 text-white p-7 flex flex-col gap-10 sm:flex-row justify-center py-14 px-12 '>
                <div className='flex flex-col gap-4 sm:max-w-[553px]'>
                  <h3>Marketing Development</h3>
                  <p>Marketing Development - job description.</p>
                </div>
                <div className="relative border-t border-gray-300 sm:border-t-0 sm:border-l sm:w-px">
                  <hr className="absolute inset-0 sm:relative h-full"/>
                </div>
                <div className='flex flex-col gap-10 sm:justify-between'>
                  <div className='flex flex-col gap-4 sm:gap'>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>Call Us Now</div>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>40h/week</div>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>+5 years experience</div>
                    <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>65-70K</div>
                  </div>
                  <Button className='btn-green text-center'>Apply Now</Button>
                </div>
                </div>
              </div>
            </div>
          )}
      </div>
          */ }
    </main>
  )
}