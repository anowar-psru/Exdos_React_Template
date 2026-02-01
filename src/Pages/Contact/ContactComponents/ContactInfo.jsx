import location_icon from '../../../assets/img/contact/location_icon.png'
import email_icon from '../../../assets/img/contact/email_icon.png'
import phone_icon from '../../../assets/img/contact/phone_icon.png'
import location_img from '../../../assets/img/contact/location_img.png'

const ContactInfo = () => {
    const infos = [
        {contact_icon: location_icon, title: "our location", text: "1905 Oakridge Farm Lane Waukesha, WI 53188"},
        {contact_icon: email_icon, title: "email address", text: "example@exdosstudio.com", text2: "info@exdosstudio.com"},
        {contact_icon: phone_icon, title: "Phone number", text: "02 (256) 325 3602", text2: "01 (541) 258 360"},
    ]
    return (
        <>
            <section className='pt-20 lg:pt-32'>
                <div className="container">
                    {/* Section Title Here */}
                    <div className='sec-title-one text-center max-w-138 mx-auto'>
                        <h2 className='pb-4 px-10 lg:px-0'>Contact information</h2>
                        <p>Per ipsum ultrices sollicitudin iaculis platea facilisi semper aliquam up senectus cursus vivamus volutpat penatibus</p>
                    </div>
                    {/* Contact Information Here */}
                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7.5'>
                        {/* Our Location Here */}
                        {
                            infos.map((info, index) => (
                            <div key={index} className='flex flex-col items-center justify-center border border-paragraph rounded-[15px] sm:px-12 pt-12.5 pb-10'>
                                <img className='mx-auto' src={info.contact_icon} alt="" />
                                <p className='text-[15px]  font-medium leading-3.75 uppercase pt-7.5'>{info.title}</p>
                                <h3 className='text-xl sm:text-3xl lg:text-2xl xl:text-3xl text-heading text-center font-heading sm:leading-10 pt-4'>{info.text}</h3>
                                <h3 className='text-xl sm:text-3xl lg:text-2xl xl:text-3xl text-heading font-heading sm:leading-10'>{info.text2}</h3>
                            </div>
                            ))
                        }
                    </div>
                </div>
                {/* Location Map Here */}
                <div className='pt-20 lg:pt-32'>
                    <img src={location_img} alt="" />
                </div>
            </section>
        </>
    )
}

export default ContactInfo