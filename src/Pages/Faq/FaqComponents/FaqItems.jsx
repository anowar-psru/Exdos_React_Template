import React, { useState } from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const FaqItems = () => {
    const items = [
        {
            id: 1, 
            faq: "How do you collaborate with developers?", 
            answer: "Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life montes dapibus potenti ultrices quam blandit natoque nullam dapibus."
        },
        {
            id: 2, 
            faq: "How do we start working together?", 
            answer: "Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life montes dapibus potenti ultrices quam blandit natoque nullam dapibus."
        },
        {
            id: 3, 
            faq: "What are your cancellation policies?", 
            answer: "Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life montes dapibus potenti ultrices quam blandit natoque nullam dapibus."
        },
        {
            id: 4, 
            faq: "Do they have case studies or references?", 
            answer: "Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life montes dapibus potenti ultrices quam blandit natoque nullam dapibus."
        },
        {
            id: 5, 
            faq: "What is the onboarding process like?", 
            answer: "Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life montes dapibus potenti ultrices quam blandit natoque nullam dapibus."
        },
        {
            id: 6, 
            faq: "How long until completion of my project?", 
            answer: "Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life montes dapibus potenti ultrices quam blandit natoque nullam dapibus."
        },
        {
            id: 7, 
            faq: "What will be expected of me as a client?", 
            answer: "Leo site ultrices donec a volutpat penatibus mind suscipit faucibus and duis pharetra name socios phasellus nunce accumsan lectus morbi ridiculus. He beginning it bee won't they are shall life montes dapibus potenti ultrices quam blandit natoque nullam dapibus."
        },
    ]
    const [selected, setSelected] = useState(1)
    const handleAccordion = (id) => {
        setSelected(selected === id ? null : id)
    }
    return (
        <>
            <section className='py-20 xl:py-32'>
                <div className="max-w-232.5 mx-auto px-7.5">
                    {/* Section Title Here */}
                    <div className='sec-title-one'>
                        <h2 className='pb-4'>General Questions</h2>
                        <p>Malesuada eleifend faucibus ridiculus vivamus fringilla ultrices sed est fames dui facilisis vivamus donec nonad habitasse nostra ornare purus dapibus tristique nisie eget dictum</p>
                    </div>
                    {/* Faq Items Here */}
                    <div>
                        {
                            items.map((item) => (
                                <div key={item.id} className='border rounded-[10px] px-7.5 py-5 mb-5'>
                                    {/* Accordion Heading */}
                                    <div 
                                    onClick={() => handleAccordion(item.id)}
                                    className='flex items-center justify-between cursor-pointer'>
                                        <h3 className={`text-xl leading-7.5 font-heading ${selected === item.id ? 'text-secondary' : 'text-heading'}`}>{item.faq}</h3>
                                        <FaArrowRightLong className={`text-heading transition-transform duration-300 
                                        ${selected === item.id ? 'rotate-90 text-secondary' : ''}
                                        `}/>
                                    </div>
                                    {/* Accordion Content Here */}
                                    <div className={`overflow-hidden transition-all duration-300 ease-in-out
                                        ${selected === item.id ? 'max-h-40 border-t pt-4 mt-4' : 'max-h-0'}`}>
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default FaqItems