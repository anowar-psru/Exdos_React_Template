import blog_img_1 from '../../../assets/img/blog/single_blog_1.jpg'
import blog_img_2 from '../../../assets/img/blog/single_blog_2.jpg'
import blog_img_3 from '../../../assets/img/blog/single_blog_3.png'
import blog_img_4 from '../../../assets/img/blog/single_blog_4.jpg'
import blog_icon from '../../../assets/img/blog/circle-icon.png'
import recent_post_1 from '../../../assets/img/blog/recent_post_1.jpg'
import recent_post_2 from '../../../assets/img/blog/recent_post_2.jpg'
import recent_post_3 from '../../../assets/img/blog/recent_post_3.jpg'
import { RxArrowTopRight } from 'react-icons/rx'
import { SlCalender } from 'react-icons/sl'
const SingleBlog = () => {
    const blogItems = [
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
            title: `Lacus sem varius ultricies praesent molestie eros pellentesque volutpat nulla.`,
        },
        {
            blog_img: blog_img_3,
            blgoDate: "28 January 2026",
            blog_icon: blog_icon,
            text: "Creative",
            title: `Bolutpat vestibulum interdum tempor congue tempus aene accumsan proin.`,
        },
        {
            blog_img: blog_img_4,
            blgoDate: "28 January 2026",
            blog_icon: blog_icon,
            text: "Creative",
            title: `Congue hendrerit primis etiam mauris commodo best dialogue ligula erate etiam.`,
        },
    ]
    // Products Category Here
    const categories = ["Product design", "Creative solution", "Visual identity", "Branding design", "Web design", "Content writing"]
    // Recent Post Here
        const recentPosts = [
        {
            recent_post_img: recent_post_1,
            blgoDate: "28 January 2026",
            title: `Dapibus cras nisi suscipit nibh elite purus condimentum`,
        },
        {
            recent_post_img: recent_post_2,
            blgoDate: "28 January 2026",
            title: `Nullam arcu proin also facilisi montes facilisi fringilla condimen`,
        },
        {
            recent_post_img: recent_post_3,
            blgoDate: "28 January 2026",
            title: `Elementum euismod lorem urna fusce porttitor ultricies in per orci`,
        },
    ]
    // Products Category Here
    const tags = ["Creative", "Design", "color", "brand", "service", "technology", "startup", "corporate"]
    return (
        <>
            <section className='py-20 lg:py-32'>
                <div className="container">
                    <div className='grid xl:grid-cols-12 gap-7.5'>
                        {/* Single Blog Post Here */}
                        <div className='col-span-1 xl:col-span-8'>
                            {
                                blogItems.map((item, index) => (
                                    <div key={index} className='pb-10'>
                                        <img className='rounded-[20px] w-full' src={item.blog_img} alt="" />
                                        <div className='pt-10 sm:pr-20'>
                                            <div className='flex items-center gap-2 sm:gap-4'>
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
                                            <h3 className='text-3xl sm:text-[40px] text-heading font-heading sm:leading-12.5 cursor-pointer mt-4 mb-7.5 hover:text-secondary'>{item.title}</h3>
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
                        {/* Blog Rights Part */}
                        <div className='col-span-1 xl:col-span-4'>
                            {/* Search Section Here */}
                            <div className='bg-[#FBF6EF] rounded-[10px] p-8'>
                                <h3 className='blog-heading'>Search here</h3>
                                {/* Search field here */}
                                <div className='mt-5 relative'>
                                    <input 
                                        type="text" 
                                        placeholder='Search keywords'
                                        className='bg-white border rounded outline-0 w-full px-6 py-4' />
                                    <RxArrowTopRight className='text-xl absolute right-6 top-5'/>
                                </div>
                            </div>
                            {/* Category Section Here */}
                            <div className='bg-[#FBF6EF] rounded-[10px] p-8 mt-7.5'>
                                <h3 className='blog-heading'>Category</h3>
                                {/* Category items here */}
                                <div className='grid sm:grid-cols-2 xl:grid-cols-1 sm:gap-3'>
                                    {
                                        categories.map((category, index) => (
                                            <div className='mt-5 relative group'>
                                                <input 
                                                    type="text" 
                                                    placeholder={category}
                                                    className='bg-white border cursor-pointer rounded outline-0 w-full px-6 py-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300 ease-in-out' />
                                                    <RxArrowTopRight className='text-xl absolute right-6 top-5 group-hover:text-white transition-all duration-300 ease-in-out'/>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* Recent Post Section Here */}
                            <div className='bg-[#FBF6EF] rounded-[10px] p-8 mt-7.5'>
                                <h3 className='blog-heading'>Recent post</h3>
                                {/* Category items here */}
                                <div className='grid md:grid-cols-2 md:gap-3 xl:grid-cols-1 gap-y-8 mt-5'>
                                    {
                                        recentPosts.map((post, index) => (
                                            <div key={index} className='border-b pb-5 last:border-b-0'>
                                                <img className='rounded-[15px] w-full' src={post.recent_post_img} alt="" />
                                                {/* Recent Post Date Here */}
                                                <div className='flex items-center gap-2 mt-6.25 mb-2.5'>
                                                    <SlCalender className='text-xl'/>
                                                    <p>{post.blgoDate}</p>
                                                </div>
                                                <h4 className='text-xl text-heading font-heading leading-7.5'>{post.title}</h4>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            {/* Tags Cloud Section Here */}
                            {/* Category Section Here */}
                            <div className='bg-[#FBF6EF] rounded-[10px] p-8 mt-7.5'>
                                <h3 className='blog-heading mb-5'>Tags cloud</h3>
                                {/* Category items here */}
                                <div className='grid grid-cols-3 gap-2.5'>
                                    {
                                        tags.map((tag, index) => (
                                            <div className='' key={index}>
                                                <input 
                                                    type="text" 
                                                    placeholder={tag}
                                                    className='text-sm font-medium leading-6.25 border cursor-pointer rounded outline-0 w-full px-2 py-4 group-hover:bg-secondary group-hover:text-white transition-all duration-300 ease-in-out uppercase text-center' />
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SingleBlog