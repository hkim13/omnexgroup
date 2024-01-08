"use client"

import Image from 'next/image'
import BigButton from '@/components/BigButton';
import Link from 'next/link'
import { useState } from 'react';
import brandsData from '@/(inner)/about-us/our-brands/brands';
import teamData from '@/(inner)/about-us/our-brands/team';


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

  const currentBrand = brandsData.find(brand => brand.id === activeAccordion) || {};

  return (
    <main className='max-w-[975px] mx-auto px-6 pt-[50px] md:pt-[70px] pb-[36px] md:pb-[68px]'>
      {/* Heading + Selections */}
      <div className='flex flex-col pb-16 min-[900px]:flex-row min-[900px]:justify-between min-[900px]:gap-2'>
        <div className='pb-14 min-[900px]:self-center'>
          <h1 className='pb-9 text-[36px] sm:text-[46px] max-w-[216px] md:max-w-[273px]'>Discover our Brands</h1>
          <div className='flex flex-col gap-2'>
          <div className='flex text-[16px] gap-3 sm:text-[18px]' href="link">
            <Image width={16} height={16} src='/SVG/BlackTick.svg' alt='Better Value'/>
            Better Value
          </div>
          <div className='flex text-[16px] gap-3 sm:text-[18px]' href="link">
            <Image width={16} height={16} src='/SVG/BlackTick.svg' alt='Constant Support'/>
            Constant Support
          </div>
          <div className='flex text-[16px] gap-3 sm:text-[18px]' href="link">
            <Image width={16} height={16} src='/SVG/BlackTick.svg' alt='Maximum Security'/>
            Maximum Security
          </div>
          </div>
        </div>

        <div className='flex flex-col mx-auto gap-4 sm:flex-row'>
          {activeAccordion === 'uno' && (
            <div className='bg-[#006DB7] rounded-3xl h-[420px] flex flex-col px-12 pt-[58px] pb-[32px] text-white justify-between sm:max-w-[326px]'>
              <h3 className='text-[20px]'>From the US to Central and South America, Asia, Africa and the Dominican Republic.</h3>
              <p className='font-normal'>Send money securely to three continents with our fast and reliable service.</p>
               <Image className='place-self-start' src="/SVG/UnoSMALLwhite.svg" alt="Uno" width={132} height={51} />
            </div>
          )}
          {activeAccordion === 'legoi' && (
            <div className='bg-[#5FA82C] rounded-3xl h-[420px] flex flex-col px-12 pt-[58px] pb-[32px] text-white justify-between sm:max-w-[326px]'>
              <h3 className='text-[24px]'>From the United States and Canada to Vietnam.</h3>
              <p className='font-normal'>With our secure and fast service, sending money to Vietnam has never been easier.</p>
              <Image className='place-self-start' src="/SVG/LeGoiSMALLwhite.svg" alt="Le Goi Tien Le" width={272} height={51}/>
          </div>
          )}
          {activeAccordion === 'giromex' && (
            <div className='bg-[#E20613] rounded-3xl h-[420px] flex flex-col px-12 pt-[58px] pb-[32px] text-white justify-between sm:max-w-[326px]'>
              <h3>From the US to Mexico</h3>
              <p className='font-normal'>Experience hassle-free money transfers to Mexico with our secure and lightning-fast service.</p>
              <Image className='place-self-start' src="/SVG/GiromexSMALLwhite.svg" alt="" width={184} height={51}/>
            </div>
          )}
          {activeAccordion === 'sharemoney' && (
            <div className='bg-[#0066CC] rounded-3xl h-[420px] flex flex-col px-12 pt-[58px] pb-[32px] text-white justify-between sm:max-w-[326px]'>
              <h3>Connecting the US with the world</h3>
              <p className='font-normal'>Send money worldwide securely and quickly with our digital service accessible via website and app.</p>
              <Image className='h-[51px] place-self-start' src="/SVG/SharemoneySMALLwhite.svg" alt="" width={240} height={51}/>
          </div>
          )}
         
         {activeAccordion !== 'uno' && (
            <button className="btn-uno font-bold text-[22px] px-8 py-4 rounded-full sm:hidden" onClick={() => handleAccordion('uno')}>
                <Image src="/SVG/UnoSMALLwhite.svg" alt="Uno" width={85} height={33}/>
            </button>
          )}
          {activeAccordion !== 'uno' && (
            <button className="hidden sm:flex w-[100px] min-w-[80px] h-[420px] rounded-3xl" onClick={() => handleAccordion('uno')}>
                <Image className='w-full h-full rounded-3xl' src="/Webp/Uno.webp" alt="Uno" width={100} height={402}/>
            </button>
          )}

          {activeAccordion !== 'legoi' && (
            <button className="btn-legoi font-bold text-[22px] px-8 py-4 rounded-full sm:hidden" onClick={() => handleAccordion('legoi')}>
                <Image className='h-[33px]' src="/SVG/LeGoiSMALLwhite.svg" alt="Le Goi Tien Le" width={177} height={33}/>
            </button>
          )}
          {activeAccordion !== 'legoi' && (
            <button className="hidden sm:flex w-[100px] min-w-[80px] h-[420px] rounded-3xl" onClick={() => handleAccordion('legoi')}>
                <Image className='w-full h-full rounded-3xl' src="/Webp/LeGoiTienLe.webp" alt="Le Goi Tien Le" width={100} height={402}/>
            </button>
          )}
         
         {activeAccordion !== 'giromex' && (
            <button className="btn-giromex font-bold text-[22px] px-8 py-4 rounded-full sm:hidden" onClick={() => handleAccordion('giromex')}>
                <Image className='h-[33px]' src="/SVG/GiromexSMALLwhite.svg" alt="Giromex" width={119} height={33}/>
            </button>
          )}
          {activeAccordion !== 'giromex' && (
            <button className="hidden sm:flex w-[100px] min-w-[80px] h-[420px] rounded-3xl" onClick={() => handleAccordion('giromex')}>
                <Image className='w-full h-full rounded-3xl' src="/Webp/Giromex.webp" alt="Giromex" width={100} height={402}/>
            </button>
          )}

          {activeAccordion !== 'sharemoney' && (
            <button className="btn-sharemoney font-bold text-[22px] px-8 py-4 rounded-full sm:hidden" onClick={() => handleAccordion('sharemoney')}>
                <Image className='h-[33px]' src="/SVG/SharemoneySMALLwhite.svg" alt="Sharemoney" width={153} height={33}/>
            </button>
          )}
          {activeAccordion !== 'sharemoney' && (
            <button className="hidden sm:flex w-[100px] min-w-[80px] h-[420px] rounded-3xl" onClick={() => handleAccordion('sharemoney')}>
                <Image className='w-full h-full rounded-3xl' src="/Webp/Sharemoney.webp" alt="Sharemoney" width={100} height={402}/>
            </button>
          )}
          
        </div>
      </div> 
    
      {/* text */}
      <div className='flex justfy-center text-center pb-16 lg:pb-[85px]  sm:max-w-[564px] mx-auto'>
        <h3>Trust Uno, as a leading brand for money transfers to Brazil and the rest of South America, to provide unmatched service and reliability.</h3> 
      </div>

      {/* About Us */}
      <div className='flex flex-col gap-5 lg:flex-row-reverse mb-5'>
          <div className='w-full h-[237px] md:h-[325px] lg:h-[402px]'>
            <div className='rounded-3xl w-full h-full bg-cover bg-no-repeat bg-center lg:bg-[center_right_-80px]' style={{backgroundImage: `url('${currentBrand.aboutUsUrl}')`}}/>
          </div>
        <div className='bg-[#333333]/5 flex flex-col gap-[30px] rounded-3xl px-[34px] lg:pl-[64px] lg:pr-[55px] pt-[50px] pb-[50px] lg:max-w-[609px] lg:h-[402px]'>
          <h3 className='text-[#253D84]'>About Us</h3>
          <p className='leading-8 text-[16px]'>{currentBrand.aboutUs}</p>
        </div>
      </div>

      {/* Our History */}
      <div className='flex flex-col justify-between rounded-3xl h-[447px] px-[31px] py-[59px]' style={{ backgroundColor: currentBrand.historyColor}}>
        <h3 className='hidden md:flex text-[#253D84]'>Our History</h3>
        <div className=' md:grid md:grid-cols-2'>
          <div className='sm:flex sm:flex-col'>
            <h3 className='pb-[64px] md:hidden text-[#253D84]'>Our History</h3>
            <div className='hidden sm:flex md:max-w-[377px] md:h-[225px]'>
              <div className='rounded-3xl w-full h-full bg-cover bg-no-repeat' style={{backgroundImage: `url('${currentBrand.historyUrl}')`,  backgroundSize: currentBrand.size,   backgroundPosition: currentBrand.position}}/>
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
     
       
     

      {/* Leadership */}
      <div className='pt-[44px] pb-[54px] sm:max-w-[975px] mx-auto'>
        <div className='pb-[50px] px-[30px] flex flex-col gap-4'>
          <h3 className='text-[#253D84]'>Leadership</h3>
          <p>Our global team is committed to providing financial tools and technology to businesses and consumers, with a focus on empowering those who have been traditionally excluded, such as minorities, women-owned businesses and non-Western entities.</p>
        </div>
        <div className=' grid gap-3 sm:grid-cols-2'>
          {teamData.map((team, index) => (
            <div key={index}>
              <div className='flex flex-row items-center gap-6 border rounded-3xl px-6 h-[136px]'>
                <Image  src={`${team.url}`} alt="" width={100} height={90}/>
                <div className='flex flex-col'>
                  <div className='text-[#253D84] text-[18px] font-bold'>{team.name}</div>
                  <div className='text-[16px]'>{team.location}</div>
                </div>
              </div>
            </div>
          ))}
          <Link href="/careers">
            <div className='flex flex-row items-center gap-6 border rounded-3xl px-6 h-[136px]'>
              <div className='bg-[#253D84] w-[100px] h-[90px] rounded-[7px] flex justify-center items-center'>
                <Image  src="/SVG/Plus.svg" alt="" width={30} height={30}/>
              </div>
              <div className='flex flex-col'>
                <div className='text-[#253D84] text-[18px] font-bold'>Join our Team</div>
                <div className='text-[16px]'>Check our positions and work with us!</div>
              </div>
            </div>
          </Link>
        </div>
          
      </div>

      {/* Our Goals */}
      <div className='flex flex-col justify-center gap-11 md:gap-0 rounded-3xl px-[30px] py-[68px]' style={{ backgroundColor: currentBrand.goalsColor }}>
        <div>
          <h1 className='text-white'>Our Goals</h1>
        </div>
        <div className='grid gap-2 md:grid-cols-3 md:grid-rows-3'>
          <div className='flex items-center bg-white text-[18px] md:text-[24px] font-bold px-[47px] md:px-[25px] py-[18px] rounded-3xl md:col-start-1 md:row-start-3' style={{ color: currentBrand.goalsColor }}>Better exchange rates</div>
          <div className='flex items-center bg-white/25 text-[#FFFFFF] text-[16px] md:text-[20px] px-[47px] md:px-[25px] py-[20px] rounded-3xl md:col-start-2 md:row-start-3'>Building and sustaining the trust of our customers</div>
          <div className='flex items-center bg-white/25 text-[#FFFFFF] text-[16px] md:text-[20px] px-[47px] md:px-[25px] py-[20px] rounded-3xl md:col-start-2 md:row-start-2'>Building complementary financial services</div>
          <div className='flex items-center bg-white/25 text-[#FFFFFF] text-[16px] md:text-[20px] px-[47px] md:px-[25px] py-[20px] rounded-3xl md:col-start-3 md:row-start-3'>Increasinge the speed of money transfers</div>
          <div className='flex items-center bg-white/25 text-[#FFFFFF] text-[16px] md:text-[20px] px-[47px] md:px-[25px] py-[20px] rounded-3xl md:col-start-3 md:row-start-2'>Consumer Convenience and ease of use</div>
          <div className='flex items-center bg-white/25 text-[#FFFFFF] text-[16px] md:text-[20px] px-[47px] md:px-[25px] py-[20px] rounded-3xl md:col-start-3 md:row-start-1'>Providing services to everyone who needs it!</div>
        </div>
      </div>
    </main>
  )
}