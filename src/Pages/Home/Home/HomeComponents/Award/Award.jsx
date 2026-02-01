import award_arrow from '../../../../../assets/img/award/arrow.png'

const Award = () => {
    return (
        <>
            <section className='bg-[#FBF6EF] py-20 xl:py-32'>
                <div className="container">
                    <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-7.5 sm:gap-15 lg:gap-10 2xl:gap-41'>
                        {/* Section Title Here */}
                        <div className='w-full lg:w-[50%] xl:pr-10'>
                            <div className='sec-title-one'><h2>Exdos received many global awards that inspired our member</h2></div>
                            <div><img className='mx-auto lg:mx-0' src={award_arrow} alt="" /></div> 
                        </div>
                        {/* Award Items Here */}
                        <div className='w-full lg:w-[50%] justify-center
                         xl:justify-end flex'>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* Award Item 01 */}
                                <div className='sm:border-r border-b sm:pr-15 pb-9'>
                                    <span className='text-xl leading-7.5 font-heading'>2015 - 2016</span>
                                    <h3 className='text-2xl md:text-3xl text-heading font-heading leading-10 mt-2'>Best design award</h3>
                                </div>
                                {/* Award Item 02 */}
                                <div className='border-b sm:pl-15 pt-9 sm:pt-0 pb-9'>
                                    <span className='text-xl leading-7.5 font-heading'>2017 - 2018</span>
                                    <h3 className='text-2xl md:text-3xl text-heading font-heading leading-10 mt-2'>Dribbble winner</h3>
                                </div>
                                {/* Award Item 03 */}
                                <div className='sm:border-r border-b sm:pr-15 py-9'>
                                    <span className='text-xl leading-7.5 font-heading'>2019 - 2020</span>
                                    <h3 className='text-2xl md:text-3xl text-heading font-heading leading-10 mt-2'>Design of the year</h3>
                                </div>
                                {/* Award Item 04 */}
                                <div className='border-b sm:pl-15 py-9'>
                                    <span className='text-xl leading-7.5 font-heading'>2020 - 2021</span>
                                    <h3 className='text-2xl md:text-3xl text-heading font-heading leading-10 mt-2'>Graphic design</h3>
                                </div>
                                {/* Award Item 05 */}
                                <div className='sm:border-r sm:pr-15 pt-9'>
                                    <span className='text-xl leading-7.5 font-heading'>2022 - 2023</span>
                                    <h3 className='text-2xl md:text-3xl text-heading font-heading leading-10 mt-2'>Awwwards winner</h3>
                                </div>
                                {/* Award Item 06 */}
                                <div className='border-t sm:border-t-0 sm:pl-15 pt-9 sm:pt-0 mt-9'>
                                    <span className='text-xl leading-7.5 font-heading'>2024 - 2025</span>
                                    <h3 className='text-2xl md:text-3xl text-heading font-heading leading-10 mt-2'>Best jury awards</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Award