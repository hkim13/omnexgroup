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
        <div className=' flex flex-col-reverse lg:flex-row lg:justify-between items-center w-full pb-10 sm:pb-24'>
          
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
                <Link href="link">About Us</Link>
              </Button>
              <Button className="btn-green">
                <Link href="link">Send Money</Link> 
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
        <div className=''>
          {/* Title */}
          <div className=' text-center pb-xsm sm:pb-sm'>
            <h3 className=' pb-2'>Explore</h3>
            <h1>What We Do for You</h1>
          </div>

          {/* Image cards */}
          <div className='flex flex-col gap-y-4 '>
            {/* Image card 1 */}
            <div className='border rounded-3xl flex flex-col gap-y-4'>
              <div className='rounded-t-3xl w-full h-60 bg-cover bg-no-repeat bg-[center_right_-100px]' style={{backgroundImage: "url('/Webp/AdobeStock_259671750.webp')",  backgroundSize:"175%"}}/>
              <div className='flex flex-col gap-y-8 p-4'>
                <div className='text-start'>
                  <h2>For Consumers</h2>
                  <p>Send money to your friends and family anytime, anywhere through our app, our website, or at one of our retail locations.</p>
                </div>
                <div className='flex flex-col gap-y-4 text-start text-[#253D84] font-bold'>
                  <Link className='flex gap-3' href="link">Visit Sharemoney.com <img className='w-4' src='/SVG/GreenArrow.svg'/></Link>
                  <Link className='flex gap-3' href="link">Download our App <img className='w-4' src='/SVG/GreenArrow.svg'/></Link>
                  <Link className='flex gap-3' href="link">Call Us Now <img className='w-4' src='/SVG/GreenArrow.svg'/></Link>
                </div>
              </div>
            </div>
            {/* Image card 2 */}
            <div className='border rounded-3xl flex flex-col gap-y-4'>
              <div className='rounded-t-3xl w-full h-60 bg-cover bg-no-repeat bg-[center_right_-75px]' style={{backgroundImage: "url('/Webp/AdobeStock_263742652.webp')",  backgroundSize:"130%"}}/>
              <div className='flex flex-col gap-y-8 p-4'>
                <div className='text-start'>
                  <h2>For Businesses</h2>
                  <p>We enable businesses to integrate our remittance services into their systems, providing easy global access to agents, banks, and correspondents.</p>
                </div>
                <div className='flex flex-col gap-y-4 text-start text-[#253D84] font-bold'>
                  <Link className='flex gap-3' href="link">Explore our Solutions <img className='w-4' src='/SVG/GreenArrow.svg'/></Link>
                  <Link className='flex gap-3' href="link">Careers <img className='w-4' src='/SVG/GreenArrow.svg'/></Link>
                </div>
              </div>
            </div>
          </div>


        </div>

      </main>
     </div>
    
    </>
  )
}
