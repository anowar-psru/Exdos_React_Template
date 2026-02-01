import { useEffect, useState } from 'react';
import experience_img from '../../assets/img/experience/experience_img.jpg';
import experience_icon from '../../assets/img/experience/icon.png';

const Experience = ({bgColor}) => {
    const [skills, setSkills] = useState([
        { title: 'Concept', value: 0, target: 80 },
        { title: 'Research', value: 0, target: 90 },
        { title: 'Development', value: 0, target: 85 },
    ])

useEffect(() => {
    // component load হওয়ার পর animate হবে
    setTimeout(() => {
        setSkills(prev =>
                prev.map(skill => ({
                ...skill,
                value: skill.target,
            }))
        );
    }, 300);
}, []);

  return (
    <section className={`py-20 xl:py-32 pt-10 ${bgColor}`}>
        <div className="container">
            <div className='grid lg:grid-cols-12 gap-10'>

                {/* Experience Left */}
                <div className='lg:col-span-5 xl:col-span-7 relative w-full'>
                    <img
                    className='rounded-[20px] w-full'
                    src={experience_img}
                    alt="experience"
                    />

                    <div className='bg-primary rounded-[10px] absolute -top-11.5 right-24 lg:right-0 xl:right-24 hidden sm:flex items-center gap-5 px-11 lg:px-5 py-6'>
                        <span className='text-[100px] text-heading font-heading leading-30 font-medium'>
                        25
                        </span>
                        <p className='text-3xl font-heading text-heading leading-10'>
                        Years of <br /> experience
                        </p>
                    </div>
                </div>

                {/* Experience Right */}
                <div className='lg:col-span-7 xl:col-span-5 pt-10 lg:pt-0 sm:px-10 xl:px-0'>
                    <h2 className='text-3xl sm:text-6xl lg:text-4xl xl:text-[58px] font-heading text-heading pb-5'>Better communication for best design</h2>
                    <p>Lobortis netus dis neque congue, habitasse orciad suscipit ultriciesdignissim nunc dictumst.</p>

                {/* Progress Bars */}
                <div className='mt-8 space-y-6'>
                    {skills.map((skill, index) => (
                        <div key={index}>
                            <h3 className='text-heading text-[15px] font-medium mb-3'>
                            {skill.title}
                            </h3>

                        <div className='relative'>
                            {/* Outer bar */}
                            <div className='w-full h-5 border rounded-[5px]'></div>

                            {/* Animated inner bar */}
                            <div className='h-3 bg-secondary rounded absolute left-1.25 top-1/2 -translate-y-1/2 transition-all duration-1000 ease-out'
                            style={{ width: `${skill.value}%` }}></div>

                                {/* Percentage Icon */}
                                <div className='absolute -top-8 transition-all duration-1000'
                                style={{ left: `calc(${skill.value}% - 16px)` }}>
                                    <div className='w-8.5 h-7 relative'>
                                        <img src={experience_icon} alt="icon" />
                                        <span className='text-[12px] font-bold absolute left-1 top-0 text-white'>
                                        {skill.value}%
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Experience