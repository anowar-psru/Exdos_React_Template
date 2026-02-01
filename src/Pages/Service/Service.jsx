import Breadcrumb from '../../Components/SharedComponents/Breadcrumb'
import ServiceItem from './ServiceComponents/ServiceItem'
import Fact from './ServiceComponents/Fact'
import HomeBlog from '../Home/Home/HomeComponents/Blog/HomeBlog'
import Experience from '../../Components/SharedComponents/Experience'

const Service = () => {
    return (
        <>
            <Breadcrumb heading={"Our Service"} subHeading={"Our Service"} />
            <ServiceItem />
            <Experience />
            <Fact />
            <HomeBlog />
        </>
    )
}

export default Service