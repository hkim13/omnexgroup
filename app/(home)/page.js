
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
        <div className='flex flex-col-reverse max-w-max lg:flex-row lg:justify-between items-center px-2'>
          
          {/* Text Area */}
          <div className='flex-1 min-w-0 
          '>
            <h1 className="font-bold pb-3 text-5xl text-[#333333]">
              Financial technology <span className="text-[#52DB78]">empowering</span> <span className="text-[#253D84]">consumers and businesses</span>
            </h1>
            <p className="text-lg text-[#333333]">
              Omnex provides the financial tools to empower businesses and consumers, with a focus on inclusion of the traditionally underserved.
            </p>
            <div className='flex pt-5'>
              <Button>
                <Link href="link">About Us</Link>
              </Button>
              <Button className="btn-green">
                <Link href="link">Send Money</Link> 
              </Button>
            </div>
          </div>
        
       
          {/* Image Area */}
          <div>
            <div className='flex gap-4 pb-14'>
              <div className='flex flex-col items-end'>
                <div className='w-36 h-56 lg:w-48 lg:h-72 shrink rounded-[48px] bg-cover bg-no-repeat bg-[center_right_-5rem]' style={{backgroundImage: "url('/Webp/AdobeStock_280396247.webp')"}}/>
                <div className='w-52 h-32 lg:w-72 lg:h-44 shrink rounded-[48px] bg-cover bg-left mt-4' style={{backgroundImage: "url('/Webp/AdobeStock_409017261.webp')"}}/>
              </div>
              
              <div className='flex flex-col items-start'>
                <div className='w-40 h-40 lg:w-72 lg:h-56 shrink rounded-[48px] bg-cover bg-no-repeat bg-center' style={{backgroundImage: "url('/Webp/B-AdobeStock_235833811.webp')"}}/>
                <div className='w-40 h-48 lg:w-96 lg:h-60 shrink rounded-[48px] bg-cover bg-center bg-size-mt-4' style={{backgroundImage: "url('/Webp/AdobeStock_469533192.webp')"}}/>
              </div>
            </div>
            

          </div>
            
        </div>

        {/*Second section: Explore - What We Do for You*/}

      </main>
     </div>
    
    </>
  )
}
