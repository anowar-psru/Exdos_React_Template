import ContactForm from '../../Components/SharedComponents/ContactForm'
import Experience from '../../Components/SharedComponents/Experience'
import TeamMembers from './TeamComponents/TeamMembers'

const Team = () => {
    return (
        <>
            <TeamMembers />
            <Experience bgColor="bg-[#FBF6EF]"/>
            <ContactForm heading={"Join our team"}/>
        </>
    )
}

export default Team