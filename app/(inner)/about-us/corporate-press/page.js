"use client"

import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button';
import BigButton from '@/components/BigButton';
import { useState } from 'react';
import teamData from '@/(inner)/about-us/corporate-press/team';

export default function CorporatePage() {
  const [isPhilosophy, setIsPhilosophy] = useState(true);
  const [activeDate, setActiveDate] = useState('1990');
  const [activeState, setActiveState] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
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

  const handleAccordion = (stateName) => {
    setActiveState(activeState === stateName ? null : stateName);
  };

  
  
  return (
    <main className='max-w-[974px] mx-auto'>
      {/* Corporate Press */}
      <div className='flex flex-col gap-10 text-center pb-[40px] md:pb-[79px]'>
        <div>
          <h3 className="font-bold pb-4 text-green">About Us</h3>
          <h1 className='text-[#253D84]'>Corporate Press</h1>
        </div>
        <p className='max-w-[614px] mx-auto'>Our vision is to provide socially enabled cross-border financial services that help immigrants stay connected in ways that matter.</p>
      </div>
      <div className='flex justify-center'>
        <Button className="btn">
          <Link href="/about-us/our-brands">Contact Us</Link>
        </Button>
      </div>
      
      {/* 6 - Buttons */}
      <div className='flex flex-col gap-4 pt-[57px]'>
        <BigButton className={`btn-blue`} onClick={() => navigate('global-reach')}>Global Reach</BigButton>
        <BigButton className={`btn-black`} onClick={() => navigate('key-statistics')}>Key Statistics</BigButton>
        <div className='bg-[url("/Webp/AdobeStock_573681778.webp")] bg-cover bg-center bg-no-repeat rounded-full'>
          <BigButton className={`bg-[#333333]/50 text-white`} onClick={() => navigate('compliance')}>Compliance</BigButton>
        </div>
        <BigButton className={`btn-blue`} onClick={() => navigate('our-history')}>Our History</BigButton>
        <BigButton className={`btn-black`} onClick={() => navigate('our-brands')}>Our Brands</BigButton>
        <div className='bg-[url("/Webp/AdobeStock_573681778.webp")] bg-cover bg-center bg-no-repeat rounded-full'>
          <BigButton className='bg-[#333333]/50 text-white' onClick={() => navigate('our-team')}>Our Team</BigButton>
        </div>
      </div>

      {/* Global Reach */}
      <div id="global-reach">
        <div className='flex flex-col text-center pb-[40px] md:pb-[79px]'>
          <h3 className="font-bold pb-4 text-green">Local Focus</h3>
          <h1 className='text-[#253D84]'>Global Reach</h1>
        </div>
        
        <div className='relative min-h-max'>
          <img className='w-full h-full object-cover rounded-3xl' src="/Webp/WorldMap.webp" alt="" width="100%"/>
        </div>
        
        <div className='grid grid-cols-1 gap-5 pl-[49px]'>
          <div className='flex gap-4'>
            <div className='bg-[#253D84] h-[25px] min-w-[25px] rounded-xl'/>
            <p className='whitespace-nowrap'>Sending Locations</p>
          </div>
          <div className='flex gap-4'>
            <div className='bg-[#D2DEFF] h-[25px] min-w-[25px] rounded-xl'/>
            <p className='whitespace-nowrap'>Sending and Paying Locations</p>
          </div>
          <div className='flex gap-4'>
            <div className='bg-[#52DB78] h-[25px] min-w-[25px] rounded-xl'/>
            <p className='whitespace-nowrap'>Payer Locations</p>
          </div>
        </div>

        <div className='grid grid-cols-2 gap-3'>
          <div className='flex flex-col justify-center text-center bg-[#253D84] text-[#FFFFFF] rounded-2xl h-[113px]'>
            <h1>48</h1>
            <p>States</p>
          </div>
          <div className='flex flex-col justify-center text-center bg-[#253D84] text-[#FFFFFF] rounded-2xl h-[113px]'>
            <h1>586+</h1>
            <p>U.S. Locations</p>
          </div>
          <div className='flex flex-col justify-center text-center bg-[#52DB78] text-[#333333] rounded-2xl h-[113px]'>
            <h1>175,330</h1>
            <p>Pickup Locations</p>
          </div>
          <div className='flex flex-col justify-center text-center bg-[#52DB78] text-[#333333] rounded-2xl h-[113px]'>
            <h1>86</h1>
            <p>Beneficiary Countries</p>
          </div>
        </div>
      </div>

      {/* Key Statistics */}
      <div id="key-statistics">
        <div className='flex flex-col text-center pb-[40px] md:pb-[79px] '>
          <h3 className="font-bold pb-4 text-green">2021</h3>
          <h1 className='text-[#253D84]'>Key Statistics</h1>
        </div>
        <div class="relative">
          {/* Key Statistics - Laptop view */}
          <div class="hidden sm:flex sm:flex-row sm:justify-between sm:items-center sm:bg-[url('/path/to/your/desktop-image.png')] sm:bg-cover">
            <div class="p-4 text-white">37.3M USD</div>
            <div class="p-4 text-white">9.2M USD</div>
            <div class="p-4 text-white">968M USD</div>
          </div>

          {/* Key Statistics - Mobile View*/}
          <div class="flex flex-col gap-3 sm:hidden">
            <div className='relative min-h-max'>
              <img className='w-full h-full object-cover rounded-3xl' src="/Webp/AdobeStock_596371844.webp" alt="" width="100%"/>
            </div>
            <div class="bg-[#333333]/70 rounded-2xl text-white p-4 text-center">
              <div className='font-bold text-[36px]'>37.3M <span className='text-[22px]'>USD</span></div>
              <p>Revenues</p>
            </div>
            <div class="bg-[#333333]/70 rounded-2xl text-white p-4 text-center">
              <div className='font-bold text-[36px]'>9.2M <span className='text-[22px]'>USD</span></div>
              <p>Net revenue after all direct costs</p>
            </div>
            <div class="bg-[#333333]/70 rounded-2xl text-white p-4 text-center">
              <div className='font-bold text-[36px]'>968M <span className='text-[22px]'>USD</span></div>
              <p>Principle moved</p>
            </div>
          </div>
        </div>

        <div>
          <p className='text-[#333333]/25 text-right'>2021 statistics as of 12/31/2021</p>
          <hr/>
          <div>
            <div className='flex flex-row gap-10 justify-around flex-wrap text-center'>
              <div className='max-w-[105px]'>
                <h1>1.9M</h1>
                <p>Transactions</p>
              </div>
              <div className='max-w-[105px]'>
                <h1>48</h1>
                <p>States</p>
              </div>
              <div className='max-w-[105px]'>
                <h1>86</h1>
                <p className='flex flex-wrap'>Beneficiary Countries</p>
              </div>
              <div className='max-w-[105px]'>
                <h1>586</h1>
                <p>Agent Locations</p>
              </div>
              <div className='max-w-[105px]'>
                <h1>6 <span className='text-[24px]'>Years</span></h1>
                <p>of Consistent Profitability</p>
              </div>
            </div>
          </div>
        </div>
         
        <div>
          {isPhilosophy ? (
            <div className="philosophy-display">
              <div className='bg-[#253D84] rounded-2xl h-[579px] px-8 pt-12 pb-8 flex flex-col justify-between'>
                <h3 className='text-[#52DB78]'>Philosophy</h3>
                <h1 className='text-white'>“The engagement of every individual in an organization, regardless of department, is the pre-requisite to ensuring compliance.”</h1>
                <button className='w-[50px] h-[50px] bg-[#FFFFFF] rounded-full self-end' onClick={toggleDisplay} aria-label="Toggle Display">
                  <img src="close-icon.png" alt=""/>
                </button>
              </div>
              
            </div>
          ) : (
            <div className="overview-display">
              <div className='bg-[#253D84] rounded-2xl h-[579px] px-8 pt-12 pb-8 flex flex-col justify-between'>
                <h3 className='text-[#52DB78]'>Overview</h3>
                <ul className='flex flex-col gap-2'>
                  <li className='bg-[#FFFFFF]/40 rounded-2xl text-white p-6'>Over thirty-two years of licensure and regulatory history</li>
                  <li className='bg-[#FFFFFF]/40 rounded-2xl text-white p-6'>23 states have examined our compliance program since 2019 with no actions against our license</li>
                  <li className='bg-[#FFFFFF]/40 rounded-2xl text-white p-6'>Over $10M in surety bonds</li>
                  <li className='bg-[#FFFFFF]/40 rounded-2xl text-white p-6'>Experienced long term compliance personnel</li>
                </ul>
                <button className='w-[50px] h-[50px] bg-[#FFFFFF] rounded-full self-end' onClick={toggleDisplay} aria-label="Toggle Display">
                  <img src="close-icon.png" alt=""/>
                </button>
              </div>
            </div>
          )}
         
        </div>
      </div>

      {/* Compliance */}
      <div id="compliance">
        <div className='grid grid-cols-1'>
          <div className='flex flex-col justify-between text-center border border-[#333333] rounded-2xl h-[498px] py-12'>
            <h3>Staff by department</h3>
            <div className='relative min-h-max'>
              <img className='w-full h-full object-cover rounded-3xl' src="/Webp/WorldMap.webp" alt="" width="100%"/>
            </div>
            <div className='text-[14px] text-[#333333]/65'>Percentages rounded to nearest whole number.</div>
          </div>
          
          <div className='flex flex-col justify-between rounded-2xl h-[498px] px-9 py-12'>
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
      </div>

      {/* Our History */}
      <div id="our-history">
        <div className='bg-[#DEF1FF] border border-gray-300 rounded-3xl h-[447px] px-[31px] pt-[59px] max-w-[975px] mx-auto'>
          <div className='sm:flex sm:flex-row'>
            <div className='sm:flex sm:flex-col'>
              <h3 className='pb-[64px]'>Our History</h3>
              <div className='hidden sm:flex sm:w-[377px] sm:h-[225px]'>
                <div className='rounded-3xl w-full h-full bg-cover bg-no-repeat bg-[center_right_-60px]' style={{backgroundImage: "url('/Webp/AdobeStock_537237474.webp')",  backgroundSize:"175%"}}/>
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

      {/* Our Brands */}
      <div id="our-brands">
        <div className='flex flex-col text-center pb-[40px] md:pb-[79px]'>
          <h3 className="font-bold pb-4 text-green">Identify</h3>
          <h1 className='text-[#253D84]'>Our Brands</h1>
        </div>
        <div className='grid grid-cols-2 justify-center gap-2 sm:gap-6 px-6 lg:px-0 h-[162px] sm:h-[311px] max-w-[960px]'>
          <Link className='flex place-content-center border rounded-2xl w-full' href="https://www.unomoneytransfers.com/">
            <img className='w-[117px] sm:w-[255.6px] px-2 sm:px-4' src="/SVG/UnoBIG.svg" alt="Uno" width="100%"/> 
          </Link>
          <Link className='flex place-content-center border rounded-2xl w-full' href="https://www.giromex.com/">
            <img className='w-[132px] sm:w-[272.7px] px-2 sm:px-4' src="/SVG/GriromexBIG.svg" alt="Giromex" width="100%"/> 
          </Link>
          <Link className='flex place-content-center border rounded-2xl w-full' href="https://www.legoitienle.com/">
            <img className='w-[157px] sm:w-[384.9px] px-2 sm:px-4' src="/SVG/LeGoiBIG.svg" alt="LeGoi" width="100%"/> 
          </Link>
          <Link className='flex place-content-center border rounded-2xl w-full' href="https://www.sharemoney.com/us/en/denmark">
            <img className='w-[149px] sm:w-[353.9px] px-2 sm:px-4' src="/SVG/SharemoneyBIG.svg" alt="Sharemoney"/> 
          </Link>
        </div>
      </div>

      

      {/* Our Team */}
      <div id="our-team">
        <div className='flex flex-col text-center pb-[40px] md:pb-[79px] '>
          <h3 className="font-bold pb-4 text-green">2021</h3>
          <h1 className='text-[#253D84]'>Summary</h1>
        </div>
      
        {teamData.map((team, index) => (
        <div key={index}>
          <div className='w-[339px] cursor-pointer' onClick={() => toggleExpand(team.name)}>
            <div className={`relative rounded-t-3xl w-full ${activeState ? 'h-[339px]' : 'h-[235px]'} bg-cover bg-no-repeat bg-center transition-all duration-300 ease-in-out`}>
              <img className='w-full h-full object-cover rounded-t-3xl' src="/Webp/Darren.webp" alt="" />
              {activeState === team.name && (
                <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center p-[42px] rounded-t-3xl">
                  <div className='text-white space-y-4'>
                    <div>
                      <div className='text-[16px] font-bold'>{team.jobdescription1}</div>
                      <div className='text-[16px]'>{team.joblocation1}</div>
                    </div>
                    <div>
                      <div className='text-[16px] font-bold'>{team.jobdescription2}</div>
                      <div className='text-[16px]'>{team.joblocation2}</div>
                    </div>
                    <div>
                      <div className='text-[16px] font-bold'>{team.jobdescription3}</div>
                      <div className='text-[16px]'>{team.joblocation3}</div>
                    </div>
                  </div>
                </div>
              )}
            </div> 
            <div className={`flex flex-row items-center justify-between pl-[42px] pr-[24px] ${isExpanded ? 'bg-[#253D84]' : 'bg-[#253D84]'} h-[105px] rounded-b-3xl transition-all duration-300 ease-in-out`}>
              <div className='flex flex-col text-white'>
                <div className='text-[24px] font-semibold'>{team.name}</div>
                <div className='text-[18px]'>{team.position}</div>
              </div>
              <div className='flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white'>
                <img className='w-[16px] h-[16px]' src={isExpanded ? "/SVG/BlueClose.svg" : "/SVG/BlueOpen.svg"} alt={isExpanded ? "Close" : "Open"} />
              </div>
            </div>
          </div>
          </div>
        ))}
        

        <div className='w-[339px] cursor-pointer' onClick={toggleExpand}>
          <div className={`relative rounded-t-3xl w-full ${isExpanded ? 'h-[339px]' : 'h-[235px]'} bg-cover bg-no-repeat bg-center transition-all duration-300 ease-in-out`}>
            <img className='w-full h-full object-cover rounded-t-3xl' src="/Webp/Omar.webp" alt="" />
            {isExpanded && (
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center p-[42px] rounded-t-3xl">
                <div className='text-white space-y-4'>
                  <div>
                    <div className='text-[16px] font-bold'>AB Political Science</div>
                    <div className='text-[16px]'>Princeton University</div>
                  </div>
                  <div>
                    <div className='text-[16px] font-bold'>Co-founder and EVP</div>
                    <div className='text-[16px]'>E Commerce Group</div>
                  </div>
                  <div>
                    <div className='text-[16px] font-bold'>SVP, Payments Division</div>
                    <div className='text-[16px]'>Western Union</div>
                  </div>
                </div>
              </div>
            )}
          </div> 
          <div className={`flex flex-row items-center justify-between pl-[42px] pr-[24px] ${isExpanded ? 'bg-[#253D84]' : 'bg-[#253D84]'} h-[105px] rounded-b-3xl transition-all duration-300 ease-in-out`}>
            <div className='flex flex-col text-white'>
              <div className='text-[24px] font-semibold'>Marc Mehl</div>
              <div className='text-[18px]'>Compliance & Committee</div>
            </div>
            <div className='flex items-center justify-center w-[34px] h-[34px] rounded-full bg-white'>
              <img className='w-[16px] h-[16px]' src={isExpanded ? "/SVG/BlueClose.svg" : "/SVG/BlueOpen.svg"} alt={isExpanded ? "Close" : "Open"} />
            </div>
          </div>
        </div>
      </div>
     
    

      {/* Summary */}
      <div id="summary">
        <div className='flex flex-col text-center pb-[40px] md:pb-[79px] '>
          <h3 className="font-bold pb-4 text-green">Who We Are</h3>
          <h1 className='text-[#253D84]'>Our Team</h1>
        </div>
      </div>

     
      
    </main>
  )
}