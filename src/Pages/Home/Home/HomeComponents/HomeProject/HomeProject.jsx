import { useState } from 'react'
import project_img_1 from '../../../../../assets/img/project/project-tab-1.webp'
import project_img_2 from '../../../../../assets/img/project/project-tab-2.webp'
import project_img_3 from '../../../../../assets/img/project/project-tab-3.webp'
import project_img_4 from '../../../../../assets/img/project/project-tab-4.webp'
import project_img_5 from '../../../../../assets/img/project/project-tab-5.webp'
import project_bg_img from '../../../../../assets/img/project/project-tab-bg.webp'
const HomeProject = () => {
    const btns = ["Brand design", "Digital thinker", "Printing art", "Interior design", "Web interface"]
    const projectImgs = [
        project_img_1,
        project_img_2,
        project_img_3,
        project_img_4,
        project_img_5
    ]
    const [activeBtn, setActiveBtn] = useState(1)
    return (
        <>
            <section className='bg-background py-10 xl:py-32' style={{backgroundImage: `url(${project_bg_img})`}}>
                <div className='flex flex-col lg:flex-row lg:items-center lg:gap-10 xl:gap-25 3xl:gap-68.25 px-7.5'>
                    {/* Project Nav Here */}
                    <div className=''>
                        <div className='flex flex-wrap lg:flex-col gap-5 mb-7.5'>
                            {
                                btns.map((btn, index) => (
                                    <div key={index}>
                                        <button 
                                        onClick={() => setActiveBtn(index)}
                                        className={`whitespace-nowrap text-xl sm:text-4xl lg:text-6xl 2xl:text-[90px] 2xl:leading-30 mb-3 cursor-pointer xl:pl-25 ${activeBtn === index ? 'text-primary relative before:absolute before:bg-primary before:w-full before:h-px before:left-0 before:-bottom-2' : 'text-white relative before:absolute before:bg-[#2F446B] before:w-full before:h-px before:left-0 before:-bottom-2'}`}>{btn}</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* Project Image */}
                    <div>
                        <img
                            src={projectImgs[activeBtn]}
                            className='rounded-[20px]  transition-all duration-500'
                            alt=""
                        />
                    </div>
                </div>
                {/* Project Button Here */}
                <div className='flex justify-center mt-10 md:mt-15 xl:mt-26.75'>
                    <a href="" className='text-2xl md:text-4xl lg:text-6xl md:leading-18 text-[rgba(255,255,255,0.7)] border px-7.5 py-5 md:px-12 md:py-3 rounded-full hover:bg-secondary hover:border-secondary hover:text-white'>All project</a>
                </div>
            </section>
        </>
    )
}

export default HomeProject
