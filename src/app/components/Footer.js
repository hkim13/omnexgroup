import Link from 'next/link';

export default function Footer() {
  return (
    <footer className=" text-white w-screen">
      {/* mobile version */}
      <div className='bg-[#333333] text-base sm:hidden'>
        {/* About us, Our solutions, Careers */}
        <div className='flex flex-row justify-between mx-auto py-[40px] px-[34px]'>
          {/* About us */}
          <div className='flex flex-col gap-2'>
            <Link href="/about-us/our-brands" className="text-[#FFFFFF] font-bold hover:text-gray-300 mb-1">About Us</Link>
            <Link href="/about-us/our-brands" className="text-gray-400 hover:text-gray-300 mb-1">Our Brands</Link>
            <Link href="/about-us/corporate-press" className="text-gray-400 hover:text-gray-300 mb-1">Corporate Press</Link>
            <Link href="/about-us/use-cases" className="text-gray-400 hover:text-gray-300 mb-1">Use Cases</Link>
          </div>
          {/* Our solutions, Careers */}
          <div className='flex flex-col gap-8'>
            {/* Our solutions*/}
            <div>
              <Link href="/our-solutions" className="font-bold text-base mb-2.5">Our Solutions</Link>
            </div>
            {/* Careers */}
            <div>
              <Link href="/careers" className="font-bold text-base mb-2.5">Careers</Link>
            </div>
          </div>
        </div>
        <hr className='mx-7'/>
        
        <div className='flex flex-col gap-2 mx-auto py-[40px] px-[34px]'>
            <Link href="https://sharemoney.com" className="text-green font-bold hover:text-gray-300 mb-1">Send Money</Link>
            <Link href="https://sharemoney.com" className="text-gray-400 hover:text-gray-300 mb-1">Visit Sendmoney.com</Link>
            <Link href="https://apps.apple.com/us/app/sharemoney-money-transfers/id1176560273" className="text-gray-400 hover:text-gray-300 mb-1">Download our app</Link>
            <Link href="/contact-us" className="text-gray-400 hover:text-gray-300 mb-1">Contact Us</Link>
        </div>
      </div>

      {/* desktop version */}
      <div className='bg-[#333333] text-base hidden sm:block'>
        <div className='flex justify-between mx-auto max-w-[730px] py-16 px-[34px]'>
          <div className='flex flex-col gap-2'>
            <Link href="/about-us/our-brands" className="text-[#FFFFFF] font-bold hover:text-gray-300 mb-1">About Us</Link>
            <Link href="/about-us/our-brands" className="text-gray-400 hover:text-gray-300 mb-1">Our Brands</Link>
            <Link href="/about-us/corporate-press" className="text-gray-400 hover:text-gray-300 mb-1">Corporate Press</Link>
            <Link href="/about-us/use-cases" className="text-gray-400 hover:text-gray-300 mb-1">Use Cases</Link>
          </div>
          {/* Our solutions*/}
          <div className='flex flex-col gap-2'>
            <Link href="/our-solutions" className="font-bold text-[#FFFFFF] hover:text-gray-300 mb-2.5">Our Solutions</Link>
          </div>
          {/* Careers */}
          <div className='flex flex-col gap-2'>
            <Link href="/careers" className="font-bold text-[#FFFFFF] hover:text-gray-300 mb-2.5">Careers</Link>
          </div>
          <div className='flex flex-col gap-2'>
            <Link href="https://sharemoney.com" className="text-green font-bold hover:text-gray-300 mb-1">Send Money</Link>
            <Link href="https://sharemoney.com" className="text-gray-400 hover:text-gray-300 mb-1">Visit Sharemoney.com</Link>
            <Link href="https://apps.apple.com/us/app/sharemoney-money-transfers/id1176560273" className="text-gray-400 hover:text-gray-300 mb-1">Download our app</Link>
            <Link href="/contact-us" className="text-gray-400 hover:text-gray-300 mb-1">Contact Us</Link>
          </div>
        </div>
      </div>

      
      <div className='flex flex-col pt-[33px] pb-[39px] gap-[39px] items-center mx-auto'>
        <div className='text-[#333333] text-xs font-bold text-center px-14 max-w-[528px]'>©2023 Omnex Group Inc. All rights reserved. Omnex Group, Inc. a licensed money transfer company NMLS No. 899521.</div>
        <div className='flex flex-row text-xs justify-between w-screen max-w-[635px] px-7'>
          <div>
            <Link href="/regulatory/state-licenses" className="text-gray-400 hover:text-black">State Licenses</Link>
          </div>
          <div>
            <Link href="/regulatory/privacy-policy" className="text-gray-400 hover:text-black">Privacy Policy</Link>
          </div>
          <div>
            <Link href="/user-agreement" className="text-gray-400 hover:text-black">User Agreement</Link>
          </div>
          <div>
            <Link href="/regulatory/file-a-complaint" className="text-gray-400 hover:text-black">File a Complaint</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}