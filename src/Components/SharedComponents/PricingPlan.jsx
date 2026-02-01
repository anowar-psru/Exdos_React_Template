import { IoCheckmarkSharp } from 'react-icons/io5'
import pricing_img_1 from '../../assets/img/pricing/pricing_shape_1.png'
import pricing_img_2 from '../../assets/img/pricing/pricing_shape_2.png'
import pricing_img_3 from '../../assets/img/pricing/pricing_shape_3.png'
import CustomBtn from './CustomBtn'

const PricingPlan = () => {
    const prices = [
        {id: 1, pricing_img: pricing_img_1, price: "120", title: "Brand research"},
        {id: 2, pricing_img: pricing_img_2, price: "150", title: "App development"},
        {id: 3, pricing_img: pricing_img_3, price: "180", title: "Digital marketing"},
    ]
    return (
        <>
            <section className='py-20 xl:py-32'>
                <div className="container">
                    {/* Section Title Here */}
                    <div  className='sec-title-one text-center max-w-138 mx-auto'>
                        <h2>Pricing Plan</h2>
                        <p>Per ipsum ultrices sollicitudin iaculis platea facilisi semper aliquam up senectus cursus vivamus volutpat penatibus</p>
                    </div>
                    {/* Pricing Plan Here */}
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7.5'>
                        {
                            prices.map((price) => (
                                <div key={price.id} className='bg-[#FBF6EF] border rounded border-transparent hover:border-paragraph transition-all duration-300 ease-in-out p-12.5 pricing-item'>
                                    <img src={price.pricing_img} alt="" />
                                    <span className='text-[70px] font-heading text-heading leading-18 pt-5 pb-2.5 inline-block'>${price.price}</span>
                                    <h3 className='text-3xl text-heading font-heading leading-10 font-medium pb-5'>{price.title}</h3>
                                    {/* Features */}
                                    <div className='border-t pt-5 flex flex-col gap-4'>
                                        <p className='flex items-center gap-2.5'><IoCheckmarkSharp />Full design support</p>
                                        <p className='flex items-center gap-2.5'><IoCheckmarkSharp />Customizable registration</p>
                                        <p className='flex items-center gap-2.5'><IoCheckmarkSharp />Guarantee Approval</p>
                                        <p className='flex items-center gap-2.5'><IoCheckmarkSharp />Custom domain</p>
                                        <p className='flex items-center gap-2.5'><IoCheckmarkSharp />Unlimited paid ticket</p>
                                        <p className='flex items-center gap-2.5'><IoCheckmarkSharp />24/7 Client support</p>
                                    </div>
                                    {/* Pricing BTN Here */}
                                    <div className='mt-12.5 cursor-pointer'>
                                        <CustomBtn className="primary-btn" text={"Choose a Plan"}/>
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

export default PricingPlan