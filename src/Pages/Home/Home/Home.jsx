import Award from './HomeComponents/Award/Award'
import Banner from './HomeComponents/Banner/Banner'
import HomeBlog from './HomeComponents/Blog/HomeBlog'
import HomeContact from './HomeComponents/Contact/HomeContact'
import Fact from './HomeComponents/Fact/Fact'
import Feedback from './HomeComponents/Feedback/Feedback'
import HomeAbout from './HomeComponents/HomeAbout/HomeAbout'
import HomeBrand from './HomeComponents/HomeBrand/HomeBrand'
import HomeNewsletter from './HomeComponents/HomeNewsletter/HomeNewsletter'
import HomeProject from './HomeComponents/HomeProject/HomeProject'
import HomeService from './HomeComponents/Service/HomeService'
import TeamMember from './HomeComponents/TeamMember/TeamMember'
const Home = () => {
    return (
        <>
            <Banner />
            <HomeAbout />
            <HomeNewsletter />
            <HomeService />
            <HomeProject />
            <Feedback />
            <HomeBrand />
            <TeamMember />
            <Award />
            <Fact />
            <HomeBlog />
            <HomeContact />
        </>
    )
}

export default Home
