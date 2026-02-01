import React from 'react'
import Breadcrumb from '../../Components/SharedComponents/Breadcrumb'
import PricingPlan from '../../Components/SharedComponents/PricingPlan'
import Video from '../../Components/SharedComponents/Video'

const Pricing = () => {
    return (
        <>
            <Breadcrumb heading={"Pricing"} subHeading={"Pricing"}/>
            <PricingPlan />
            <Video />
        </>
    )
}

export default Pricing