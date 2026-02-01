import { Link } from 'react-router'
import service_icon_1 from '../../assets/img/service/service-h1-1.png'
import service_icon_2 from '../../assets/img/service/service-h1-2.png'
import service_icon_3 from '../../assets/img/service/service-h1-3.png'
import service_icon_4 from '../../assets/img/service/service-h1-4.png'
import { GoArrowUpRight } from 'react-icons/go'
const Services = () => {
    const items = [
        {
            id: 1,
            icon: service_icon_1,
            title: "Visual identity",
            desc: "Perfs ipsum ultrices sollicitudin iaculis platea facilisi",
            text1: "Branding Design",
            text2: "Research & Testing ",
            text3: "Interion Design",
            text4: "Content Writing"
        },
        {
            id: 2,
            icon: service_icon_2,
            title: "Branding design",
            desc: "Perfs ipsum ultrices sollicitudin iaculis platea facilisi",
            text1: "Branding Design",
            text2: "Research & Testing ",
            text3: "Interion Design",
            text4: "Content Writing"
        },
        {
            id: 3,
            icon: service_icon_3,
            title: "Creative solution",
            desc: "Perfs ipsum ultrices sollicitudin iaculis platea facilisi",
            text1: "Branding Design",
            text2: "Research & Testing ",
            text3: "Interion Design",
            text4: "Content Writing"
        },
        {
            id: 4,
            icon: service_icon_4,
            title: "Content writing",
            desc: "Perfs ipsum ultrices sollicitudin iaculis platea facilisi",
            text1: "Branding Design",
            text2: "Research & Testing ",
            text3: "Interion Design",
            text4: "Content Writing"
        }
    ]
    return (
        <>
            <div className="container">
                <div className='grid md:grid-cols-2 xl:grid-cols-4 gap-7.5 xl:gap-0 gap-y-7.5 xl:gap-y-7.5'>
                    {
                        items.map((item) => (
                            <div key={item.id} className='border border-paragraph rounded-[20px] py-12.5 px-8 -ml-px bg-transparent hover:bg-[#FBF6EF] group'>
                                <img src= {item.icon} alt="" />
                                <h3 className='text-3xl font-heading text-heading leading-10 font-medium mt-7.5 mb-4'>{item.title}</h3>
                                <p>{item.desc}</p>
                                <div className='mt-5 flex flex-col gap-2.5'>
                                    <p className='service-point'>{item.text1}</p>
                                    <p className='service-point'>{item.text2}</p>
                                    <p className='service-point'>{item.text3}</p>
                                    <p className='service-point'>{item.text4}</p>
                                </div>
                                <div className='bg-[#FBF6EF] px-6 py-1.5 rounded group-hover:bg-secondary group-hover:duration-300 group-hover:transition-all mt-7.5'>
                                    <Link to="/service" className='text-heading text-lg leading-7 flex items-center justify-between group-hover:text-white'>Read More <GoArrowUpRight className='text-2xl' /></Link>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Services