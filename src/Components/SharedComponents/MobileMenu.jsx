import React, { useState } from 'react'
import { IoChevronForwardOutline } from 'react-icons/io5'
import { NavLink } from 'react-router'
const menus = [
    {title: "Home", path: "/"},
    {title: "About Us", path: "/about"},
    {
        title: "Service", path: "/service",
        submenu: [
            {title: "Service", path: "/service"},
            {title: "Service Details", path: "/service"}
        ],
    },
    {
        title: "Portfolio", path: "/portfolio",
        submenu: [
            {title: "Portfolio", path: "/portfolio"},
            {title: "Portfolio Details", path: "/portfolio"}
        ],
    },
    {
        title: "Pages", path: "/",
        submenu: [
            {title: "About Us", path: "/about"},
            {title: "Portfolio", path: "/portfolio"},
            {title: "Services", path: "/service"},
            {title: "Pricing", path: "/pricing"},
            {title: "Faq", path: "/faq"},
            {title: "Team", path: "/team"},
            {title: "Contact", path: "/contact"},
        ],
    },
    {title: "Contact", path: "/contact"},

]
const MobileMenu = () => {
    const [isOpen, setIsOpen] = useState(null)
    const toogleMenu = (index) => {
        setIsOpen(isOpen === index ? null : index)
    }
    return (
        <>
            <div className='max-w-100'>
                <ul className='flex flex-col gap-4'>
                    {
                        menus.map((menu, index) => (
                            <li key={index} className='border-b border-b-[rgba(0,0,0,0.3)] last:border-b-0 pb-3'>
                                {/* MObile Main Menu Here */}
                                {menu.path ? (
                                    <div className='flex items-center justify-between'>
                                        <div>
                                            <NavLink to={menu.path} className={`${isOpen === index ? 'text-secondary' : ''}`}>
                                                {menu.title}
                                            </NavLink>
                                        </div>
                                        {/* Mobile menu Icon Here */}
                                        {menu.submenu && (
                                            <div onClick={() => toogleMenu(index)} className='shrink-0 ml-2'>
                                                <IoChevronForwardOutline 
                                                className={`text-xl  text-heading border border-[rgba(0,0,0,0.3)] hover:text-white hover:border-secondary hover:bg-secondary cursor-pointer transition-transform duration-300 ${isOpen === index ? 'rotate-90 bg-secondary text-white border-secondary' : ''}`}/>
                                            </div>
                                        )}
                                    </div>
                                ) : (
                                    <></>
                                )}
                                {/* Mobile Submenu Here */}
                                {menu.submenu && (
                                    <ul className={`mt-3 ml-4 flex flex-col gap-3 transition-all duration-300 ease-in-out ${isOpen === index ? 'max-h-100 opacity-100 visible' : 'max-h-0 opacity-0 invisible'}`}>
                                        {menu.submenu.map((sub, i) => (
                                            <li key={i} className='border-b border-b-[rgba(0,0,0,0.3)] last:border-b-0 pb-3'>
                                                <NavLink to={sub.path}>
                                                    {sub.title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    )
}

export default MobileMenu