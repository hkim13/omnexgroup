import Link from 'next/link'

export default function NavBar() {
    return(
        <nav className='flex justify-between p-5' width="1000px">
            <div>
                <ul className='flex flex-wrap gap-10'>
                    <li>
                        <Link href="/">
                            <img src="/SVG/OmnexLogo.svg" alt="Omnex Logo" width="150"/>
                        </Link>
                    </li>
                    <li>
                        <div>
                            <button>About Us</button>
                            <ul>
                                <li><Link href="/about-us/our-brands">Our Brands</Link></li>
                                <li><Link href="/about-us/corporate-press">Corporate Press</Link></li>
                                <li><Link href="/about-us/use-cases">Use Cases</Link></li>
                            </ul>
                        </div>
                    </li>
                    <li>
                        <Link href="/our-solutions">Our Solutions</Link>
                    </li>
                    <li>
                        <Link href="/careers">Careers</Link>
                    </li>
                    <li>
                        <div>
                            <button>Regulatory</button>
                            <ul>
                                <li><Link href="/regulatory/state-licenses">State Licenses</Link></li>
                                <li><Link href="/regulatory/privacy-policy">Privacy Policy</Link></li>
                                <li><Link href="/regulatory/file-a-complaint">File a Complaint</Link></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='p'>
                <select className="bg-white text-black px-2 rounded">
                    <option>EN</option>
                    <option>ES</option>
                </select>
                <Link href="link" className=" font-bold bg-green px-7 py-4 rounded-full">Send Money</Link>
            </div>
          
        </nav>
    );
}