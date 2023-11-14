import Link from 'next/link'
import GreenButton from './GreenButton';

export default function NavBar() {
    return(
        <nav className='flex justify-between p-5'>
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
            <div>
                <select className=" bg-white text-black">
                    <option>EN</option>
                    <option>ES</option>
                </select>
                <GreenButton>
                    <Link href="link">Send Money</Link> 
                </GreenButton>
            </div>
          
        </nav>
    );
}