import { Link } from 'react-router'
import logo from '../../assets/img/logo/offcanvas-logo.png'
import img_1 from '../../assets/img/offcanvas/showcase-thumb-01.webp'
import img_2 from '../../assets/img/offcanvas/showcase-thumb-02.webp'
import img_3 from '../../assets/img/offcanvas/showcase-thumb-03.webp'
import img_4 from '../../assets/img/offcanvas/showcase-thumb-04.webp'
import { IoClose } from 'react-icons/io5'
import { FaBehance, FaInstagram, FaTwitter } from 'react-icons/fa'
import MobileMenu from './MobileMenu'
const OffCanvas = ({isOpen, setIsOpen}) => {
    const offcanvasImg = [img_1, img_2, img_3, img_4]
    return (
        <>
            <div className={`
                fixed top-0 right-0 h-full w-full overflow-y-auto sm:max-w-100 bg-white z-50 p-7.5
                transform transition-transform duration-300
                ${isOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
                <div className="offcanvas-wrapper">
                    <div className="offcanvas-wrapper">
                        {/* Off Canvas Header */}
                        <div className="flex items-center justify-between">
                            <div className='offcanvas-logo w-[50%]'>
                                <Link><img src={logo} alt="" /></Link>
                            </div>
                            <div onClick={() => setIsOpen(false)} className="offcanvas-close w-[50%] text-end">
                                <button className='text-3xl text-heading cursor-pointer transition-transform duration-300 hover:rotate-90'><IoClose/></button>
                            </div>
                        </div>
                        {/* Mobile Menu Here */}
                        <div className='mt-12'>
                            <MobileMenu />
                        </div>
                        {/* Offcanvas Content */}
                        <div className='mt-15 pr-10 hidden xl:block'>
                            <h2 className='text-5xl text-heading font-heading font-bold'>Hello There!</h2>
                            <p className='mt-5'>Lorem ipsum dolor sit amet, consect etur adipiscing elit.</p>
                        </div>
                        {/* Offcanvas Images Here */}
                        <div className="grid grid-cols-2 sm:grid-cols-4  gap-4 mt-7.5">
                            {offcanvasImg.map((img, index) => (
                                <img key={index} className='sm:w-17.5' src={img} alt={`offcanvas-${index}`} />
                            ))}
                        </div>
                        {/* Offcanvas Information Here */}
                        <div className='mt-10 pr-10'>
                            <h3 className='text-xl sm:text-2xl text-heading font-heading font-semibold'>Information</h3>
                            <div className='flex flex-col gap-3 mt-5 text-heading text-lg sm:text-xl'>
                                <Link className=' hover:text-secondary' to='tel:0123456789'>02 (256) 256 025 </Link>
                                <Link className='hover:text-secondary'k to='mailto:info@exdosstudio.com'>info@exdosstudio.com</Link>
                                <Link className='hover:text-secondary'>3005 Meadowview Drive Gordons, VA 22942</Link>
                            </div>
                        </div>
                        {/* Offcanvas Social Media Here */}
                        <div className='mt-10'>
                            <h3 className='text-xl sm:text-2xl text-heading font-heading font-semibold'>Follow Us</h3>
                            <div className='flex gap-4 mt-5 text-heading text-xl'>
                                <Link className='sm:w-10 sm:h-10 rounded-full shadow border border-[rgba(0,0,0,0.3)] flex items-center justify-center hover:text-white hover:bg-secondary transition-all duration-300'><FaBehance /></Link>
                                <Link className='sm:w-10 sm:h-10 rounded-full shadow border border-[rgba(0,0,0,0.3)] flex items-center justify-center hover:text-white hover:bg-secondary transition-all duration-300'><FaTwitter /></Link>
                                <Link className='sm:w-10 sm:h-10 rounded-full shadow border border-[rgba(0,0,0,0.3)] flex items-center justify-center hover:text-white hover:bg-secondary transition-all duration-300'><FaInstagram /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OffCanvas