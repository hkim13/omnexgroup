import Link from 'next/link'

export default function NavBar() {
    return(
        <nav>
            <ul className='flex flex-wrap justify-between gap-3'>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <div>
                        <button>About Us</button>
                        <ul>
                            <li><Link href="/about-us/corporate-press">Corporate Press</Link></li>
                            <li><Link href="/about-us/our-brands">Our Brands</Link></li>
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
                            <li><Link href="/regulatory/file-a-complaint">File a Complaint</Link></li>
                            <li><Link href="/regulatory/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/regulatory/state-licenses">State Licenses</Link></li>
                        </ul>
                    </div>
                </li>
            </ul>
        </nav>
    );
}