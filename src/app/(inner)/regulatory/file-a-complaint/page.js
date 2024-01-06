"use client"


import Image from 'next/image'
import { useState } from 'react';
import statesData from '@/(inner)/regulatory/file-a-complaint/states';


export default function FileAComplaintPage() {
  const [selectedState, setSelectedState] = useState('');


  const handleStateChange = (event) => {
    const state = event.target.value;
    setSelectedState(state);
    const element = document.getElementById(state);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className='px-6 pt-[80px] md:pt-[85px] max-w-[855px] mx-auto'>
      {/* heading */}
      <div className='flex flex-col gap-10 text-center pb-[40px] md:pb-[79px]'>
        <div>
          <h3 className="font-bold pb-4 text-green">Secure Compliance</h3>
          <h1 className='text-[#253D84]'>File a Complaint</h1>
        </div>
        <p className='max-w-[839px] mx-auto'>We will work hard to resolve any of your concerns. Please contact us at (866) 201-8718 or through email at customerservice@omnexgroup.com or by mail to Attn: Customer Service, Omnex Group, Inc. 580 Sylvan Avenue, Suite LL-A Englewood Cliffs, NJ 07632.</p>
        <p className='max-w-[839px] mx-auto'>If you have an unresolved complaint, you may contact your state&apos;s licensing authority or the Consumer Financial Protection Bureau at 855-411-2372 or 855-729-2372 TTY/TDD (<a className='font-medium underline' href="www.consumerfiance.gov">www.consumerfiance.gov</a>).</p>
        <p className='max-w-[839px] mx-auto'>Contact information along state specific notices are provided below:</p>
      </div>

      {/* jump to state dropdown */}
      <div className='flex flex-col items-center pb-[100px] font-bold text-[18px]'>
          <select
            id="state-select"
            value={selectedState}
            onChange={handleStateChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-[200px] p-2.5 mb-5"
          >
          <option value="">Jump to State</option>
          {statesData.map((info, index) => (
            <option className='w-[200px]' key={index} value={info.state}>{info.state}</option>
          ))}
        </select>
      </div>
      
      {/* the states */}
      <div>
        {statesData.map((info, index) => (
          <div id={info.state} key={index}>
            <p className='text-[#253D84] font-bold'>{info.state}</p>
            <a href={info.url} className='text-[#52DB78] font-bold underline break-words'><p>{info.url}</p></a>
            <p>{info.phone}</p>
            <p>{info.email}</p>

            <div>
              {info.additionalInformation && (
                <>
                  <p className="mt-6"></p> {/* Top empty linebreak */}
                  <p dangerouslySetInnerHTML={{ __html: info.additionalInformation }}></p>
                  <p className="mb-6"></p> {/* Bottom empty linebreak */}
                </>
              )}
            </div>

            <div>
              {info.address && (
                <p dangerouslySetInnerHTML={{ __html: info.address }}></p>
              )}
            </div>
            <hr className='my-[50px] border-[#CACACA]' />
          </div>
          
        ))}
        
      </div>
    </main>

  )
}