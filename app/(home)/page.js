import '@/globals.css'

import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button';
import Images1 from '@/components/Images1';


export default function HomePage() {
  return (
    <>
     <div>
      <main className='mt-0 lg:mt-14 mx-auto w-auto max-w-max'>
        
        {/*First section*/}
        <div className=' flex flex-col-reverse lg:flex-row lg:justify-between items-center w-full pb-8 sm:pb-24'>
          
          {/* Text Area */}
          <div className=' flex-1'>
            <h1 className="font-bold pb-3 text-[#333333]">
              Financial technology <span className="text-[#52DB78]">empowering</span> <span className="text-[#253D84]">consumers and businesses</span>
            </h1>
            <p className="text-[#333333]">
              Omnex provides the financial tools to empower businesses and consumers, with a focus on inclusion of the traditionally underserved.
            </p>
            <div className='flex justify-center sm:justify-start gap-4 pt-5'>
              <Button className="btn">
                <Link href="/about-us/our-brands">About Us</Link>
              </Button>
              <Button className="btn-green">
                <Link href="https://www.sharemoney.com/us/en/denmark">Send Money</Link> 
              </Button>
            </div>
          </div>
       
          {/* Image Area */}
          <div className='flex self-end  lg:self-center gap-4 pb-14'>
            <div className='flex flex-col items-end'>
              <div className='w-36 h-56 sm:w-40 sm:h-60 lg:w-44 lg:h-64 xl:w-48 xl:h-72 shrink rounded-[48px] bg-cover bg-no-repeat bg-[center_right_-60px]' style={{backgroundImage: "url('/Webp/AdobeStock_280396247.webp')"}}/>
              <div className='w-52 h-32 sm:w-60 sm:h-36 lg:w-64 lg:h-40 xl:w-72 xl:h-44 shrink rounded-[48px] bg-cover bg-no-repeat bg-left mt-4' style={{backgroundImage: "url('/Webp/AdobeStock_409017261.webp')"}}/>
            </div>
            <div className='flex flex-col items-start'>
              <div className='w-40 h-40 sm:w-60 sm:h-48 lg:w-64 lg:h-52 xl:w-72 xl:h-56 shrink rounded-[48px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: "url('/Webp/B-AdobeStock_235833811.webp')"}}/>
              <div className='w-40 h-48 sm:w-72 sm:h-52 lg:w-80 lg:h-56 xl:w-96 xl:h-60 shrink rounded-[48px] bg-cover bg-no-repeat bg-center mt-4' style={{backgroundImage: "url('/Webp/AdobeStock_469533192.webp')"}}/>
            </div>
          </div> 

        </div>

        {/*Second section: Explore - What We Do for You*/}
        <div className='pb-10 sm:pb-24'>
          {/* Title */}
          <div className='text-center pb-xsm sm:pb-sm'>
            <h3 className='text-green pb-2'>Explore</h3>
            <h1>What We Do for You</h1>
          </div>

          {/* Image cards */}
          <div className='grid justify-center sm:grid-cols-2 gap-4 '>
            {/* Image card 1 */}
            <div className='border sm:place-self-end rounded-3xl flex auto flex-col max-w-[460px] h-[615px] gap-y-4'>
              <div className='rounded-t-3xl w-full h-60 bg-cover bg-no-repeat bg-[center_right_-100px]' style={{backgroundImage: "url('/Webp/AdobeStock_259671750.webp')",  backgroundSize:"175%"}}/>
              <div className='flex flex-col gap-y-8 px-7 py-4'>
                <div className='text-start'>
                  <h2>For Consumers</h2>
                  <p>Send money to your friends and family anytime, anywhere through our app, our website, or at one of our retail locations.</p>
                </div>
                <div className='flex flex-col gap-y-4 text-start text-[#253D84] font-bold'>
                  <Link className='flex gap-3' href="https://www.sharemoney.com/us/en/denmark">Visit Sharemoney.com <img className='w-4' src='/SVG/GreenArrow.svg'/></Link>
                  <Link className='flex gap-3' href="link">Download our App <img className='w-4' src='/SVG/GreenArrow.svg'/></Link>
                  <Link className='flex gap-3' href="link">Call Us Now <img className='w-4' src='/SVG/GreenArrow.svg'/></Link>
                </div>
              </div>
            </div>
            {/* Image card 2 */}
            <div className='border sm:place-self-start rounded-3xl flex flex-col max-w-[460px] h-[615px] gap-y-4'>
              <div className='rounded-t-3xl w-full h-60 bg-cover bg-no-repeat bg-[center_right_-75px]' style={{backgroundImage: "url('/Webp/AdobeStock_263742652.webp')",  backgroundSize:"130%"}}/>
              <div className='flex flex-col gap-y-8 px-7 py-4'>
                <div className='text-start'>
                  <h2>For Businesses</h2>
                  <p>We enable businesses to integrate our remittance services into their systems, providing easy global access to agents, banks, and correspondents.</p>
                </div>
                <div className='flex flex-col gap-y-4 text-start text-[#253D84] font-bold'>
                  <Link className='flex gap-3' href="/our-solutions">Explore our Solutions <img className='w-4' src='/SVG/GreenArrow.svg'/></Link>
                  <Link className='flex gap-3' href="link">Careers <img className='w-4' src='/SVG/GreenArrow.svg'/></Link>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/*Third section: Our Brands*/}
        <div className='pb-10 sm:pb-24'>
          {/* Title */}
          <div className='text-center pb-xsm sm:pb-sm'>
            <h1>Our Brands</h1>
          </div>

          {/* grid logos & Download our Sharemoney App */}
          <div className='flex flex-col items-center gap-y-6 sm:gap-y-10'>
            {/* grid logos */}
            <div className='grid grid-rows-2 grid-cols-2 gap-2 sm:gap-4 md:gap-6 lg:gap-8'>
              <Link className='flex place-content-center border rounded-2xl sm:rounded-3xl p-4 min-w-[150px] min-h-[75px] max-w-[463px] max-h-[140px]' href="https://www.unomoneytransfers.com/">
                <img className='w-[100%] sm sm:w-[75%]' src="/SVG/UnoBIG.svg" alt="Uno" width="100%"/> 
              </Link>
              <Link className='flex place-content-center border rounded-2xl sm:rounded-3xl p-4 min-w-[150px] min-h-[75px] max-w-[463px] max-h-[140px]' href="https://www.giromex.com/">
                <img className='w-[100%] sm:w-[75%]' src="/SVG/GriromexBIG.svg" alt="Giromex" width="100%"/> 
              </Link>
              <Link className='flex place-content-center border rounded-2xl sm:rounded-3xl p-4 min-w-[150px] min-h-[75px] max-w-[463px] max-h-[140px]' href="https://www.legoitienle.com/">
                <img className='w-[100%] sm:w-[95%]' src="/SVG/LeGoiBIG.svg" alt="LeGoi" width="100%"/> 
              </Link>
              <Link className='flex place-content-center border rounded-2xl sm:rounded-3xl p-4 min-w-[150px] min-h-[75px] max-w-[463px] max-h-[140px]' href="https://www.sharemoney.com/us/en/denmark">
                <img className='w-[100%] sm:w-[95%]' src="/SVG/SharemoneyBIG.svg" alt="Sharemoney"/> 
              </Link>
            </div>

            {/* Download our Sharemoney App */}
            <div className='bg-[#F7F7F7] rounded-3xl min-w-[330px] min-h-[300px] max-w-[960px] max-h-[500px] px-7 sm:px-12 py-8 sm:py-14'>
              <div className='flex'>  {/* I dont tihnk i have to do grids. I think all you need to do is just use flex and set a min-w-max for the two links after sizebreak or set a min-w for */}
                {/* Text + Links */}
                <div className=' flex flex-col max-w-[66.67%] gap-4'>
                  {/* Text */}
                  <div className='pb-6'>
                    <h2 className='text-[#0066CC] text-xl sm:text-[46px] sm:leading-[50px] font-bold pb-4'>Download our Sharemoney App</h2>
                    <p className='text-xs sm:text-lg max-w-[300px]'>Download our app to transfer money anytime and anywhere.</p>
                  </div>
                  {/* Links */}
                  <div className='flex flex-col sm:flex-row gap-2 sm:gap-6'>
                    <Link className=' ' href="link">
                      <img className='w-[125.64px] sm:w-[187.2px]' src="/SVG/AppStore.svg" alt="" width="100%"/> 
                    </Link>
                    <Link className=' ' href="link">
                      <img className='w-[125.64px] sm:w-[187.2px]' src="/SVG/GooglePlay.svg" alt="" width="100%"/> 
                    </Link>
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <div className='sm:hidden'>
                    <img className='w-[140px]' src="/SVG/Phone.svg" alt="Phone" />
                  </div>
                  <div className='hidden sm:block'>
                    <img className='w-3/4' src="/SVG/Phone-Desktop.svg" alt="Phone" />
                  </div>
                </div>
              </div>
            </div>
          </div>
            

        </div>

        {/*Fourth section: Discover: Why Choose Us*/}
        <div className='pb-10 sm:pb-24'>
          {/* Title */}
          <div className='flex flex-col text-center pb-xsm sm:pb-sm'>
            <h3 className='text-green pb-2'>Discover</h3>
            <h1 className='pb-12'>Why Choose Us</h1>
            <p className='place-self-center max-w-[726px]'>We helped consumers successfully send over twenty billion dollars home. With a team of service professionals standing by to ensure your satisfaction every step of the way!</p>
          </div>

          {/* Three icons */}
          <div className='mx-auto grid sm:grid-cols-3 gap-4 max-w-[964px]'>
            {/* icon1 */}
            <div className='flex sm:flex-col-reverse sm:text-center items-center sm:place-content-between border rounded-xl p-7 gap-8 sm:max-w-[305px]'>
              <img className='w-[96px] sm:w-[179.42px]' src="/Webp/Webpage-Illustrations-HELP.webp" alt="" width="100%"/>
              <p className='text-[#253D84] font-bold text-base sm:text-[22px]'>Helped consumers successfully send over twenty billion home</p>
            </div>
            
            {/* icon2 */}
            <div className='flex sm:flex-col-reverse sm:text-center items-center sm:place-content-between border rounded-xl p-7 gap-8 sm:max-w-[305px]'>
              <img className='w-[96px] sm:w-[179.42px]' src="/Webp/Webpage-Illustrations-MULTILINGUAL.webp" alt="" width="100%"/>
              <p className='text-[#253D84] font-bold text-base sm:text-[22px]'>A team of multi-lingual service professionals standing by</p>
            </div>
            
            {/* icon3 */}
            <div className='flex sm:flex-col-reverse sm:text-center items-center sm:place-content-between border rounded-xl p-7 gap-8 sm:max-w-[305px]'>
              <img className='w-[96px] sm:w-[179.42px]' src="/Webp/Webpage-Illustrations-AWARD.webp" alt="" width="100%"/>
              <p className='text-[#253D84] font-bold text-base sm:text-[22px]'>Awarded fastest transfer by the Finder Money Transfer Awards</p>
            </div>
          </div>

       

        </div>
        
        {/*Fifth section: Support: We Are Here for You*/}
        <div className='pb-10 sm:pb-24'>
          {/* Title */}
          <div className='text-center pb-xsm sm:pb-sm'>
            <h3 className='text-green pb-2'>Support</h3>
            <h1>We Are Here for You</h1>
          </div>

          {/* Two icons */}
          <div className='grid justify-center mx-auto sm:grid-cols-2 gap-4 max-w-[964px]'>
            
            {/* icon1 */}
            <div className='border bg-[#253D84] rounded-3xl h-[518px] sm:h-[617px] p-7 sm:p-12 flex flex-col justify-between'>
              <div>
                <h1 className='text-green pb-4'>Global Reach</h1>
                <p className='text-[#FFFFFF] max-w-[356px]'>You can count on our company&apos;s growth, driven by our customers&apos; loyalty and trust.</p>
              </div>
              {/* This div is now a flex container that will justify its children with space between */}
              <div className='flex flex-col justify-evenly flex-grow pl-4'>
                <div className='flex flex-row gap-6'>
                  <img className='w-[32.3px]' src="/SVG/GreenLocationPoint.svg" alt="" width="100%"/>
                  <div className='flex flex-col'>
                    <p className='text-green text-3xl font-bold'>586+</p>
                    <p className='text-[#FFFFFF] text-2xl leading-none'>U.S. Locations</p>
                  </div>
                </div>
                <div className='flex flex-row gap-6'>
                  <img className='w-[32.3px]' src="/SVG/GreenWorldmap.svg" alt="" width="100%"/>
                  <div className='flex flex-col'>
                    <p className='text-green text-3xl font-bold'>83</p>
                    <p className='text-[#FFFFFF] text-2xl leading-none'>Countries</p>
                  </div>
                </div>
                <div className='flex flex-row gap-6'>
                  <img className='w-[32.3px]' src="/SVG/GreenDollar.svg" alt="" width="100%"/>
                  <div className='flex flex-col'>
                    <p className='text-green text-3xl font-bold'>20 Billions</p>
                    <p className='text-[#FFFFFF] text-2xl leading-none'>USD Transfer</p>
                  </div>
                </div>
              </div>
            </div>

            {/* icon2 */}
            <div>
              <div className='border bg-[#333333] rounded-3xl h-[337px] sm:h-[617px] p-7 sm:p-12 flex flex-col justify-between min-w-[320px]'>
                <div>
                  <h1 className='text-green pb-4'>Get Support</h1>
                  <p className='text-[#FFFFFF] max-w-[356px] sm:hidden'>If you need assistance or have any questions, you can easily reach us for support through our various contact channels.</p>
                </div>
                <div className='relative hidden sm:flex justify-center mx-auto max-w-min'>
                  <div className='sm:w-[207px] sm:h-[207px] md:w-[247px] md:h-[247px] lg:w-[297px] lg:h-[297px] rounded-full bg-cover bg-no-repeat bg-center' style={{backgroundImage: "url('/Webp/AdobeStock_279786268.webp')"}}/>
                  <div className='absolute sm:w-[80px] sm:h-[80px] md:w-[95px] md:h-[95px] lg:w-[122px] lg:h-[122px] rounded-full bg-cover bg-no-repeat bg-center bg-green' style={{backgroundImage: "url('/SVG/24-Worldmap.svg')", backgroundSize:"70%", top: '10%', right: '10%', transform: 'translate(50%, -50%)'}}/>
                </div>
                <Button className="btn-green max-w-min">
                  <Link href="link">Contact our Support Team</Link>
                </Button>
              </div>
            </div>
          </div>
        

        </div>

      </main>
     </div>
    
    </>
  )
}
/*
<div className='bg-gray-300 w-[364px] h-[364px] flex hidden sm:block pt-10 '>
                    <div className='self-end w-[297px] h-[297px] rounded-full bg-cover bg-no-repeat bg-center' style={{backgroundImage: "url('/Webp/AdobeStock_279786268.webp')"}}/>
                    <div className='self-start w-[122px] h-[122px] rounded-full bg-cover bg-no-repeat bg-center bg-green' style={{backgroundImage: "url('/SVG/24-Worldmap.svg')",  backgroundSize:"70%"}}/>
                  </div> */