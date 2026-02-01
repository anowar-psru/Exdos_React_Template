import feedback_img_1 from '../../../../../assets/img/feedback/feedback-h1-1.png'
import feedback_img_2 from '../../../../../assets/img/feedback/feedback-h1-2.png'
import feedback_img_3 from '../../../../../assets/img/feedback/quote-icon.png'
import left_arrow from '../../../../../assets/img/feedback/left-arrow.png'
import right_arrow from '../../../../../assets/img/feedback/right-arrow.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
// PrvArrow Function Here
function PrevArrow ({onClick}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="absolute -bottom-15 left-[30%] sm:left-[50%] md:left-[40%] 2xl:-left-25 2xl:top-[50%] 2xl:translate-y-[-50%] cursor-pointer"
        >
        <img src={left_arrow} alt="" />
        </button>
    )
}
// NextArrow Function Here
function NextArrow ({onClick}) {
    return (
        <button
            type="button"
            onClick={onClick}
            className="absolute -bottom-15 right-[30%] sm:right-[55%] md:right-[40%] 2xl:-right-25 2xl:top-[50%] 2xl:translate-y-[-50%] cursor-pointer"
        >
        <img src={right_arrow} alt="" />
        </button>
    )
}
const Feedback = () => {
    // Slider Data Here
    const reviews = [
        {id: 1, title: "Bed hicula tellu curae massa acinia ristie more acu curabitur diam aliquet vehicula ridiculus convallis"},
        {id: 2, title: "Bed hicula tellu curae massa acinia ristie more acu curabitur diam aliquet vehicula ridiculus convallis"},
        {id: 3, title: "Bed hicula tellu curae massa acinia ristie more acu curabitur diam aliquet vehicula ridiculus convallis"},
        {id: 4, title: "Bed hicula tellu curae massa acinia ristie more acu curabitur diam aliquet vehicula ridiculus convallis"}
    ]
    // Slick Slider Function Here
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    }
    return (
        <>
            <section className='py-20 xl:py-32'>
                <div className="container">
                    {/* Feedback Title Here */}
                    {/* Section Title Here */}
                    <div className='sec-title-one text-center max-w-138 mx-auto'>
                        <h2 className='pb-4'>Client feedback</h2>
                        <p>Per ipsum ultrices sollicitudin iaculis platea facilisi semper aliquam up senectus cursus vivamus volutpat penatibus</p>
                    </div>
                    
                    <div className='relative'>
                        {/* Feedback Contents Here */}
                        <div>
                            <div className='relative'>
                                <Slider {...settings}>
                                {
                                    reviews.map((review) => (
                                        <div key={review.id}>
                                            <div className='lg:px-20 2xl:px-0'><h3 className='text-heading text-3xl sm:text-5xl sm:leading-15 xl:text-[100px] xl:leading-30 font-bold font-heading text-center xl:px-16'>{review.title}</h3></div>
                                            {/* Author Here */}
                                            <div className='mt-10 lg:mt-17.5'>
                                                <h4 className='text-2xl sm:text-3xl leading-10 font-heading text-heading text-center'>Cynthia A. Keely</h4>
                                                <div className='flex items-center justify-center gap-1 ml-13.5'>
                                                    <span className='w-15 h-px bg-paragraph inline-block'></span>
                                                    <p>CEO of lollipop</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                                </Slider>
                                {/* Feedback Img Here */}
                                <div>
                                    <img className='absolute left-0 top-26 -z-10 hidden lg:block' src={feedback_img_1} alt="" />
                                    <img className='absolute right-0 top-0 -z-10 hidden lg:block' src={feedback_img_2} alt="" />
                                </div>
                            </div>
                        </div>
                        
                        {/* Feedback Quote Img Here */}
                        <div>
                            <img className='absolute top-0 lg:top-14 left-[50%] translate-x-[-50%] -z-20 hidden md:block' src={feedback_img_3} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Feedback
