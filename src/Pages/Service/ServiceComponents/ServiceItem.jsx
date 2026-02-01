import Services from "../../../Components/SharedComponents/Services"

const ServiceItem = () => {
    return (
        <>
            <section className="py-t0 lg:pt-32">
                <div className="container">
                    {/* Section Title Here */}
                    <div className='sec-title-one text-center max-w-138 mx-auto'>
                        <h2 className='pb-4 px-10 lg:px-0'>What we offer</h2>
                        <p>Per ipsum ultrices sollicitudin iaculis platea facilisi semper aliquam up senectus cursus vivamus volutpat penatibus</p>
                    </div>
                    {/* Service Items Here */}
                    <Services />
                </div>
            </section>
        </>
    )
}

export default ServiceItem