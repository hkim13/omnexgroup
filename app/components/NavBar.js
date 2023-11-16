"use client"

import { useState } from 'react';
import Link from 'next/link'
import Button from '@/components/Button';
import '@/globals.css'

export default function NavBar() {
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [showRegulatoryDropdown, setShowRegulatoryDropdown] = useState(false);

    return(
        <nav className='p-4 pt-4'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-14'>
                    
                    {/* OmnexGroup logo */}
                    <div>
                        <Link className="md:cursor-pointer h-9" href="/">
                            <img src="/SVG/OmnexLogo.svg" alt="Omnex Logo" width="200"/>
                        </Link>
                    </div>

                    {/* About Us, Our Solutions, Careers, Regulatory */}
                    <ul className='lg:flex hidden font-bold items-center gap-14'>
                        <li>
                            <div className="min-w-max" 
                                onMouseEnter={() => setShowAboutDropdown(true)}
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
                            <div className="min-w-max">
                                <Link href="/our-solutions">Our Solutions</Link>
                            </div>
                        </li>
                        <li>
                            <Link href="/careers">Careers</Link>
                        </li>
                        <li>
                            <div  
                                onMouseEnter={() => setShowRegulatoryDropdown(true)}
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
                </div>

                {/* EN, Send Money */}                    
                <div className='hidden lg:flex lg:flex-1 lg:justify-end gap-3'>
                    <select className=" bg-white text-black font-bold">
                        <option>EN</option>
                        <option>ES</option>
                    </select>
                    <div className="min-w-max">
                        <Button className="btn-green">
                            <Link href="link">Send Money</Link> 
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    );
}
