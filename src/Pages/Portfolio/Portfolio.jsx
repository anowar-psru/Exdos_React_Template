import BreadCrumb from '../../Components/SharedComponents/Breadcrumb'
import PortfolioItems from './PortfolioComponents/PortfolioItems'
import ContactForm from '../../Components/SharedComponents/ContactForm'
const Portfolio = () => {
    return (
        <>
            <BreadCrumb heading={"Portfolio"} subHeading={"Portfolio"}/>
            <PortfolioItems />
            <ContactForm heading={"Contact Us"} bgColor="bg-[#FBF6EF]"/>
        </>
    )
}

export default Portfolio