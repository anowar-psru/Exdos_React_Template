import fact_bg from '../../../../../assets/img/fact/Bitmap.png'
import fact_icon from '../../../../../assets/img/fact/fact_icon.png'

const Fact = () => {
    const items = [
        {fact_icon: fact_icon, title: "Project completed", number: "796"},
        {fact_icon: fact_icon, title: "Satisfied clients", number: "2k+"},
        {fact_icon: fact_icon, title: "Honorable award", number: "132"},
        {fact_icon: fact_icon, title: "Running Project", number: "218"},
    ]
    return (
        <>
            <section className='py-25 bg-background' style={{backgroundImage: `url(${fact_bg})`}}>
                <div className="container">
                    <div className='grid sm:grid-cols-2 justify-center sm:justify-between sm:items-center lg:grid-cols-4 gap-20 lg:gap-15 2xl:gap-35'>
                        {
                            items.map((item, index) => (
                                <div key={index} className=''>
                                    <img src={fact_icon} alt="" />
                                    <p className='text-3xl xl:text-3xl lg:text-2xl font-heading leading-10 text-[rgba(255,255,255,0.5)] py-5 lg:pb-0 2xl:pb-5'>{item.title}</p>
                                    <span className='text-[100px] xl:text-[100px] lg:text-7xl font-heading leading-30 text-white font-medium'>{item.number}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Fact