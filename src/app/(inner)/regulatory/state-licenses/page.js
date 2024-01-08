"use client"

import Image from 'next/image'
import Heading from '@/components/Heading'
import { useState } from 'react';
import statesData from '@/(inner)/regulatory/state-licenses/states';

export default function StateLicenses() {
  const [activeState, setActiveState] = useState(null);

  const handleAccordion = (stateName) => {
    setActiveState(activeState === stateName ? null : stateName);
  };

  return (
    <main className='text-[18px] px-6 pt-[80px] md:pt-[85px] pb-[40px]'>
      <div className='flex flex-col gap-10 text-center pb-[40px] md:pb-[79px]'>
        <div>
          <h3 className="font-bold pb-4 text-green">Secure Compliance</h3>
          <h1 className='text-[#253D84]'>State Licenses</h1>
        </div>
        <p className='max-w-[532px] mx-auto'>UNO, Giromex, Le Goi Tien Le and Sharemoney are services of Omnex Group, Inc., a licensed money transfer company.</p>
      </div>

      <div className='grid grid-cols-1 gap-2.5'> 
        {/* Heading */}
        <div className='hidden md:grid grid-cols-4 grid-rows-1 bg-[#253D84]  rounded-2xl place-content-between min-h-[91px] items-center text-[#FFFFFF]'>
          <div className='col-span-1 pl-[30px]'>State</div>      
          <div className='col-span-2'>Regulatory Agency</div>
          <div className='col-span-1 pl-[30px]'>License</div>
        </div>

        {/* States */}
        {statesData.map((state, index) => (
          <div key={index}>
            {/* Mobile View */}
            <div className='md:hidden'>
              <div className='bg-[#F5F5F5] flex flex-row  justify-between rounded-2xl h-[64px] items-center' onClick={() => handleAccordion(state.stateName)}>
                <div className='pl-[30px]'>{state.stateName}</div>
                <div className='w-[40px] h-[20px]'>
                  <img className='pr-[24px] w-full h-full' src="/SVG/Group 154.png" alt="" />
                </div>
              </div>
              {activeState === state.stateName && (
                <div className=' rounded-2xl grid grid-cols-3 px-[30px] py-[25px] gap-4 gap-x-12'>
                  <div className='col-span-1'>State</div>
                  <div className='col-span-2 font-bold'>{state.stateName}</div>
                  <div className='col-span-1'>Regulatory Agency</div>
                  <div className='col-span-2'>
                    <a href={state.agencyUrl} className='font-bold' target="_blank" rel="noopener noreferrer">{state.agencyLabel}</a>
                    <br/>License # {state.licenseNumber}
                  </div>
                  <div className='col-span-1'>License</div>
                  <div className='col-span-2 font-bold'>
                    <a href={state.licenseUrl} className='font-bold' target="_blank" rel="noopener noreferrer">{state.licenseLabel}</a>
                  </div>
                </div>  
              )}
            </div>

            {/* Desktop View */}
            <div className='hidden md:grid grid-cols-4 grid-rows-1 bg-[#F5F5F5]  rounded-2xl place-content-between min-h-[91px] items-center'>
              <div className='col-span-1 font-bold text-[18px] pl-[30px]'>{state.stateName}</div>      
              <div className='col-span-2'>
                <a href={state.agencyUrl} className='font-bold' target="_blank" rel="noopener noreferrer">{state.agencyLabel}</a>
                {state.licenseNumber && (
                  <><br/>{state.stateName === 'National' ? 'NMLS License #' : 'License #'} {state.licenseNumber}</>
                )}
              </div>
              <div className='col-span-1 pl-[30px]'>
                <a href={state.licenseUrl} className='font-bold' target="_blank" rel="noopener noreferrer">{state.licenseLabel}</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
