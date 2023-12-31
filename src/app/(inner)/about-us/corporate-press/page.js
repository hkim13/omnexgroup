"use client"

import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button';
import teamData from '@/(inner)/about-us/corporate-press/team';
import React, { useState, useEffect, useRef  } from 'react';

export default function CorporatePage() {
  const [showFixedNavbar, setShowFixedNavbar] = useState(false);
  const [isPhilosophy, setIsPhilosophy] = useState(true);
  const [activeDate, setActiveDate] = useState('1990');
  const [expandedStates, setExpandedStates] = useState({});
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  const checkScrollPosition = () => {
    const buttonsSection = document.getElementById('buttons');
    if (buttonsSection) {
      const rect = buttonsSection.getBoundingClientRect();
      setShowFixedNavbar(rect.bottom < 0);
    }
  };
  

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener('scroll', checkScrollPosition);
    
    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);
  
  

  const toggleExpand = (name) => {
    setExpandedStates(prevExpandedStates => ({
      ...prevExpandedStates,
      [name]: !prevExpandedStates[name]
    }));
  };

  const navigate = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDisplay = () => {
    setIsPhilosophy(!isPhilosophy);
  };

  const handleDate = (id) => {
    if (activeDate === id) {
     return;
    } 
      setActiveDate(id);
  };



  
  
  return (
    <main className='flex flex-col gap-[60px] md:gap-[100px] max-w-[974px] mx-auto px-6 pb-[36px] pt-[60px] md:pt-[100px]'>
      {/* Corporate Press */}
      <div>
        <div className='flex flex-col gap-10 text-center pb-[40px] md:pb-[79px]'>
          <div>
            <h3 className="font-bold pb-4 text-green">About Us</h3>
            <h1 className='text-[#253D84]'>Corporate Press</h1>
          </div>
          <p className='max-w-[614px] mx-auto'>Our vision is to provide socially enabled cross-border financial services that help immigrants stay connected in ways that matter.</p>
        </div>
        <div className='flex justify-center'>
          <Button className="btn" >
            <Link href="/contact-us" >Contact Us</Link>
          </Button>
        </div>
      </div>
      

      {showFixedNavbar && (
         <div ref={navbarRef} className="fixed top-0 left-0 right-0 z-10 bg-white shadow-md">
          <div className='flex flex-row flex-wrap gap-2 justify-center py-[18px]'>
            <button className="bg-[#333333]/10 py-[10px] px-4 rounded-full" onClick={() => navigate('global-reach')}>
              Global Reach
            </button>
            <button className="bg-[#333333]/10 py-[10px] px-4 rounded-full" onClick={() => navigate('compliance')}>
              Compliance
            </button>
            <button className="bg-[#333333]/10 py-[10px] px-4 rounded-full" onClick={() => navigate('our-history')}>
              Our History
            </button>
            <button className="bg-[#333333]/10 py-[10px] px-4 rounded-full" onClick={() => navigate('our-brands')}>
              Our Brands
            </button>
            <button className="bg-[#333333]/10 py-[10px] px-4 rounded-full" onClick={() => navigate('our-team')}>
              Our Team
            </button>
            <button className="bg-[#333333]/10 py-[10px] px-4 rounded-full" onClick={() => navigate('summary')}>
              Summary
            </button>
          </div>
        </div>
      )}
      
      {/* 6 - Buttons */}
      <div id="buttons" className="scroll-mt-[200px] min-[387px]:scroll-mt-[160px] min-[737px]:scroll-mt-[100px]">
        <div className='grid grid-cols-1 md:grid-cols-5 md:grid-rows-4 gap-4 md:h-[285px] font-semibold text-[22px] md:text-[16px]'>
          <div className='md:col-span-1 md:row-span-4 bg-[#253D84] rounded-full md:rounded-3xl'>
            <button className='flex text-start pl-8 md:px-6 py-6 w-full h-full rounded-full md:rounded-3xl text-[#52DB78]' onClick={() => navigate('global-reach')}>Global Reach</button>
          </div>

          <div className='md:row-start-2 md:col-start-2 md:col-span-1 md:row-span-3 bg-[url("/Webp/AdobeStock_205527827.webp")] bg-cover bg-center bg-no-repeat rounded-full md:rounded-3xl'>
            <button className='flex text-start pl-8 md:px-6 py-6 w-full h-full rounded-full md:rounded-3xl text-white bg-[#333333]/50' onClick={() => navigate('compliance')}>Compliance</button>
          </div>

          <div className='md:row-start-2 md:col-start-3 md:col-span-1 md:row-span-1 bg-[#253D84] rounded-full md:rounded-3xl'>
            <button className='flex text-start items-center pl-8 md:px-6 py-6 w-full h-full rounded-full md:rounded-3xl text-[#52DB78] whitespace-nowrap' onClick={() => navigate('our-history')}>Our History</button>
          </div>

          <div className='md:row-start-3 md:col-start-3 md:col-span-1 md:row-span-2 bg-[#52DB78] rounded-full md:rounded-3xl'>
            <button className='flex text-start pl-8 md:px-6 py-6 w-full h-full rounded-full md:rounded-3xl text-[#253D84] whitespace-nowrap' onClick={() => navigate('our-brands')}>Our Brands</button>
          </div>

          <div className='md:row-start-2 md:col-start-4 md:col-span-1 md:row-span-3 bg-[url("/Webp/AdobeStock_564464309.webp")] bg-cover bg-center bg-no-repeat rounded-full md:rounded-3xl'>
            <button className='flex text-start pl-8 md:px-6 py-6 w-full h-full rounded-full md:rounded-3xl text-white bg-[#333333]/50' onClick={() => navigate('our-team')}>Our Team</button>
          </div>

          <div className='md:row-start-1 md:col-start-5 md:col-span-1 md:row-span-4 bg-[#333333] rounded-full md:rounded-3xl'>
            <button className='flex text-start pl-8 md:px-6 py-6 w-full h-full rounded-full md:rounded-3xl text-white' onClick={() => navigate('summary')}>Summary</button>
          </div>
        </div>
      </div>




      {/* Global Reach */}
      <div id="global-reach" className="scroll-mt-[60px] min-[387px]:scroll-mt-[60px] min-[737px]:scroll-mt-[60px] md:scroll-mt-[100px]">
        <div className='flex flex-col text-center pb-[60px] md:pb-[100px]'>
          <h3 className="font-bold pb-4 text-green">Local Focus</h3>
          <h1 className='text-[#253D84]'>Global Reach</h1>
        </div>
        <div className="relative">
          {/* Global Reach - Laptop view */}
          <div className="hidden h-[516px] rounded-3xl p-5 md:grid md:grid-cols-3 gap-5 md:justify-between md:items-end md:bg-[url('/Webp/AdobeStock_596371844.webp')] md:bg-cover">
            <div className="bg-[#333333]/70 rounded-2xl text-white p-4 text-center h-[136px]">
              <div className='font-bold text-[36px]'>49</div>
              <p>States</p>
            </div>
            <div className="bg-[#333333]/70 rounded-2xl text-white p-4 text-center h-[136px]">
              <div className='font-bold text-[36px]'>86</div>
              <p>Beneficiary Countries</p>
            </div>
            <div className="bg-[#333333]/70 rounded-2xl text-white p-4 text-center h-[136px]">
              <div className='font-bold text-[36px]'>+700</div>
              <p>Agent Locations</p>
            </div>
          </div>

          {/* Global Reach - Mobile View*/}
          <div className="flex flex-col gap-3 md:hidden">
            <div className='relative min-h-max'>
              <Image className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_596371844.webp" alt="" width={975} height={211}/>
            </div>
            <div className="bg-[#333333]/70 rounded-2xl text-white p-4 text-center">
              <div className='font-bold text-[36px]'>49</div>
              <p>States</p>
            </div>
            <div className="bg-[#333333]/70 rounded-2xl text-white p-4 text-center">
              <div className='font-bold text-[36px]'>86</div>
              <p>Beneficiary Countries</p>
            </div>
            <div className="bg-[#333333]/70 rounded-2xl text-white p-4 text-center">
              <div className='font-bold text-[36px]'>+700</div>
              <p>Agent Locations</p>
            </div>
          </div>
        </div>
      </div>

    
      {/* Compliance */}
      <div id="compliance" className='flex flex-col gap-[30px] scroll-mt-[200px] min-[387px]:scroll-mt-[160px] min-[737px]:scroll-mt-[100px]'>
        <div>
          <div className='flex flex-col text-center pb-[60px] md:pb-[100px]'>
            <h3 className="font-bold pb-4 text-green">Conformity</h3>
            <h1 className='text-[#253D84]'>Compliance</h1>
          </div>
          {isPhilosophy ? (
            <div className="philosophy-display">
              <div className='bg-[#253D84] rounded-2xl h-[579px] px-8 pt-12 pb-8 flex flex-col justify-between'>
                <h3 className='text-[#52DB78]'>Philosophy</h3>
                <h1 className='text-white'>“The engagement of every individual in an organization, regardless of department, is the pre-requisite to ensuring compliance.”</h1>
                <button className='flex items-center justify-center w-[50px] h-[50px] bg-[#FFFFFF] rounded-full self-end' onClick={toggleDisplay} aria-label="Toggle Display">
                  <Image className='w-[20px]' src="/SVG/BlueArrow.svg" alt="" width={20} height={20}/>
                </button>
              </div>
              
            </div>
          ) : (
            <div className="overview-display">
              <div className='bg-[#253D84] rounded-2xl h-[579px] px-8 pt-12 pb-8 flex flex-col justify-between my-[40px]'>
                <h3 className='text-[#52DB78]'>Overview</h3>
                <ul className='grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-2'>
                  <li className='bg-[#FFFFFF]/40 rounded-2xl text-white flex items-center p-6 md:h-[132px] md:col-start-1'>Over thirty-two years of licensure and regulatory history</li>
                  <li className='bg-[#FFFFFF]/40 rounded-2xl text-white flex items-center p-6 md:h-[132px] md:row-start-2 '>23 states have examined our compliance program since 2019 with no actions against our license</li>
                  <li className='bg-[#FFFFFF]/40 rounded-2xl text-white flex items-center p-6 md:h-[132px] md:col-start-'>Over $10M in surety bonds</li>
                  <li className='bg-[#FFFFFF]/40 rounded-2xl text-white flex items-center p-6 md:h-[132px] md:col-start-2'>Experienced long term compliance personnel</li>
                </ul>
                <button className='flex items-center justify-center w-[50px] h-[50px] bg-[#FFFFFF] rounded-full self-end' onClick={toggleDisplay} aria-label="Toggle Display">
                  <Image className='w-[20px]' src="/SVG/BlueArrow.svg" alt="" width={20} height={20}/>
                </button>
              </div>
            </div>
          )}
        </div>
     
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
          <div className='flex flex-col justify-between text-center border border-[#333333] rounded-2xl h-[498px] py-12 md:h-[535px] md:col-start-2'>
            <h3>Staff by department</h3>
            <div className='flex place-self-center min-h-max'>
              <Image className='w-full h-full object-cover rounded-3xl' src="/Webp/Diagram.webp" alt="" width={366} height={357}/>
            </div>
            <div className='text-[14px] text-[#333333]/65'>Percentages rounded to nearest whole number.</div>
          </div>
          
          <div className=' flex flex-col justify-between rounded-2xl h-[498px] px-9 py-12 md:h-[535px] md:row-start-1'>
            <div className='text-[#253D84] text-[80px] font-bold'>30%</div>
            <h3 className='pb-[40px]'>of Omnex Staff are in dedicated compliance roles</h3>
            <div className='flex flex-col gap-5'>
              <div className='flex flex-row gap-4'>
                <div className='bg-[#253D84] h-[18px] min-w-[18px] rounded-xl'/>
                <p className='whitespace-nowrap leading-5'>30% Compliance</p>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='bg-[#5473B2] h-[18px] min-w-[18px] rounded-xl'/>
                <p className='whitespace-nowrap leading-5'>20% Systems/administrative</p>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='bg-[#79A0D8] h-[18px] min-w-[18px] rounded-xl'/>
                <p className='whitespace-nowrap leading-5'>19% Agent/customer support</p>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='bg-[#8CB8ED] h-[18px] min-w-[18px] rounded-xl'/>
                <p className='whitespace-nowrap leading-5'>13% Collections/treasury</p>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='bg-[#AECFFF] h-[18px] min-w-[18px] rounded-xl'/>
                <p className='whitespace-nowrap leading-5'>10% Accounting</p>
              </div>
              <div className='flex flex-row gap-4'>
                <div className='bg-[#CADDFF] h-[18px] min-w-[18px] rounded-xl'/>
                <p className='whitespace-nowrap leading-5'>7% Sales</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our History */}
        <div id="our-history" className="scroll-mt-[200px] min-[387px]:scroll-mt-[160px] min-[737px]:scroll-mt-[100px]">
          <div className='flex flex-col justify-between bg-[#DFE7FF] border border-gray-300 rounded-3xl h-[447px] px-[31px] py-[59px] max-w-[975px] mx-auto'>
            <h3 className='hidden md:flex text-[#253D84]'>Our History</h3>
            <div className=' md:grid md:grid-cols-2'>
              <div className='md:flex sm:flex-col'>
                <h3 className='pb-[64px] md:hidden'>Our History</h3>
                <div className='hidden sm:flex md:max-w-[377px] md:h-[225px]'>
                  <div className='rounded-3xl w-full h-full bg-cover bg-no-repeat bg-[center_left_-60px]' style={{backgroundImage: "url('/Webp/AdobeStock_461344140.webp')",  backgroundSize:"125%"}}/>
                </div>
              </div>

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
          </div>
        </div>
      </div>

     

      {/* Our Brands */}
      <div id="our-brands" className="scroll-mt-[200px] min-[387px]:scroll-mt-[160px] min-[737px]:scroll-mt-[100px]">
        <div className='flex flex-col text-center pb-[60px] md:pb-[100px]'>
          <h3 className="font-bold pb-4 text-green">Identify</h3>
          <h1 className='text-[#253D84]'>Our Brands</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 justify-items-center gap-2 sm:gap-6 px-6 lg:px-0 max-w-[960px] mx-auto'>
          <Link className='flex items-center place-content-center border rounded-2xl w-full h-[155px]' href="https://www.unomoneytransfers.com/">
            <Image src="/SVG/UnoBIG.svg" alt="Uno" width={242} height={79}/> 
          </Link>
          <Link className='flex items-center place-content-center border rounded-2xl w-full h-[155px]' href="https://www.giromex.com/">
            <Image src="/SVG/GriromexBIG.svg" alt="Giromex" width={273} height={79}/> 
          </Link>
          <Link className='flex items-center place-content-center border rounded-2xl w-full h-[155px]' href="https://www.legoitienle.com/">
            <Image className='px-4 sm:px-4' src="/SVG/LeGoiBIG.svg" alt="LeGoi" width={384.9} height={81.3}/> 
          </Link>
          <Link className='flex items-center place-content-center border rounded-2xl w-full h-[155px]' href="https://www.sharemoney.com/us/en/denmark">
            <Image className='px-6 sm:px-4' src="/SVG/SharemoneyBIG.svg" alt="Sharemoney" width={353.9} height={74.3}/> 
          </Link>
        </div>
      </div>

      

      {/* Our Team */}
      <div id="our-team" className="scroll-mt-[200px] min-[387px]:scroll-mt-[160px] min-[737px]:scroll-mt-[100px]">
        <div className='flex flex-col text-center pb-[60px] md:pb-[100px]'>
          <h3 className="font-bold pb-4 text-green">Who We Are</h3>
          <h1 className='text-[#253D84]'>Our Team</h1>
        </div>
        
        <div className='flex flex-row flex-wrap justify-center mx-auto gap-4 lg:grid lg:grid-cols-3'>
          {teamData.map((team, index) => (
          <div key={index}>
            <div className=' max-w-[339px] min-w-[305px] mx-auto flex flex-col cursor-pointer' onClick={() => toggleExpand(team.name)}>
              <div className={`relative rounded-t-3xl w-full ${expandedStates[team.name] ? 'h-[260px]' : 'h-[235px]'} bg-cover bg-no-repeat bg-center transition-all duration-300 ease-in-out`}>
                <Image className='w-full h-full object-cover rounded-t-3xl' src={`${team.url}`} alt="" width={305} height={211}/>
                {expandedStates[team.name] && (
                  <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center rounded-t-3xl">
                    <div className='text-[#FFFFFF]'>
                      <div className='text-[15px] font-normal px-[33px]'>{team.description}</div>
                    </div>
                  </div>
                )}
              </div> 
              <div className={`flex flex-row items-center justify-between pl-[42px] pr-[24px] ${expandedStates[team.name] ? 'bg-[#253D84]' : 'bg-[#253D84]'} h-[105px] rounded-b-3xl transition-all duration-300 ease-in-out`}>
                <div className='flex flex-col text-[#FFFFFF]'>
                  <div className='text-[24px] font-bold'>{team.name}</div>
                  <div className='text-[18px] font-normal'>{team.location}</div>
                </div>
                <div className='flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white'>
                  <Image src={expandedStates[team.name] ? "/SVG/BlueClose.svg" : "/SVG/BlueOpen.svg"} alt={expandedStates[team.name] ? "Close" : "Open"} width={16} height={16}/>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
      </div>
     
    

      {/* Summary */}
      <div id="summary"  className='space-y-5 scroll-mt-[200px] min-[387px]:scroll-mt-[160px] min-[737px]:scroll-mt-[100px]'  >
        <div className='flex flex-col text-center pb-[40px] md:pb-[80px] '>
          <h3 className="font-bold pb-4 text-green">2021</h3>
          <h1 className='text-[#253D84]'>Summary</h1>
        </div >

        <div className='flex flex-col gap-5 md:flex-row'>
          <div className='bg-[#253D84] rounded-3xl w-full space-y-[39px] p-[39px] pb-[46px] md:max-w-[288px]'>
            <Image src="/SVG/DollarExchange.svg" alt="" width={63} height={74}/>
            <ul className='text-white space-y-4 list-disc pl-[22px]'>
              <li>
                <h3>Cash</h3>
              </li>
              <li>
                <h3>Debit Card</h3>
              </li>
            </ul>          
          </div>
          <div className='bg-[#DFE7FF] rounded-3xl w-full space-y-[39px] px-[39px] py-[49px]'>
            <h3>Economic/Reputational Risk Control</h3>
            <ul className='space-y-4 list-disc text-[16px] pl-[22px]'>
              <li>Omnex maintains over 10M USD in Surety bonds that ensure payout of transfers even in the unlikely event of business failure.</li>
              <li>Over 32 years in business providing services, over 50 million money transfer transactions processed with positive reputational scoring.</li>
            </ul>
          </div>
        </div>    

        <div className='flex flex-col gap-5 md:flex-row'>
          <div className='bg-[#F5F5F5] rounded-3xl w-full space-y-[39px] px-[39px] py-[49px]'>
            <h3>Compliance Verification</h3>
            <ul className='space-y-4 list-disc text-[16px] pl-[22px]'>
              <li>Risk-based regular mystery shopping.</li>
              <li>Risk-based verification by VCI (Visual Compliance Inspections) annual with retention of photographic evidence fo compliance.</li>
              <li>Annual online training & testing for individual tellers.</li>
              <li>Automated disconnection for failure to training or unacceptable testing results.</li>
              <li>PCI Inspection added to VCI (Visual Compliance Inspections) 2019.</li>
            </ul>
          </div>
          <div className='flex items-center bg-[#D9D9D9]/0 border border-[#333333]/10 rounded-3xl w-full px-[48px] py-[49px] md:px-[25px] md:max-w-[280px]'>
            <Image className='w-full' src="/Webp/Webpage-Illustrations-Ley.webp" alt="" width={230} height={279}/>
          </div>
        </div>

        <div>
          <div className='bg-[#DCF8E4] rounded-3xl w-full space-y-[39px] px-[39px] py-[49px] md:flex md:flex-row items-center gap-8 md:pl-[61px] md:pr-[30px]'>
            <div>
              <Image className='hidden md:flex' src="/Webp/Webpage-Illustrations-WebCheck.webp" alt="" width={294} height={298}/>
            </div>
            <div className='md:w-[531px]'>
              <h3>PCI compliance (including but not limited to)</h3>
              <ul className='space-y-4 list-disc text-[16px] pl-[22px]'>
                <li>Change system defaults on initial setup.</li>
                <li>Allow only secure and required traffic over POS network.</li>
                <li>Keep the equipment in a secure area perform period checks for signs of tamerping.</li>
                <li>Ensure personnel are fully trained to operate the POS system.</li>
                <li>Make sure any connected computer (terminals only at this time) equipment runs AV software and is scanned regularly.</li>
                <li>Adhere strictly to information retention policy.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-5 md:flex-row'>
          <div className='bg-[#333333] text-white rounded-3xl w-full space-y-[39px] px-[39px] py-[49px] md:max-w-[374px]'>
            <h3>Store Management Risk Control</h3>
            <ul className='space-y-4 list-disc text-[16px] pl-[22px]'>
              <li>National Background checks for all location owners.</li>
              <li>National credit bureau and Lexis/Nexis review for reputational, ownership and lien related matters.</li>
            </ul>
          </div>
          <div className='bg-[#253D84] text-white rounded-3xl w-full space-y-[39px] px-[39px] py-[49px]'>
            <h3>BSA/AML compliance</h3>
            <div className='flex flex-col lg:flex-row gap-2'>
              <div className='space-y-2'>
                <p className='font-medium'>Ensure Five Pillars:</p>
                <ul className='list-disc-none text-[16px]'>
                  <li>- BSA/AML program- Compliance Officer</li>
                  <li>- Independent Review</li>
                  <li>- Training</li>
                  <li>- Risk Assessment/ Risk Adjusted Procedures</li>
                </ul>
              </div>
              <div className='space-y-2'>
                <p className='font-medium'>Transactions Analysis:</p>
                <ul className='list-disc-none text-[16px]'>
                  <li>- Aggregation/Rule-Based</li>
                  <li>- Post Transaction Review</li>
                  <li>- Regulatory Filings (SAR/CTR filing)</li>
                </ul>
              </div>
            </div>
            
            
          </div>
        </div>
      </div>

     
      
    </main>
  )
}