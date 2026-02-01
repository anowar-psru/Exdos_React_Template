import Header from '../Pages/Home/Home/HomeComponents/Header/Header'
import { Outlet } from 'react-router'
import Footer from '../Pages/Home/Home/HomeComponents/Footer/Footer'

const Root = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}

export default Root
