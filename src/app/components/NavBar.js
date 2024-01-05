"use client"

import { useState } from 'react';
import Link from 'next/link'
import Button from '@/components/Button';
import '@/globals.css'

export default function NavBar() {
    const [showAboutDropdown, setShowAboutDropdown] = useState(false);
    const [showRegulatoryDropdown, setShowRegulatoryDropdown] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return(
        <nav className='relative px-6 sm:py-7 pt-6'>
            <div className='flex items-center justify-between'>
                <div className='flex gap-14'>
                    
                    {/* OmnexGroup logo */}
                    <div>
                        <Link className="md:cursor-pointer h-9" href="/">
                            <img className='w-[167.5px]' src="/SVG/OmnexLogo.svg" alt="Omnex Logo" width="200"/>
                        </Link>
                    </div>

                    {/* About Us, Our Solutions, Careers, Regulatory */}
                    <ul className='hidden lg:flex text-[15px] font-bold items-center gap-14'>
                        <li>
                            <div className="min-w-max" 
                                onMouseEnter={() => setShowAboutDropdown(true)}
                                onMouseLeave={() => setShowAboutDropdown(false)}>
                                <Link href="/about-us/our-brands">About Us</Link>
                                {showAboutDropdown && (
                                    <ul className="absolute bg-white shadow-md rounded-2xl font-normal border p-4 space-y-2">
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
                                <Link href="/regulatory/state-licenses">Regulatory</Link>
                                {showRegulatoryDropdown && (
                                    <ul className="absolute bg-white shadow-md rounded-2xl font-normal border p-4 space-y-2">
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
                            <Link href="https://www.sharemoney.com/us/en/denmark">Send Money</Link> 
                        </Button>
                    </div>
                </div>

                {/* Mobile Menu */}                            
                <div className='lg:hidden' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <img className='w-[21px] cursor-pointer' src="/SVG/MobileMenu.svg" alt="Menu"/>
                </div>
                 {/* Mobile Menu Contents */}
                 {isMobileMenuOpen && (
                <div className='absolute bg-white w-full left-0 top-full z-10 shadow-md rounded-b-lg lg:hidden'>
                    <ul className='text-[15px] font-bold'>
                        {/* Map through all your nav items */}
                        <li className="p-4 border-gray-300" onClick={closeMobileMenu}>
                            <Link href="/about-us/our-brands">About Us</Link>
                        </li>
                        <div className='flex flex-col gap-2'>
                            <li className="px-8  border-gray-300" onClick={closeMobileMenu}>
                                <Link href="/about-us/our-brands">Our Brands</Link>
                            </li>
                            <li className="px-8  border-gray-300" onClick={closeMobileMenu}>
                                <Link href="/about-us/corporate-press">Corporate Press</Link>
                            </li>
                            <li className="px-8 pb-4 border-b border-gray-300" onClick={closeMobileMenu}>
                                <Link href="/about-us/use-cases">Use Cases</Link>
                            </li>
                        </div>
                      
                        <li className="p-4 border-b border-gray-300" onClick={closeMobileMenu}>
                            <Link href="/our-solutions">Our Solutions</Link>
                        </li>
                        <li className="p-4 border-b border-gray-300" onClick={closeMobileMenu}>
                            <Link href="/careers">Careers</Link>
                        </li>
                        <li className="p-4  border-gray-300" onClick={closeMobileMenu}>
                            <Link href="/regulatory/state-licenses">Regulatory</Link>
                        </li>
                        <div className='flex flex-col gap-2'>
                            <li className="px-8  border-gray-300" onClick={closeMobileMenu}>
                                <Link href="/regulatory/state-licenses">State Licenses</Link>
                            </li>
                            <li className="px-8  border-gray-300" onClick={closeMobileMenu}>
                                <Link href="/regulatory/privacy-policy">Privacy Policy</Link>
                            </li>
                            <li className="px-8 pb-4 border-b border-gray-300" onClick={closeMobileMenu}>
                                <Link href="/regulatory/file-a-complaint">File a Complaint</Link>
                            </li>
                        </div>
                     
                    </ul>
                    <div className='flex flex-row justify-between items-center p-4'>
                        <div onClick={closeMobileMenu}>
                            <Button className="btn-green w-full">
                                <Link href="https://www.sharemoney.com/us/en/denmark">Send Money</Link> 
                            </Button>
                        </div>
                        <div>
                            <select className="w-full bg-white text-black font-bold" onChange={closeMobileMenu}>
                                <option>EN</option>
                                <option>ES</option>
                            </select>
                        </div>
                    </div>
                   
                    
                </div>
                )}
            </div>

            
        </nav>
    );
}
