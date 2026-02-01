import about_img from '../../../assets/img/about/about_page_img.png'
import about_icon_1 from '../../../assets/img/about/icon-1.png'
import about_icon_2 from '../../../assets/img/about/icon-2.png'
import { Link } from 'react-router'
import CustomBtn from '../../../Components/SharedComponents/CustomBtn'
const AboutInfo = () => {
    return (
        <>
            <section className='py-20 lg:py-30'>
                <div className="container">
                    <div className='flex flex-col lg:flex-row'>
                        {/* About information left side img here */}
                        <div className='w-full lg:w-[50%]'><img className='rounded-[20px]' src={about_img} alt="" /></div>
                        {/* About information right text here */}
                        <div className='w-full lg:w-[50%] lg:ml-10 2xl:pl-20 pt-10 lg:pt-0'>
                            <h2 className='text-[42px] leading-13 sm:text-6xl text-heading font-heading sm:leading-20 font-bold pb-6'>Let us building the bridge between brand and customer</h2>
                            <p>Per ipsum ultrices sollicitudin iaculis platea facilisi Semper aliquam up taciti <strong>senectus cursus</strong> vivamus volutpat nibh. Penatibus fringilla porttitor do magna purus massa per <strong>duis dapibus</strong> scelerisque etiam</p>
                            {/* About Info Points Here */}
                            <div className='flex flex-col gap-10'>
                                {/* On time delivery info here */}
                                <div className='flex gap-6 mt-7.5'>
                                    <div className='w-[15%]'><img src={about_icon_1} alt="" /></div>
                                    <div className='w-[85%]'>
                                        <h3 className='text-3xl text-heading leading-10 font-heading mb-3'>On time delivery</h3>
                                        <p>Eratela natoque aenea ullamcorper full egestas congue condimentum disel sapien cubilia</p>
                                    </div>
                                </div>
                                {/* Dedicated member info here */}
                                <div className='flex gap-6'>
                                    <div className='w-[15%]'><img src={about_icon_2} alt="" /></div>
                                    <div className='w-[85%]'>
                                        <h3 className='text-3xl text-heading leading-10 font-heading mb-3'>Dedicated member</h3>
                                        <p>Eratela natoque aenea ullamcorper full egestas congue condimentum disel sapien cubilia</p>
                                    </div>
                                </div>
                                {/* About info btn */}
                                <div>
                                    <Link to="/service" className='about-btn'>
                                        <CustomBtn text={"Our Services"} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutInfo