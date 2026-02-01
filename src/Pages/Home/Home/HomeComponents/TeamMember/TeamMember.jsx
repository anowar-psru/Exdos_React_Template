import { FaBehance, FaInstagram, FaTwitter } from 'react-icons/fa'
import prev_arrow from '../../../../../assets/img/team/left-arrow.png'
import next_arrow from '../../../../../assets/img/team/right-arrow.png'
import team_img_1 from '../../../../../assets/img/team/team-h1-1.png'
import team_img_2 from '../../../../../assets/img/team/team-h1-2.png'
import team_img_3 from '../../../../../assets/img/team/team-h1-3.png'
import team_img_4 from '../../../../../assets/img/team/team-h1-4.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
// React Prev Arrow Here
const PrevArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -top-20 left-10 md:-top-15 md:right-20 lg:left-[78%] xl:left-[75%] lg:-top-[18%] z-10 cursor-pointer"
    >
      <img src={prev_arrow} alt="prev" />
    </button>
  )
}
// React Next Arrow Here
const NextArrow = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="absolute -top-20 left-30 md:-top-15 md:right-0 lg:left-[88%] xl:left-[80%] lg:-top-[18%] z-10 cursor-pointer"
    >
      <img src={next_arrow} alt="next" />
    </button>
  )
}
const TeamMember = () => {
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
            team_img: team_img_3,
            name: "Donald D. Lowel",
            title: "Senior Designer"
        },
    ]
    // Slick Slider Function Here
    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 4,
      }
    }
  ]
    }
    return (
        <>
            <section className='pt-20 lg:py-32'>
                <div className="container flex flex-col md:flex-row md:items-center">
                    {/* Section Title Here */}
                    <div className='sec-title-one w-full lg:w-[50%]'>
                        <h2 className='pb-4 px-10 lg:px-0'>Dedicated team member behind your story</h2>
                    </div>
                    {/* Team Arrows Here */}

                </div>
                {/* Team Member Items Here */}
                <div className='px-7.5 xl:px-25 mt-10 md:mt-0'>
                    <Slider {...settings}>
                    {
                        teams.map((team) => (
                            <div key={team.id} className='px-3.75'>
                                {/* Team Member Img Here */}
                                <div><img className='w-full rounded-[15px]' src={team.team_img} alt="" /></div>
                                {/* Team Member Name and Title Here */}
                                <div className='mt-7.5'>
                                    <h3 className='text-3xl font-heading text-heading leading-10 text-center hover:text-secondary transition-all duration-300 cursor-pointer'>{team.name}</h3>
                                    <div className='flex items-center justify-center gap-2.5 ml-12.5 xl:ml-2 2xl:ml-12.5 py-2'>
                                        <span className='w-15 h-px bg-paragraph inline-block'></span>
                                        <p className='text-center inline-block'>{team.title}</p>
                                    </div>
                                    {/* Team Social Here */}
                                    <div className='flex items-center pl-26 gap-4.5'>
                                        <FaBehance className='text-xl text-heading hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer' />
                                        <FaTwitter className='text-xl text-heading hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer' />
                                        <FaInstagram className='text-xl text-heading hover:text-secondary transition-all duration-300 ease-in-out cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default TeamMember
