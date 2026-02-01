import React from 'react'
import Breadcrumb from '../../Components/SharedComponents/Breadcrumb'
import SingleBlog from './BlogComponents/SingleBlog'

const Blog = () => {
    return (
        <>
            <Breadcrumb heading={"Our Blog"} subHeading={"Our Blog"}/>
            <SingleBlog />
        </>
    )
}

export default Blog