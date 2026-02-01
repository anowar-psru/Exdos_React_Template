import { FaBehance, FaInstagram, FaTwitter } from 'react-icons/fa'
import team_img_1 from '../../../assets/img/team/team-h1-1.png'
import team_img_2 from '../../../assets/img/team/team-h1-2.png'
import team_img_3 from '../../../assets/img/team/team-h1-3.png'
import team_img_4 from '../../../assets/img/team/team-h1-4.png'
import team_img_5 from '../../../assets/img/team/team-h1-5.png'
import team_img_6 from '../../../assets/img/team/team-h1-6.png'
import team_img_7 from '../../../assets/img/team/team-h1-7.png'
import team_img_8 from '../../../assets/img/team/team-h1-8.png'

const TeamMembers = () => {
const teams = [
        {
            id: 1,
            team_img: team_img_1,
            name: "Bonnie Z. Brown",
            title: "Senior Designer"
        },
        {
            id: 2,
            team_img: team_img_2,
            name: "Cynthia A. Keely",
            title: "Senior Designer"
        },
        {
            id: 3,
            team_img: team_img_3,
            name: "Donald D. Lowel",
            title: "Senior Designer"
        },
        {
            id: 4,
            team_img: team_img_4,
            name: "Maria A. Murray",
            title: "Senior Designer"
        },
        {
            id: 5,
            team_img: team_img_5,
            name: "Kendra R. Macoy",
            title: "Senior Designer"
        },
        {
            id: 6,
            team_img: team_img_6,
            name: "Kellee R. Cherry",
            title: "Senior Designer"
        },
        {
            id: 7,
            team_img: team_img_7,
            name: "Gary D. Cannon",
            title: "Senior Designer"
        },
        {
            id: 8,
            team_img: team_img_8,
            name: "Robert G. Jekins",
            title: "Senior Designer"
        },
    ]
    return (
        <>
            <section className='py-32'>
                <div className="container">
                    {/* Section Title Here */}
                    <div className='sec-title-one text-center max-w-138 mx-auto'>
                        <h2 className='pb-4'>Team Member</h2>
                        <p>Per ipsum ultrices sollicitudin iaculis platea facilisi semper aliquam up senectus cursus vivamus volutpat penatibus</p>
                    </div>
                </div>
                {/* Team Member Items Here */}
                <div className='grid sm:grid-cols-2 md:grid-cols-3 3xl:grid-cols-4 gap-y-15 px-7.5 xl:px-25 mt-10 md:mt-0'>
                    {
                        teams.map((team) => (
                            <div key={team.id} className='px-3.75'>
                                {/* Team Member Img Here */}
                                <div><img className='w-full rounded-[15px]' src={team.team_img} alt="" /></div>
                                {/* Team Member Name and Title Here */}
                                <div className='mt-7.5 xl:px-10 2xl:px-20.25 3xl:px-12 4xl:px-20.25'>
                                    <h3 className='text-3xl 2xl:text-2xl 3xl:text-3xl font-heading text-heading leading-10 hover:text-secondary transition-all duration-300 cursor-pointer'>{team.name}</h3>
                                    <div className='flex items-center gap-2.5 py-2'>
                                        <span className='w-13 h-px bg-paragraph inline-block'></span>
                                        <p className='inline-block'>{team.title}</p>
                                    </div>
                                    {/* Team Social Here */}
                                    <div className='flex gap-4.5'>
                                        <FaBehance className='text-xl text-heading hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer' />
                                        <FaTwitter className='text-xl text-heading hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer' />
                                        <FaInstagram className='text-xl text-heading hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default TeamMembers