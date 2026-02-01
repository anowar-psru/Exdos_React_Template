import Services from "../../../../../Components/SharedComponents/Services"

const HomeService = () => {
    return (
        <>
            <section className="py-20 lg:py-32">
                <div className="container">
                    {/* Section Title Here */}
                    <div className='sec-title-one text-center max-w-138 mx-auto'>
                        <h2 className='pb-4'>Popular services</h2>
                        <p>Per ipsum ultrices sollicitudin iaculis platea facilisi semper aliquam up senectus cursus vivamus volutpat penatibus</p>
                    </div>
                    {/* Service Items here */}
                    <div>
                        <Services />
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeService
