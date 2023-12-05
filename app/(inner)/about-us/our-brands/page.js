"use client"

import Image from 'next/image'
import BigButton from '@/components/BigButton';
import Link from 'next/link'
import { useState } from 'react';

export default function OurBrandsPage() {
  const [activeAccordion, setActiveAccordion] = useState('uno');
  const [activeDate, setActiveDate] = useState('1990');

  const handleAccordion = (id) => {
    if (activeAccordion === id) {
     return;
    } 
      setActiveAccordion(id);
  };
  const handleDate = (id) => {
    if (activeDate === id) {
     return;
    } 
      setActiveDate(id);
  };

  
  return (
    <main>
      {/* Heading + Selections */}
      <div className='flex flex-col pb-16'>
        <div className='pb-14'>
          <h1 className='pb-9 max-w-[216px]'>Discover our Brands</h1>
          <div className='flex flex-col gap-2'>
            <div className='flex text-[16px] gap-3 sm:text-[18px]' href="link"><img className='w-4' src='/SVG/BlackTick.svg'/>Better Value</div>
            <div className='flex text-[16px] gap-3 sm:text-[18px]' href="link"><img className='w-4' src='/SVG/BlackTick.svg'/>Constant Support</div>
            <div className='flex text-[16px] gap-3 sm:text-[18px]' href="link"><img className='w-4' src='/SVG/BlackTick.svg'/>Maximum Security</div>
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          {activeAccordion === 'uno' && (
            <div className='bg-[#006DB7] rounded-3xl h-[402px] flex flex-col px-12 py-[51px] text-white justify-between'>
              <h3>From the US to Central and South America, Asia, Africa and the Dominican Republic.</h3>
              <p>Send money securely to three continents with our fast and reliable service.</p>
              <img className='h-[51px] place-self-start' src="/SVG/UnoSMALLwhite.svg" alt="" />
            </div>
          )}
          {activeAccordion === 'legoi' && (
            <div className='bg-[#5FA82C] rounded-3xl h-[402px] flex flex-col px-12 py-[51px] text-white justify-between'>
              <h3>From the United States and Canada to Vietnam.</h3>
              <p>With our secure and fast service, sending money to Vietnam has never been easier.</p>
              <img className='h-[51px] place-self-start' src="/SVG/LeGoiSMALLwhite.svg" alt="" />
          </div>
          )}
          {activeAccordion === 'giromex' && (
            <div className='bg-[#E20613] rounded-3xl h-[402px] flex flex-col px-12 py-[51px] text-white justify-between'>
              <h3>From the US to Mexico</h3>
              <p>Experience hassle-free money transfers to Mexico with our secure and lightning-fast service.</p>
              <img className='h-[51px] place-self-start' src="/SVG/GiromexSMALLwhite.svg" alt="" />
            </div>
          )}
          {activeAccordion === 'sharemoney' && (
            <div className='bg-[#0066CC] rounded-3xl h-[402px] flex flex-col px-12 py-[51px] text-white justify-between'>
              <h3>Connecting the US with the world</h3>
              <p>Send money worldwide securely and quickly with our digital service accessible via website and app.</p>
              <img className='h-[51px] place-self-start' src="/SVG/SharemoneySMALLwhite.svg" alt="" />
          </div>
          )}
          {activeAccordion !== 'uno' && (
            <button className="btn-uno font-bold text-[22px] px-8 py-4 rounded-full sm:h-[236px]" onClick={() => handleAccordion('uno')}>
                <img className='h-[33px]' src="/SVG/UnoSMALLwhite.svg" alt="" />
            </button>
          )}
          {activeAccordion !== 'legoi' && (
            <button className="btn-legoi font-bold text-[22px] px-8 py-4 rounded-full sm:h-[236px]" onClick={() => handleAccordion('legoi')}>
                <img className='h-[33px]' src="/SVG/LeGoiSMALLwhite.svg" alt="" />
            </button>
          )}
          {activeAccordion !== 'giromex' && (
            <button className="btn-giromex font-bold text-[22px] px-8 py-4 rounded-full sm:h-[236px]" onClick={() => handleAccordion('giromex')}>
                <img className='h-[33px]' src="/SVG/GiromexSMALLwhite.svg" alt="" />
            </button>
          )}
          {activeAccordion !== 'sharemoney' && (
            <button className="btn-sharemoney font-bold text-[22px] px-8 py-4 rounded-full sm:h-[236px]" onClick={() => handleAccordion('sharemoney')}>
                <img className='h-[33px]' src="/SVG/SharemoneySMALLwhite.svg" alt="" />
            </button>
          )}
        </div>
      </div>
       
      {/* text */}
      <div className='text-center pb-16'>
        <h3>Trust Uno, as a leading brand for money transfers to Brazil and the rest of South America, to provide unmatched service and reliability.</h3>
      </div>

      {/* About Us */}
      <div className='flex flex-col gap-5 pb-5'>
        <div className='h-[237px] sm:h-[402px]'>
          <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_537237474.webp" alt="" width="100%"/>
        </div>
        <div className='bg-[#333333]/5 flex flex-col gap-4 border rounded-3xl px-[34px] pt-[44px] pb-[68px]'>
          <h3>About Us</h3>
          <p className='leading-8'>Since 2007 Uno has specialized in money transfers to Brazil, Africa and Asia building strong cross border relationships to provide exceptional foreign exchange and service. With over 400 active agents, including the largest presence in New York with more than 160 agents, we are committed to providing our <strong>200,000+ active customers</strong> with convenient and accessible service, earning their loyalty and trust for their money transfer needs.</p>
        </div>
      </div>

      {/* Our History */}
      <div className='bg-[#DEF1FF] border border-gray-300 rounded-3xl h-[447px] px-[31px] pt-[59px] '>
        <h3 className='pb-[64px]'>Our History</h3>
        <div className='flex flex-row justify-center gap-8'>
            <div className='flex flex-col gap-4 font-bold'>
              {activeDate !== '1990' && (
                <button className='text-[#333333]/30' onClick={() => handleDate('1990')}>1990</button>
              )}
              {activeDate === '1990' && (
                <button className='text-[36px]' onClick={() => handleDate('1990')}>1990</button>
              )}
              
              {activeDate !== '2006' && (
                <button className='text-[#333333]/30' onClick={() => handleDate('2006')}>2006</button>
              )}
              {activeDate === '2006' && (
                <button className='text-[36px]' onClick={() => handleDate('2006')}>2006</button>
              )}

              {activeDate !== '2007' && (
                <button className='text-[#333333]/30' onClick={() => handleDate('2007')}>2007</button>
              )}
              {activeDate === '2007' && (
                <button className='text-[36px]' onClick={() => handleDate('2007')}>2007</button>
              )}

              {activeDate !== '2014' && (
                <button className='text-[#333333]/30' onClick={() => handleDate('2014')}>2014</button>
              )}
              {activeDate === '2014' && (
                <button className='text-[36px]' onClick={() => handleDate('2014')}>2014</button>
              )}

              {activeDate !== '2022' && (
                <button className='text-[#333333]/30' onClick={() => handleDate('2022')}>2022</button>
              )}
              {activeDate === '2022' && (
                <button className='text-[36px]' onClick={() => handleDate('2022')}>2022</button>
              )}
            </div>
            <div className='w-[185px]'>
              {activeDate === '1990' && (
                  <div className='pt-[0%]'>Giromex, Inc. is founded by Juan Carlos Lebrija as money transfer service for sending money to Mexico.</div>
              )}
              {activeDate === '2006' && (
                  <div className='pt-[30%]'>Acquired Le Gói Tiền Le.</div>
              )}
              {activeDate === '2007' && (
                  <div className='pt-[45%]'>Acquired Uno Money Transfers.</div>
              )}
              {activeDate === '2014' && (
                  <div className='pt-[55%]'>Launched Sharemoney Digital Money Transfer service in the United States.</div>
              )}
              {activeDate === '2022' && (
                  <div className='pt-[80%]'>Facilitated more than 3M transactions worldwide.</div>
              )}
            </div>
        </div>
      </div>

      {/* Leadership */}
      <div className='pt-[44px] pb-[30px]'>
        <div className='pb-[50px] px-[30px] flex flex-col gap-4'>
          <h3>Leadership</h3>
          <p>Our global team is committed to providing financial tools and technology to businesses and consumers, with a focus on empowering those who have been traditionally excluded, such as minorities, women-owned businesses and non-Western entities.</p>
        </div>
        
        <div className=' grid gap-3'>
          <div className='flex flex-row items-center gap-6 border rounded-3xl px-6 h-[136px]'>
            <img className='w-[90px] h-[90px]' src="/Webp/AdobeStock_407334020.webp" alt="" />
            <div className='flex flex-col'>
              <div className='text-[#253D84] text-[18px] font-bold'>Darren Manelski</div>
              <div className='text-[16px]'>CEO & Board Member</div>
            </div>
          </div>
          <div className='flex flex-row items-center gap-6 border rounded-3xl px-6 h-[136px]'>
            <img className='w-[90px] h-[90px]' src="/Webp/AdobeStock_407334020.webp" alt="" />
            <div className='flex flex-col'>
              <div className='text-[#253D84] text-[18px] font-bold'>Marc Mehl</div>
              <div className='text-[16px]'>Compliance (oversight) & Committee</div>
            </div>
          </div>
          <div className='flex flex-row items-center gap-6 border rounded-3xl px-6 h-[136px]'>
            <img className='w-[90px] h-[90px]' src="/Webp/AdobeStock_407334020.webp" alt="" />
            <div className='flex flex-col'>
              <div className='text-[#253D84] text-[18px] font-bold'>Omar Puente</div>
              <div className='text-[16px]'>Systems/IT</div>
            </div>
          </div>
          <div className='flex flex-row items-center gap-6 border rounded-3xl px-6 h-[136px]'>
            <img className='w-[90px] h-[90px]' src="/Webp/AdobeStock_407334020.webp" alt="" />
            <div className='flex flex-col'>
              <div className='text-[#253D84] text-[18px] font-bold'>Parkins Burger</div>
              <div className='text-[16px]'>CCO</div>
            </div>
          </div>
          <div className='flex flex-row items-center gap-6 border rounded-3xl px-6 h-[136px]'>
            <img className='w-[90px] h-[90px]' src="/Webp/AdobeStock_407334020.webp" alt="" />
            <div className='flex flex-col'>
              <div className='text-[#253D84] text-[18px] font-bold'>M. Franklin Boyd</div>
              <div className='text-[16px]'>General Counsel</div>
            </div>
          </div>
          <div className='flex flex-row items-center gap-6 border rounded-3xl px-6 h-[136px]'>
            <img className='w-[90px] h-[90px]' src="/Webp/AdobeStock_407334020.webp" alt="" />
            <div className='flex flex-col'>
              <div className='text-[#253D84] text-[18px] font-bold'>Claudia Mendez</div>
              <div className='text-[16px]'>America Leader</div>
            </div>
          </div>
          <div className='flex flex-row items-center gap-6 border rounded-3xl px-6 h-[136px]'>
            <img className='w-[90px] h-[90px]' src="/Webp/AdobeStock_407334020.webp" alt="" />
            <div className='flex flex-col'>
              <div className='text-[#253D84] text-[18px] font-bold'>Join our Team</div>
              <div className='text-[16px]'>Check our positions and work with us!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Goals */}
      <div className='flex flex-col justify-center gap-11 bg-[#006DB7] rounded-3xl h-[646px] px-[30px]'>
        <div>
          <h1 className='text-white'>Our Goals</h1>
        </div>
        <div className='grid gap-2 '>
          <div className='bg-white text-[#006DB7] text-[18px] font-bold px-[47px] py-[18px] rounded-3xl'>Better exchange rates</div>
          <div className='bg-white/25 text-[#FFFFFF] text-[16px] px-[47px] py-[20px] rounded-3xl'>Building and sustaining the trust of our customers</div>
          <div className='bg-white/25 text-[#FFFFFF] text-[16px] px-[47px] py-[20px] rounded-3xl'>Building complementary financial services</div>
          <div className='bg-white/25 text-[#FFFFFF] text-[16px] px-[47px] py-[20px] rounded-3xl'>Increasinge the speed of money transfers</div>
          <div className='bg-white/25 text-[#FFFFFF] text-[16px] px-[47px] py-[20px] rounded-3xl'>Consumer Convenience and ease of use</div>
        </div>
      </div>
    </main>
  )
}