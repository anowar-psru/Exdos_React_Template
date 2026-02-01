import { Link } from 'react-router'
import { IoMdPlay } from 'react-icons/io'
import about_img_1 from '../../../../../assets/img/about/about-h1-1.jpg'
import about_img_2 from '../../../../../assets/img/about/about-h1-2.jpg'
import shape_1 from '../../../../../assets/img/about/about-shape-h1-1.png'
import shape_2 from '../../../../../assets/img/about/about-shape-h1-2.png'
import PrimaryBtn from '../../../../../Components/SharedComponents/CustomBtn'

const HomeAbout = () => {
    return (
        <>
            <section className='pt-20 lg:pt-32 pb-60 relative before:absolute before:left-0 before:right-0 before:top-0 before:bottom-0 before:bg-[#FFFBF4] before:-z-30 overflow-hidden'>
                <div className="container">
                    <div className='flex flex-col-reverse lg:flex-row gap-7.5 lg:gap-17.5'>
                        {/* About Section Left Part */}
                        <div className='w-full lg:w-[50%]'>
                            <img className='rounded-[20px] w-full' src= {about_img_1} alt="" />
                            <div className='xl:pl-28 lg:pl-15 pt-10 lg:pt-25'>
                                <div className='flex items-center gap-5'>
                                    <div className='w-20 h-20 border border-paragraph rounded-full flex items-center justify-center cursor-pointer hover:bg-secondary group'>
                                        <IoMdPlay className='text-2xl text-heading group-hover:text-white' />
                                    </div>
                                    <div>
                                        <p className='text-3xl leading-10'>Intro video</p>
                                    </div>
                                </div>
                                <h2 className='text-[42px] leading-13 sm:text-6xl text-heading font-heading sm:leading-20 font-bold pt-6'>Enjoy the power of your marketing and communication</h2>
                            </div>
                        </div>
                        {/* About Section Right Part */}
                        <div className='w-full lg:w-[50%]'>
                            <div className=''>
                                <h2 className='text-[42px] leading-13 sm:text-6xl text-heading font-heading sm:leading-20 font-bold pb-6'>Let us building the bridge between brand and customer</h2>
                                <p>Per ipsum ultrices sollicitudin iaculis platea facilisi Semper aliquam up taciti <strong>senectus cursus</strong> vivamus volutpat nibh. Penatibus fringilla porttitor do magna purus massa per <strong>duis dapibus</strong> scelerisque etiam</p>
                            {/* Banner BTN Here */}
                                <Link className='about-btn mt-7.5 mb-17.5 inline-block'>
                                    <PrimaryBtn text={"About More"} />
                                </Link>
                            </div>
                            <img className='rounded-[20px] w-full' src= {about_img_2} alt="" />
                        </div>
                    </div>
                </div>
                {/* About Section Shape Here */}
                <div>
                    <img className='absolute left-15 top-112 -z-10 hidden xl:block' src={shape_1} alt="" />
                    <img className='absolute -right-10 top-0 -z-10 hidden md:block' src={shape_2} alt="" />
                </div>
            </section>
        </>
    )
}

export default HomeAbout