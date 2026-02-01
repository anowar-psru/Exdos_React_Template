import Breadcrumb from "../../Components/SharedComponents/Breadcrumb"
import ContactForm from "../../Components/SharedComponents/ContactForm"
import ContactInfo from "./ContactComponents/ContactInfo"

const Contact = () => {
    return (
        <>
            <Breadcrumb heading={"Contact Us"} subHeading={"Contact Us"}/>
            <ContactInfo />
            <ContactForm heading={"Contact Us"}/>
        </>
    )
}

export default Contact