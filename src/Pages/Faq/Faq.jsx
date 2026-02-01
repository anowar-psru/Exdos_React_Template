import Breadcrumb from '../../Components/SharedComponents/Breadcrumb'
import ContactForm from '../../Components/SharedComponents/ContactForm'
import FaqItems from './FaqComponents/FaqItems'
const Faq = () => {
    return (
        <>
            <Breadcrumb heading={"Our FAQ"} subHeading={"Our FAQ"} />
            <FaqItems />
            <ContactForm heading={"Contact Us"}  bgColor="bg-[#FBF6EF]"/>
        </>
    )
}

export default Faq