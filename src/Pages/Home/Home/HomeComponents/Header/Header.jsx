import { Link, NavLink } from 'react-router'
import header_logo from '../../../../../assets/img/logo/header-logo.png'
import menubar_icon from '../../../../../assets/img/header/menu-h1.svg'
import phonebook_icon from '../../../../../assets/img/header/phone-book-h1.svg'
import { BsArrowDownLeft } from 'react-icons/bs'
import { IoSearch } from 'react-icons/io5'
import OffCanvas from '../../../../../Components/SharedComponents/OffCanvas'
import { useEffect, useState } from 'react'
const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    const [isSticky, setIsSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },)
    return (
        <>
            <header className={`bg-heading border-b fixed z-50 w-full border-b-[rgba(255,255,255,0.15)] ${isSticky ? 'bg-heading shadow' : ''}`}>
                <nav className='flex items-center justify-between'>
                    <div className='flex items-center'>
                        {/* Header logo here */}
                        <div className=' sm:pl-10 2xl:pl-25'>
                            <Link to="/"><img src={header_logo} alt="" /></Link>
                        </div>
                        {/* Main Menu Here */}
                        <div className='main-menu xl:pl-15 2xl:pl-15 3xl:pl-45 hidden xl:block'>
                            <ul className='flex items-center xl:gap-6 2xl:gap-10'>
                                <li className='group'>
                                    <NavLink className={({isActive}) => isActive ? `text-primary` : `text-white`} to="/">Home <BsArrowDownLeft className='header-arrow' /></NavLink>
                                </li>
                                <li className='group'>
                                    <NavLink className={({isActive}) => isActive ? `text-primary` : `text-white`} to="/about">About Us <BsArrowDownLeft className='header-arrow' /></NavLink>
                                </li>
                                <li className='group'>
                                    <NavLink className={({isActive}) => isActive ? `text-primary` : `text-white`} to="/service">Service <BsArrowDownLeft className='header-arrow' /></NavLink>
                                    {/* Service Dropdown Menu Here */}
                                    <div className="dropdown-menu">
                                        <NavLink to="/service">Services</NavLink>
                                        <NavLink to="/service-details">Service Details</NavLink>
                                    </div>
                                </li>
                                <li className='group'>
                                    <NavLink className={({isActive}) => isActive ? `text-primary` : `text-white`} to="/portfolio">Portfolio <BsArrowDownLeft className='header-arrow' /></NavLink>
                                    {/* Portfolio Dropdown Menu Here */}
                                    <div className="dropdown-menu">
                                        <NavLink to="/portfolio">Portfolio</NavLink>
                                        <NavLink to="/portfolio">Portfolio Details</NavLink>
                                    </div>
                                </li>
                                <li className='group'>
                                    <NavLink className="text-white">Pages <BsArrowDownLeft className='header-arrow' /></NavLink>
                                    {/* Pages Dropdown Menu Here */}
                                    <div className="dropdown-menu">
                                        <NavLink to="/about">About</NavLink>
                                        <NavLink to="/portfolio">Portfolio</NavLink>
                                        <NavLink to="/service">Services</NavLink>
                                        <NavLink to="/pricing">Pricing</NavLink>
                                        <NavLink to="/faq">Faq</NavLink>
                                        <NavLink to="/team">Team</NavLink>
                                        <NavLink to="/contact">Contact</NavLink>
                                    </div>
                                </li>
                                <li className='group'>
                                    <NavLink className={({isActive}) => isActive ? `text-primary` : `text-white`} to="/blog">Blog <BsArrowDownLeft className='header-arrow' /></NavLink>
                                    {/* Blog Dropdown Menu Here */}
                                    <div className="dropdown-menu">
                                        <NavLink to="/blog">Blog</NavLink>
                                        <NavLink to="/blog">Blog Details</NavLink>
                                    </div>
                                </li>
                                <li className='group'>
                                    <NavLink className={({isActive}) => isActive ? `text-primary` : `text-white`} to="/contact">Contact <BsArrowDownLeft className='header-arrow' /></NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Header Right Part Here */}
                    <div className='flex items-center'>
                        {/* Header Search bar here */}
                        <div className='border-r h-full py-9.25 pr-7.5 xl:pr-5 2xl:pr-7.5 hidden md:block'>
                            <span className='cursor-pointer'><IoSearch className='text-white text-2xl hover:text-primary' /></span>
                        </div>
                        {/* Header Call to Action Here */}
                        <div className='items-center ml-7.5 mr-7.5 xl:ml-5 2xl:ml-7.5 hidden md:flex'>
                            <div>
                                <img src={phonebook_icon} alt="" />
                            </div>
                            <div className='flex flex-col ml-3.75'>
                                <span className='text-[#B1B4BA] text-[15px]'>Free Call</span>
                                <Link to="tel:123456789" className='text-lg text-white font-medium '>02 (256) 256 025 </Link>
                            </div>
                        </div>
                        {/* Header Menu Bar Here */}
                        <div 
                        onClick={() => setIsOpen(true)}
                        className='bg-[#23252D] py-9 px-6 cursor-pointer xl:ml-5 2xl:ml-12.5'>
                            <img src={menubar_icon} alt="" />
                        </div>
                    </div>
                </nav>
            </header>
            {/* OffCanvas Here */}
            <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
            {/* Overlay Here */}
            {isOpen && (
                <div onClick={() => setIsOpen(false)}
                className='fixed inset-0 bg-black/80 z-40'></div>
            )}
        </>
    )
}

export default Header
