import { FaBehance, FaInstagram, FaTwitter } from 'react-icons/fa'
import footer_logo from '../../../../../assets/img/footer/footer-logo-h1-1.png'
import footer_shape_1 from '../../../../../assets/img/footer/footer-shape-h1-1.png'
import footer_shape_2 from '../../../../../assets/img/footer/footer-shape-h1-2.png'
import footer_shape_3 from '../../../../../assets/img/footer/footer-shape-h1-3.png'
import footer_shape_4 from '../../../../../assets/img/footer/footer-shape-h1-4.png'
import { Link } from 'react-router'

const Footer = () => {
    return (
        <>
            <section className='pt-15 lg:pt-32 relative before:absolute before:left-0 before:bottom-0 before:right-0 before:top-0 before:bg-heading before:-z-40'>
                <div className="container">
                    {/* Footer Logo and social here */}
                    <div className='grid grid-cols-12 items-center justify-between mb-12.5 relative'>
                        {/* shape Here */}
                        <div className='absolute left-[42%] -top-5 hidden lg:block'>
                            <img src= {footer_shape_2} alt="" />
                        </div>
                        {/* Footer Logo Here */}
                        <div className='col-span-6 md:col-span-3'>
                            <img src={footer_logo} alt="" />
                        </div>
                        <div className='md:col-span-6 md:flex items-center ml-20 xl:ml-0 hidden '>
                            <span className='w-full h-px bg-[rgba(255,255,255,0.15)] inline-block'></span>
                        </div>
                        {/* Footer Social Here */}
                        <div className='col-span-6 md:col-span-3 flex items-center justify-end xl:justify-center gap-3'>
                            <FaBehance className='text-2xl text-white' />
                            <FaTwitter className='text-2xl text-white' />
                            <FaInstagram className='text-2xl text-white' />
                        </div>
                    </div>








                    {/* Footer Information Here */}
                    <div className='grid grid-cols-1 md:grid-cols-12 pb-20'>
                        {/* Footer Shape */}
                        <div className='xl:col-span-3 xl:flex xl:items-center ml-5 hidden'>
                            <img src={footer_shape_1} alt="" />
                        </div>
                        {/* Footer Address Here */} 
                        <div className='md:col-span-4 xl:col-span-2'>
                            {/* Address 1 */}
                            <div>
                                <h3 className='text-white text-xl font-heading leading-7.5 mb-4'>California</h3>
                                <p className='text-[#B1B4BA]'>3005 Meadowview Drive <br /> Gordons, VA 22942</p>
                            </div>
                            {/* Address 2 */}
                            <div className='mt-10'>
                                <h3 className='text-white text-xl font-heading leading-7.5 mb-4'>Los Angels</h3>
                                <p className='text-[#B1B4BA]'>3587 Limer Street Dalton <br /> Palmar 30720</p>
                            </div>
                        </div>

                        {/* footer line */}
                        <div className='col-span-1 hidden md:block'>
                            <span className='w-px h-full bg-[rgba(255,255,255,0.15)] inline-block'></span>
                        </div>

                        {/* Footer Navbar Here */}
                        <div className='md:col-span-2'>
                            <h3 className='text-white text-xl font-heading leading-7.5 mb-4 mt-10 md:mt-0'>Quick Links</h3>
                            <div className='flex flex-col'>
                                <Link className='text-[#B1B4BA] leading-8 hover:text-primary transition-all duration-300 ease-in-out' to="/about">About us</Link>
                                <Link className='text-[#B1B4BA] leading-8 hover:text-primary transition-all duration-300 ease-in-out' to="/service">Services</Link>
                                <Link className='text-[#B1B4BA] leading-8 hover:text-primary transition-all duration-300 ease-in-out' to="/team">Meet the team</Link>
                                <Link className='text-[#B1B4BA] leading-8 hover:text-primary transition-all duration-300 ease-in-out' to="/blog">Recent news</Link>
                                <Link className='text-[#B1B4BA] leading-8 hover:text-primary transition-all duration-300 ease-in-out' to="/portfolio">Our gallery</Link>
                                <Link className='text-[#B1B4BA] leading-8 hover:text-primary transition-all duration-300 ease-in-out' to="/portfolio">Case studies</Link>
                            </div>
                        </div>

                        {/* Divider Here */}
                        <div className='col-span-1 hidden md:block'>
                            <span className='w-px h-full bg-[rgba(255,255,255,0.15)] inline-block'></span>
                        </div>

                        {/* Footer Email and phone no Here */}
                        <div className='md:col-span-4 xl:col-span-3 mt-10 md:mt-0'>
                            <h3 className='text-white text-xl font-heading leading-7.5 mb-4'>Contact Info</h3>
                            {/* Email Here */}
                            <div>
                                <p className='text-[#B1B4BA] mb-1'>Email us</p>
                                <Link className='sm:text-2xl lg:text-3xl text-white font-heading leading-10' to="mailto:info@exdosstudion.com">info@exdosstudion.com</Link>
                            </div>
                            {/*Footer Phone No Here */}
                            <div className='mt-5'>
                                <p className='text-[#B1B4BA] mb-1'>Phone no</p>
                                <Link className='sm:text-2xl md:text-3xl text-white font-heading leading-10' to="tel:123456789">2 (520) 6320 32</Link>
                            </div>
                        </div>
                    </div>
                    




                    
                    
                    {/* Footer Copyright Here */}
                    <div className='flex flex-col lg:flex-row lg:items-center gap-7 justify-between border-t border-t-[rgba(255,255,255,0.15)] py-10'>
                        <div><p className='text-[#B1B4BA]'>© Copyright 2023 | Alright reserved <br /> exdos by <Link className='text-primary font-medium'>anowar.me</Link></p></div>
                        <div className='flex flex-col sm:flex-row gap-2 sm:gap-5'>
                            <Link to="/portfolio" className='text-[#B1B4BA] uppercase sm:border-r sm:border-b-[#B1B4BA] pr-5 hover:text-primary transition-all duration-300 ease-in-out'>Career</Link>
                            <Link to="/faq" className='text-[#B1B4BA] uppercase sm:border-r sm:border-b-[#B1B4BA] pr-5 hover:text-primary transition-all duration-300 ease-in-out'>our faq</Link>
                            <Link to="/faq" className='text-[#B1B4BA] uppercase sm:border-r sm:border-b-[#B1B4BA] pr-5 hover:text-primary transition-all duration-300 ease-in-out'>pricacy & policy</Link>
                            <Link to="/faq" className='text-[#B1B4BA] uppercase hover:text-primary transition-all duration-300 ease-in-out'>contact</Link>
                        </div>
                    </div>
                </div>
                {/* Footer Shape Here */}
                <div className='hidden lg:block'>
                    <img className='absolute top-15.5 right-25 -z-10' src={footer_shape_3} alt="" />
                    <img className='absolute bottom-11.25 right-54 -z-10' src={footer_shape_4} alt="" />
                </div>
            </section>
        </>
    )
}

export default Footer
