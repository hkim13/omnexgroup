
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button';


export default function HomePage() {
  return (
    <>
     <div>
      <main className='mt-28 w-auto'>
        
        {/*First section*/}
        <div className='flex justify-between items-center px-10'>
          
          {/* Text Area */}
          <div className='w-fit min-w-[500px]'>
            <h1 className="font-bold pb-3 text-5xl text-[#333333]">
              Financial technology <span className="text-[#52DB78]">empowering</span> <span className="text-[#253D84]">consumers and businesses</span>
            </h1>
            <p className="text-lg text-[#333333]">
              Omnex provides the financial tools to empower businesses and consumers, with a focus on inclusion of the traditionally underserved.
            </p>
            <div className='flex pt-5'>
              <Button className='border-2'>
                <Link href="link">About Us</Link>
              </Button>
              <Button class="btn-green">
                <Link href="link">Send Money</Link> 
              </Button>
            </div>
          </div>
          
          {/* Image Area */}
          <div className='flex gap-4'>

            {/* left two images */} 
            <div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '16px' }}> 
                <div
                    style={{
                    width: '191px',
                    height: '306.23px',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    backgroundImage: 'url("/Webp/AdobeStock_280396247.webp")',
                    backgroundSize: '275%',
                    backgroundPosition: '70%',
                    backgroundRepeat: 'no-repeat',
                    }}
                >
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end' }}> 
                <div
                  style={{
                    width: '284px',
                    height: '179.79px',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    backgroundImage: 'url("/Webp/AdobeStock_409017261.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: '0%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                </div>
              </div>
            </div>  

            {/* right two images */}   
            <div>
              <div style={{ display: 'flex', justifyContent: 'flex-start', paddingBottom: '16px' }}> 
                <div
                  style={{
                    width: '307px',
                    height: '228.88px',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    backgroundImage: 'url("/Webp/B-AdobeStock_235833811.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: '50%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-start' }}> 
                <div
                  style={{
                    width: '408px',
                    height: '257.04px',
                    overflow: 'hidden',
                    borderRadius: '40px',
                    backgroundImage: 'url("/Webp/AdobeStock_469533192.webp")',
                    backgroundSize: 'cover',
                    backgroundPosition: '0%',
                    backgroundRepeat: 'no-repeat',
                  }}
                >
                </div>
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
