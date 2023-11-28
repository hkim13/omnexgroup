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
    <main>
      <div className='pb-8'>
        <Heading
          heading= "Work with Us"
          title= "Careers"
          detail= "Discover rewarding career opportunities by joining Omnex Group and making a meaningful impact on the financial well-being of people and their loved ones around the world."
        />
      </div>
      
      <div className='flex flex-col gap-4'>
        <div className='flex flex-wrap justify-between gap-2'>
          <Button className={`btn-gray text-[15px] ${activeAccordion === 'frontEndDeveloper' ? 'bg-[#333333] text-white' : '' }`} onClick={() => handleAccordion('frontEndDeveloper')}>Front end Developer</Button>
          <Button className={`btn-gray text-[15px] ${activeAccordion === 'saleAssistant' ? 'bg-[#333333] text-white' : '' }`} onClick={() => handleAccordion('saleAssistant')}>Sale Assistant</Button>
          <Button className={`btn-gray text-[15px] ${activeAccordion === 'saleAnalytics' ? 'bg-[#333333] text-white' : '' }`} onClick={() => handleAccordion('saleAnalytics')}>Sale Analytics</Button>
          <Button className={`btn-gray text-[15px] ${activeAccordion === 'marketingDevelopment' ? 'bg-[#333333] text-white' : '' }`} onClick={() => handleAccordion('marketingDevelopment')}>Marketing Development</Button>
        </div>
        <div className='relative h-[239px]'>
          <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_573681778.webp" alt="" width="100%"/>
        </div>

        {activeAccordion === 'frontEndDeveloper' && (
          <div className='border rounded-3xl bg-[#413D39]/75 text-white p-7 flex flex-col gap-10 '>
            <div className='flex flex-col gap-4'>
              <h3>Front End Developer</h3>
              <p>As a Front-End Developer, you will be responsible for creating visually engaging and intuitive interfaces for our web and mobile applications. Working closely with our design and product teams, you will use your expertise in HTML, CSS, and JavaScript to turn mockups and wireframes into responsive and interactive user interfaces. As a member of our dynamic team, you will have the opportunity to work on cutting-edge projects, contribute to the development of innovative solutions, and shape the future of our business.</p>
            </div>
            <hr/>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-4'>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>Call Us Now</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>40h/week</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>+5 years experience</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>65-70K</div>
              </div>
              <Button className='btn-green text-center'>Apply Now</Button>
            </div>
          </div>
          )}
          {activeAccordion === 'saleAssistant' && (
          <div className='border rounded-3xl bg-[#413D39]/75 text-white p-7 flex flex-col gap-10 '>
            <div className='flex flex-col gap-4'>
              <h3>Sale Assistant</h3>
              <p>Sale Assistant - job description</p>
            </div>
            <hr/>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-4'>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>Call Us Now</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>40h/week</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>+5 years experience</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>65-70K</div>
              </div>
              <Button className='btn-green text-center'>Apply Now</Button>
            </div>
          </div>
          )}
          {activeAccordion === 'saleAnalytics' && (
          <div className='border rounded-3xl bg-[#413D39]/75 text-white p-7 flex flex-col gap-10 '>
            <div className='flex flex-col gap-4'>
              <h3>Sale Analytics</h3>
              <p>Sale Analytics - job description</p>
            </div>
            <hr/>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-4'>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>Call Us Now</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>40h/week</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>+5 years experience</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>65-70K</div>
              </div>
              <Button className='btn-green text-center'>Apply Now</Button>
            </div>
          </div>
          )}
          {activeAccordion === 'marketingDevelopment' && (
          <div className='border rounded-3xl bg-[#413D39]/75 text-white p-7 flex flex-col gap-10 '>
            <div className='flex flex-col gap-4'>
              <h3>Marketing Development</h3>
              <p>Marketing Development - job description</p>
            </div>
            <hr/>
            <div className='flex flex-col gap-10'>
              <div className='flex flex-col gap-4'>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>Call Us Now</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>40h/week</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>+5 years experience</div>
                <div className='flex text-[18px] gap-3' href="link"><img className='w-4' src='/SVG/WhiteTick.svg'/>65-70K</div>
              </div>
              <Button className='btn-green text-center'>Apply Now</Button>
            </div>
          </div>
          )}
      
      
      </div>
     
    </main>
  )
}