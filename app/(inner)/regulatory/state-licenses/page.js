"use client"

import Image from 'next/image'
import Heading from '@/components/Heading'
import { useState } from 'react';

export default function StateLicenses() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordion = (id) => {
    if (activeAccordion === id) {
     return;
    } 
      setActiveAccordion(id);
  };

  return (
    <main className='text-[18px]'>
      <div className='flex flex-col gap-10 text-center'>
        <div>
          <h3 className="font-bold pb-4 text-green">Secure Compliance</h3>
          <h1 className='text-[#253D84]'>State Licenses</h1>
        </div>
        <p>UNO, Giromex, Le Goi Tien Le and Sharemoney are operated under the license of Omnex Group, Inc., a money transfer service.</p>
      </div>

      <div className='grid grid-cols-1 gap-2.5'> 
        {/* Heading */}
        <div className='hidden md:grid grid-cols-4 grid-rows-1 bg-[#253D84] border rounded-2xl place-content-between min-h-[91px] items-center text-[#FFFFFF]'>
          <div className='col-span-1 pl-[30px]'>State</div>      
          <div className='col-span-2'>Regulatory Agency</div>
          <div className='col-span-1'>License</div>
        </div>

        {/* Alabama */}
        <div>
          {/* mobile */}
          <div className='md:hidden'>
            <div className='bg-[#F5F5F5] flex flex-row border justify-between rounded-2xl h-[64px] items-center' onClick={() => handleAccordion('Alabama')}>
              <div className=' pl-[30px] md:hidden'>Alabama</div>
              <div className='w-[40px] h-[20px] md:hidden'>
                <img className='pr-[24px] w-full h-full' src="/SVG/Group 154.png" alt="" />
              </div>
            </div>
            {activeAccordion === 'Alabama' && (
              <div className='border rounded-2xl grid grid-cols-3 px-[30px] py-[25px] gap-4 md:hidden'>
                <div className='col-span-1'>State</div>
                <div className='col-span-2 font-bold'>Alabama</div>
                <div className='col-span-1'>Regulatory Agency</div>
                <div className='col-span-2'>
                  <a href="https://asc.alabama.gov/" className='font-bold' target="_blank" rel="noopener noreferrer">Alabama Securities Commission</a>
                  <br/>License # SOC#306
                </div>
                <div className='col-span-1'>License</div>
                <div className='col-span-2 font-bold'>
                  <a href="https://www.sharemoney.com/assets/license/send-money-alabama-license.pdf" className='font-bold' target="_blank" rel="noopener noreferrer">Alabama</a>
                </div>
              </div>  
            )}
          </div>

          {/* desktop */}
          <div className='hidden md:grid grid-cols-4 grid-rows-1 bg-[#F5F5F5] border rounded-2xl place-content-between min-h-[91px] items-center'>
            <div className='col-span-1 font-bold text-[18px] pl-[30px]'>Alabama</div>      
            <div className='col-span-2'>
              <a href="https://asc.alabama.gov/" className='font-bold' target="_blank" rel="noopener noreferrer">Alabama Securities Commission</a>
              <br/>License # SOC#306
            </div>
            <div className='col-span-1'>
              <a href="https://www.sharemoney.com/assets/license/send-money-alabama-license.pdf" className='font-bold' target="_blank" rel="noopener noreferrer">Alabama</a>
            </div>
          </div>
        </div>

        {/* Arizona */}
        <div>
          {/* mobile */}
          <div className='md:hidden'>
            <div className='bg-[#F5F5F5] flex flex-row border justify-between rounded-2xl h-[64px] items-center' onClick={() => handleAccordion('Arizona')}>
              <div className=' pl-[30px] md:hidden'>Arizona</div>
              <div className='w-[40px] h-[20px] md:hidden'>
                <img className='pr-[24px] w-full h-full' src="/SVG/Group 154.png" alt="" />
              </div>
            </div>
            {activeAccordion === 'Arizona' && (
              <div className='border rounded-2xl grid grid-cols-3 px-[30px] py-[25px] gap-4 md:hidden'>
                <div className='col-span-1'>State</div>
                <div className='col-span-2 font-bold'>Arizona</div>
                <div className='col-span-1'>Regulatory Agency</div>
                <div className='col-span-2'>
                  <a href="https://asc.Arizona.gov/" className='font-bold' target="_blank" rel="noopener noreferrer">Arizona Securities Commission</a>
                  <br/>License # SOC#306
                </div>
                <div className='col-span-1'>License</div>
                <div className='col-span-2 font-bold'>
                  <a href="https://www.sharemoney.com/assets/license/send-money-Arizona-license.pdf" className='font-bold' target="_blank" rel="noopener noreferrer">Arizona</a>
                </div>
              </div>  
            )}
          </div>

          {/* desktop */}
          <div className='hidden md:grid grid-cols-4 grid-rows-1 bg-[#F5F5F5] border rounded-2xl place-content-between min-h-[91px] items-center'>
            <div className='col-span-1 font-bold text-[18px] pl-[30px]'>Arizona</div>      
            <div className='col-span-2'>
              <a href="https://asc.Arizona.gov/" className='font-bold' target="_blank" rel="noopener noreferrer">Arizona Securities Commission</a>
              <br/>License # SOC#306
            </div>
            <div className='col-span-1'>
              <a href="https://www.sharemoney.com/assets/license/send-money-Arizona-license.pdf" className='font-bold' target="_blank" rel="noopener noreferrer">Arizona</a>
            </div>
          </div>
        </div>
      
      </div>
    </main>
  )
}