import { Link } from 'react-router'
import banner_bg from '../../../../../assets/img/banner/banner_bg.png'
import shape_1 from '../../../../../assets/img/banner/shape-h1-1.png'
import shape_2 from '../../../../../assets/img/banner/shape-h1-2.png'
import shape_3 from '../../../../../assets/img/banner/shape-h1-3.png'
import shape_4 from '../../../../../assets/img/banner/shape-h1-4.png'
import shape_5 from '../../../../../assets/img/banner/shape-h1-5.png'
import PrimaryBtn from '../../../../../Components/SharedComponents/CustomBtn'

const Banner = () => {
    return (
        <>
            <section className='pt-40 pb-20 md:py-45 bg-cover inset-0 bg-center z-0 relative' style={{backgroundImage: `url(${banner_bg})`}}>
                {/* Left Border Line */}
                <div className="absolute top-0 left-25 w-px h-full bg-[rgba(255,255,255,0.15)] z-20 hidden xl:block"></div>
                <div className="container">
                    <div className='relative z-30 lg:pl-20'>
                        {/* Banner Text Here */}
                        <h1 className='banner-text'>Best Digital</h1>
                        <h1 className='banner-text heading-text'>creative agency</h1>
                        <div className='flex items-end gap-5 sm:gap-12.5'>
                            <h2 className='banner-subtext'>brilliant ideas <br /> for your brand</h2>
                            <h1 className='banner-text'>from canada</h1>
                        </div>
                        {/* Banner BTN Here */}
                        <Link to="/" className='banner-btn mt-12.5 inline-block'>
                            <PrimaryBtn text={"Discover More"} />
                        </Link>
                    </div>
                </div>
                {/* Banner Shape Here */}
                <div className='absolute inset-0 z-10 pointer-events-none hidden sm:block'>
                    <img className='absolute -left-20 translate-y-[-50%] top-[50%] hidden xl:block' src={shape_1} alt="" />
                    <img className='absolute left-[10%] translate-y-[-50%] top-[50%] xl:left-96.5 hidden lg:block' src={shape_2} alt="" />
                    <img className='absolute xl:top-46 xl:left-271.25 hidden md:block left-[35%] lg:left-[50%] top-[12%]' src={shape_3} alt="" />
                    <img className='absolute right-[10%] top-[10%] xl:top-28 xl:right-48' src={shape_4} alt="" />
                    <img className='absolute right-0 bottom-0 xl:bottom-35 xl:right-77' src={shape_5} alt="" />
                </div>
            </section>
        </>
    )
}

export default Banner