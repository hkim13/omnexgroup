import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white p-8">
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-between">
        {/* Column 1 */}
        <div className="flex flex-col mb-6">
          <h5 className="font-bold uppercase mb-2.5">About Us</h5>
          <Link href="/about"><a className="text-gray-400 hover:text-gray-300 mb-1">Our Brands</a></Link>
          <Link href="/press"><a className="text-gray-400 hover:text-gray-300 mb-1">Corporate Press</a></Link>
          <Link href="/use-cases"><a className="text-gray-400 hover:text-gray-300 mb-1">Use Cases</a></Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col mb-6">
          <h5 className="font-bold uppercase mb-2.5">Our Solutions</h5>
          {/* Add links here */}
        </div>

        {/* Column 3 */}
        <div className="flex flex-col mb-6">
          <h5 className="font-bold uppercase mb-2.5">Careers</h5>
          {/* Add links here */}
        </div>

        {/* Column 4 */}
        <div className="flex flex-col mb-6">
          <h5 className="font-bold uppercase mb-2.5">Send Money</h5>
          <a href="https://sendmoney.com" className="text-gray-400 hover:text-gray-300 mb-1">Visit Sendmoney.com</a>
          <Link href="/app"><a className="text-gray-400 hover:text-gray-300 mb-1">Download our app</a></Link>
          <Link href="/contact"><a className="text-gray-400 hover:text-gray-300 mb-1">Call Us Now</a></Link>
        </div>
      </div>

      <div className="border-t border-gray-700 text-gray-400 mt-8 pt-4 text-center text-sm">
        <p>©2022 Omnex Group, Inc. All rights reserved.</p>
        <p>Omnex Group, Inc. is a licensed money transfer company NMLS No. 899521.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <Link href="/licenses"><a className="hover:text-gray-300">State Licenses</a></Link>
          <Link href="/privacy"><a className="hover:text-gray-300">Privacy Policy</a></Link>
          <Link href="/complaint"><a className="hover:text-gray-300">File a Complaint</a></Link>
        </div>
      </div>
    </footer>
  );
}
