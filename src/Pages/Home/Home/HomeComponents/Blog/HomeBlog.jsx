import { SlCalender } from 'react-icons/sl'
import blog_img_1 from '../../../../../assets/img/blog/blog-h1-1.png'
import blog_img_2 from '../../../../../assets/img/blog/blog-h1-2.png'
import blog_img_3 from '../../../../../assets/img/blog/blog-h1-3.png'
import blog_icon from '../../../../../assets/img/blog/circle-icon.png'
import { RxArrowTopRight } from 'react-icons/rx'
const HomeBlog = () => {
    const blogs = [
        {
            blog_img: blog_img_1,
            blgoDate: "28 January 2026",
            blog_icon: blog_icon,
            text: "Creative",
            title: `Potent be interdum ipsum pellentes code primis laoreet diam per established`,
        },
        {
            blog_img: blog_img_2,
            blgoDate: "28 January 2026",
            blog_icon: blog_icon,
            text: "Creative",
            title: `Leos placerat sagittis vitae quisque scelerisque sociosqu bulputate natoque`,
        },
        {
            blog_img: blog_img_3,
            blgoDate: "28 January 2026",
            blog_icon: blog_icon,
            text: "Creative",
            title: `Metus fames dictum curae tempus over parturient tempor cubilia venenatis.`,
        },
    ]
    return (
        <>
            <section className="py-32">
                <div className="container">
                    {/* Section Title Here */}
                    <div className='sec-title-one text-center max-w-138 mx-auto'>
                        <h2 className='pb-4'>Recent articles</h2>
                        <p>Per ipsum ultrices sollicitudin iaculis platea facilisi semper aliquam up senectus cursus vivamus volutpat penatibus</p>
                    </div>
                    {/* Blog Items Here */}
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7.5'>
                        {
                            blogs.map((item, index) => (
                                <div key={index}>
                                    <img className='rounded-[20px] w-full' src={item.blog_img} alt="" />
                                    <div className='pt-10 pl-7.5'>
                                        <div className='flex items-center gap-4'>
                                            {/* Blog Date Here */}
                                            <div className='flex items-center gap-2'>
                                                <SlCalender className='text-xl'/>
                                                <p>{item.blgoDate}</p>
                                            </div>
                                            {/* Blog line here */}
                                            <div>
                                                <span className='w-0.5 h-4 bg-paragraph inline-block'></span>
                                            </div>
                                            {/* Blog text here */}
                                            <div className='flex items-center gap-2'>
                                                <img src={item.blog_icon} alt="" />
                                                <p>{item.text}</p>
                                            </div>
                                        </div>
                                        {/* Blog title here */}
                                        <h3 className='text-3xl text-heading font-heading cursor-pointer mt-4 mb-7.5 hover:text-secondary'>{item.title}</h3>
                                        {/* Blog BTN Here */}
                                        <div className='flex items-center gap-3 group'>
                                            <p className='text-lg leading-7 hover:text-secondary'>Read More</p>
                                            <RxArrowTopRight className='text-xl group-hover:text-secondary'/>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeBlog
