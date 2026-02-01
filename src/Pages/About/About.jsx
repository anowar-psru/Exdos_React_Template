import React from 'react'
import Breadcrumb from '../../Components/SharedComponents/Breadcrumb'
import AboutInfo from './AboutComponents/AboutInfo'
import Award from '../Home/Home/HomeComponents/Award/Award'
import TeamMember from '../Home/Home/HomeComponents/TeamMember/TeamMember'
import BrandOne from '../../Components/SharedComponents/Brand/BrandOne'
import Faqs from '../../Components/SharedComponents/Faqs'

const About = () => {
    return (
        <>
            {/* About Section Breadcrumb here */}
            <Breadcrumb heading={"About us"} subHeading={" About us"} />
            <AboutInfo />
            <Award />
            <TeamMember />
            <BrandOne />
            <Faqs/>
        </>
    )
}

export default About
