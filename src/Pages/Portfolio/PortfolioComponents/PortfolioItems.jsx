import React, { useState } from 'react'
import portfolio_img_1 from '../../../assets/img/portfolio/portfolio_img_1.jpg'
import portfolio_img_2 from '../../../assets/img/portfolio/portfolio_img_2.jpg'
import portfolio_img_3 from '../../../assets/img/portfolio/portfolio_img_3.jpg'
import portfolio_img_4 from '../../../assets/img/portfolio/portfolio_img_4.jpg'
import portfolio_img_5 from '../../../assets/img/portfolio/portfolio_img_5.jpg'
import portfolio_img_6 from '../../../assets/img/portfolio/portfolio_img_6.jpg'
const items = [
    {id: 1, portfolio_img: portfolio_img_1, title: "Motion graphic", degisnation: "Presentation"},
    {id: 2, portfolio_img: portfolio_img_2, title: "Branding design", degisnation: "Creative Design"},
    {id: 3, portfolio_img: portfolio_img_3, title: "Music compose", degisnation: "Music artist"},
    {id: 4, portfolio_img: portfolio_img_4, title: "Product design", degisnation: "Creative Design"},
    {id: 5, portfolio_img: portfolio_img_5, title: "Visual Identity", degisnation: "Design concept"},
    {id: 6, portfolio_img: portfolio_img_6, title: "Branding design", degisnation: "Creative Design"},
]
const PortfolioItems = () => {
    const portfolioNavs = ["Show All", "Graphic", "Website", "Motion Graphic"]
    const [selected, setSelected] = useState("Show All")
    return (
        <>
            <section className=' py-20 lg:py-32'>
                <div className="container">
                    {/* Portfolio Nav Here */}
                    <div className='flex flex-col sm:flex-row items-center justify-center gap-6'>
                        {
                            portfolioNavs.map((nav, index) => (
                                <button 
                                    key={index}
                                    onClick={() => setSelected(nav)}
                                    className={`uppercase cursor-pointer ${selected === nav ? 'text-heading' : 'text-paragraph'}`}
                                >
                                    {nav}
                                </button>
                            ))
                        }
                    </div>
                    {/* Portfolio Items Here */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-6 lg:gap-7.5 gap-y-10 mt-12.5'>
                        {
                            items.map((item) => (
                                <div key={item.id}>
                                    <img className='rounded-[15px] w-full' src={item.portfolio_img} alt="" />
                                    <div className='pt-7.5 text-center'>
                                        <h3 className='text-3xl text-heading font-heading font-medium leading-10'>{item.title}</h3>
                                        <div className='flex items-center gap-1 justify-center ml-18 sm:ml-12 xl:ml-18 mt-2'>
                                            <span className='w-13 h-px bg-background inline-block'></span>
                                            <p>{item.degisnation}</p>
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

export default PortfolioItems