import Image from 'next/image'
import LinkBar from './components/LinkBar'
import NavBar from './components/NavBar';

export default function HomePage() {
  return (
    <>
     <div className='relative'>
      <div className='absolute pb-5'>
          <LinkBar />
      </div>
      <main>
        <div>
          <h1 className="font-bold pb-3 text-5xl text-[#333333]">
            Financial technology <span className="text-[#52DB78]">empowering</span> <span className="text-[#253D84]">consumers and businesses</span>
          </h1>
          <p className="text-lg text-[#333333]">
            Omnex provides the financial tools to empower businesses and consumers, with a focus on inclusion of the traditionally underserved.
          </p>
        </div>
      </main>
     </div>
    
    </>
  )
}
