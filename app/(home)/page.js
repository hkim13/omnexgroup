
import Image from 'next/image'
import Link from 'next/link'
import LinkBar from '@/components/LinkBar'
import NavBar from '@/components/NavBar';
import Button from '@/components/Button';


export default function HomePage() {
  return (
    <>
     <div>
      <main className='mt-28 w-full'>
        
        {/*First section*/}
        <div className=' flex justify-between items-center px-10'>
          <div>
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
          <div className='flex items-center'>
            <ul className='grid grid-cols-2 gap-3 '>
              <li class="place-self-end">
                <Image className='border-8 overflow-hidden rounded-3xl' 
                src="/Webp/AdobeStock_280396247.webp"
                alt=""
                width={500}
                height={500}
                />
              </li>
              <li>
                <Image className='border-8  rounded-3xl'
                src="/Webp/B-AdobeStock_235833811.webp"
                alt=""
                width={500}
                height={500}
                />
              </li>
              <li>
                <Image className='border-8 overflow-hidden rounded-3xl'
                src="/Webp/AdobeStock_409017261.webp"
                alt=""
                width={500}
                height={500}
                />
              </li>
              <li>
                <Image className='overflow-hidden rounded-3xl'
                src="/Webp/AdobeStock_469533192.webp"
                alt=""
                width={500}
                height={500}
                />
              </li>
            </ul>
          </div>
        </div>

        {/*Second section: Explore - What We Do for You*/}

      </main>
     </div>
    
    </>
  )
}
