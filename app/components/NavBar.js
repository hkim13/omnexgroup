"use client"

import { useState } from 'react';
import Link from 'next/link'
import Button from '@/components/Button';

export default function NavBar() {
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [showRegulatoryDropdown, setShowRegulatoryDropdown] = useState(false);

    return(
        <nav className='pt-4'>
            <div className='flex items-center justify-around'>
                <div>
                    <Link className="md:cursor-pointer h-9" href="/">
                        <img src="/SVG/OmnexLogo.svg" alt="Omnex Logo" width="200"/>
                    </Link>
                </div>
                <ul className='md:flex hidden font-bold items-center gap-10'>
                    <li>
                        <div onMouseEnter={() => setShowAboutDropdown(true)}
                             onMouseLeave={() => setShowAboutDropdown(false)}>
                            <button>About Us</button>
                            {showAboutDropdown && (
                                <ul className="absolute bg-white shadow-md rounded font-normal">
                                    <li><Link href="/about-us/our-brands">Our Brands</Link></li>
                                    <li><Link href="/about-us/corporate-press">Corporate Press</Link></li>
                                    <li><Link href="/about-us/use-cases">Use Cases</Link></li>
                                </ul>
                            )}
                        </div>
                    </li>
                    <li>
                        <Link href="/our-solutions">Our Solutions</Link>
                    </li>
                    <li>
                        <Link href="/careers">Careers</Link>
                    </li>
                    <li>
                        <div onMouseEnter={() => setShowRegulatoryDropdown(true)}
                             onMouseLeave={() => setShowRegulatoryDropdown(false)}>
                            <button>Regulatory</button>
                            {showRegulatoryDropdown && (
                                <ul className="absolute bg-white shadow-md rounded font-normal">
                                    <li><Link href="/regulatory/state-licenses">State Licenses</Link></li>
                                    <li><Link href="/regulatory/privacy-policy">Privacy Policy</Link></li>
                                    <li><Link href="/regulatory/file-a-complaint">File a Complaint</Link></li>
                                </ul>
                            )}
                        </div>
                    </li>
                </ul>
                <div className='flex items-center gap-3'>
                    <select className=" bg-white text-black font-bold">
                        <option>EN</option>
                        <option>ES</option>
                    </select>
                    <Button class="btn-green">
                        <Link href="link">Send Money</Link> 
                    </Button>
                </div>
            </div>
        </nav>
    );
}


/*
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
                <Button className="green-button">
                    <Link href="link">Send Money</Link> 
                </Button>
            </div>
          
        </nav>
*/