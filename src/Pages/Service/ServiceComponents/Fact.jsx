import fact_bg from '../../../assets/img/fact/Bitmap.png'
import fact_img from '../../../assets/img/fact/img.png'
import fact_icon from '../../../assets/img/fact/fact_icon.png'

const Fact = () => {
    const items = [
        {fact_icon: fact_icon, title: "Project completed", number: "796"},
        {fact_icon: fact_icon, title: "Satisfied clients", number: "2k+"},
        {fact_icon: fact_icon, title: "Honorable award", number: "132"},
        {fact_icon: fact_icon, title: "Running Project", number: "218"},
    ]
    return (
        <>
            <section className='bg-background bg-cover bg-no-repeat py-32' style={({backgroundImage: `url(${fact_bg})`})}>
                <div className="container">
                    <div className='flex flex-col lg:flex-row items-center justify-between gap-y-10'>
                        {/* Fact section here */}
                        <div className='w-full lg:w-[50%]'>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-y-20 lg:gap-y-7.5 xl:gap-y-20'>
                                {
                                    items.map((item, index) => (
                                        <div key={index} className='flex flex-col items-center justify-center'>
                                            <img src={fact_icon} alt="" />
                                            <p className='text-3xl xl:text-3xl lg:text-2xl font-heading leading-10 text-[rgba(255,255,255,0.5)] py-5 lg:pb-0 2xl:pb-5'>{item.title}</p>
                                            <span className='text-[100px] xl:text-[100px] lg:text-7xl font-heading leading-30 text-white font-medium'>{item.number}</span>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                        {/* Fact Img Here */}
                        <div className='w-full lg:w-[50%]'>
                            <img className='rounded-[15px] w-full' src={fact_img} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fact