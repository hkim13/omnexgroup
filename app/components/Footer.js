import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#333333] text-white">
      <div className="w-screen flex flex-wrap justify-between p-10">
        
        {/* About us */}
        
        <div className="flex flex-col mb-6">
          <h5 className="font-bold text-base mb-2.5">About Us</h5>
          <Link href="/about" className="text-gray-400 hover:text-gray-300 mb-1">Our Brands</Link>
          <Link href="/press" className="text-gray-400 hover:text-gray-300 mb-1">Corporate Press</Link>
          <Link href="/use-cases" className="text-gray-400 hover:text-gray-300 mb-1">Use Cases</Link>
        </div>

        {/* Column 2 */}
        
        <div className="flex flex-col mb-6">
          <h5 className="font-bold text-base mb-2.5">Our Solutions</h5>
          {/* Add links here */}
        </div>

        {/* Column 3 */}
        
        <div className="flex flex-col mb-6">
          <h5 className="font-bold text-base mb-2.5">Careers</h5>
          {/* Add links here */}
        </div>

        {/* Column 4 */}
        
        <div className="flex flex-col mb-6">
          <h5 className="font-bold text-base text-green mb-2.5">Send Money</h5>
          <a href="https://sendmoney.com" className="text-gray-400 hover:text-gray-300 mb-1">Visit Sendmoney.com</a>
          <Link href="/app" className="text-gray-400 hover:text-gray-300 mb-1">Download our app</Link>
          <Link href="/contact" className="text-gray-400 hover:text-gray-300 mb-1">Call Us Now</Link>
        </div>
      
      </div>

      <div className="border-t border-gray-600">
        <div className="bg-white text-gray-400 text-center text-sm py-4">
          <div className="w-screen px-4 lg:px-8">
            <p>©2022 Omnex Group, Inc. All rights reserved.</p>
            <p>Omnex Group, Inc. is a licensed money transfer company NMLS No. 899521.</p>
            <div className="flex justify-center space-x-4 mt-2">
              <Link href="/licenses" className="hover:text-black">State Licenses</Link>
              <Link href="/privacy" className="hover:text-black">Privacy Policy</Link>
              <Link href="/complaint" className="hover:text-black">File a Complaint</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
