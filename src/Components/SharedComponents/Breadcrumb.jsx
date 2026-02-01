import breadcumb_bg from '../../assets/img/breadcumb/breadcumb-bg.png'
import shape_img_1 from '../../assets/img/breadcumb/shape-h1-5.png'
import shape_img_2 from '../../assets/img/breadcumb/shape-h1-4.png'
const Breadcrumb = ({heading, subHeading}) => {
    return (
        <>
            <section className='relative' style={{backgroundImage: `url(${breadcumb_bg})`}}>
                <div className="container">
                    <div className="breadcum-content flex flex-col justify-center items-center py-25 sm:py-35">
                        <h1 className='text-4xl sm:text-[70px] text-white font-heading leading-22 uppercase'>{heading}</h1>
                        <div className='flex items-center ml-33 sm:ml-61 mt-5'>
                            <h2 className='text-xl text-primary font-medium leading-7 relative before:absolute  before:w-15 sm:before:w-20 before:h-px before:bg-[rgba(255,255,255,0.3)] before:-left-25 before:top-3.5 '>Home</h2>
                            <span className='text-white text-xl font-medium mx-1'>-</span>
                            <p className='text-xl text-white font-medium leading-7'> {subHeading} </p>
                        </div>
                    </div>
                </div>
                <div className='hidden sm:block'>
                    <img className='absolute left-[10%] top-[50%] translate-y-[-50%]' src={shape_img_1} alt="" />
                    <img className='absolute right-[10%] top-[50%] translate-y-[-50%]' src={shape_img_2} alt="" />
                </div>
            </section>
        </>
    )
}

export default Breadcrumb