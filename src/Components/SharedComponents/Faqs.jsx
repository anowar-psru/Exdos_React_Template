import { IoMdArrowForward } from 'react-icons/io'
import faq_img_2 from '../../assets/img/faq/faq_img_2.png'
import { useState } from 'react'

const Faq = () => {
    const items = [
        {
            id: 1, 
            title: "How do you collaborate with developers?",
            answer: `Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra bed name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life`
        },
        {
            id: 2, 
            title: "How do we start working together?",
            answer: `Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra bed name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life`
        },
        {
            id: 3, 
            title: "What are your cancellation policies?",
            answer: `Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra bed name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life`
        },
    ]
    const [selected, setSelected] = useState(1)
    const handleAccordion = (id) => {
        setSelected(selected === id ? null : id)
    }
    return (
        <>
            <section className='relative py-32'>
                <div className="container">
                    <div className='w-[50%]'>
                        <h2 className='text-[42px] leading-13 sm:text-6xl text-heading font-heading sm:leading-20 font-bold'>Plugging great concept into your brand</h2>
                        <p>Augue ullamcorper nunc libero augue blandit habitant purus felis quam persui nisi lectus. augue lobortis nostra placerat penatibus</p>
                        {/* Accordion Items Here */}
                        <div>
                            {
                                items.slice(0, 3).map((item) => (
                                    <div className='border rounded-[20px] my-5 py-5 px-7.5'>
                                        <div 
                                        onClick={() => handleAccordion(item.id)}
                                        className="accordion-heading flex items-center justify-between cursor-pointer group">
                                            <h3 className={`text-xl text-heading font-heading font-medium leading-8 group-hover:text-secondary transition-all duration-300 ease-in-out ${selected === item.id ? 'text-secondary' : ''}`}>{item.title}</h3>
                                            <IoMdArrowForward className= {`text-xl text-heading  group-hover:text-secondary transition-all duration-300 ease-in-out ${selected === item.id ? 'rotate-90 text-secondary' : ''}`} />
                                        </div>
                                        {/* Accordion Answer Here */}
                                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${selected === item.id ? 'max-h-50 border-t mt-3 pt-3' : 'max-h-0'} `}>
                                            <p>{item.answer}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div>
                    <img className='absolute right-0 top-32' src={faq_img_2} alt="" />
                </div>
            </section>
        </>
    )
}

export default Faq