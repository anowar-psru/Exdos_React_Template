import { FaRegPaperPlane } from 'react-icons/fa'
import CustomBtn from './CustomBtn'

const Newsletter = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className='bg-secondary rounded-[20px] px-5 lg:px-7.5 xl:px-20 py-7.5 lg:py-17.5 grid grid-cols-12'>
                        {/* Newsletter Text Here */}
                        <div className='xl:mr-27.5 col-span-12 xl:col-span-4'>
                            <h2 className='text-4xl sm:text-6xl text-white leading-20'>Newsletter</h2>
                        </div>
                        {/* Newsletter Form Here */}
                        <div className='col-span-12 xl:col-span-8'>
                            <form className='flex lg:items-end flex-col md:flex-row gap-5'>
                                <div className='w-full md:w-[73%] relative mb-2.5'>
                                    <input type="email" placeholder='Email Here*' className='border-b border-b-white bg-transparent pr-3 w-full outline-0 text-white pb-3 placeholder:text-white' />
                                    <FaRegPaperPlane className='text-lg text-white absolute right-0 top-0' />
                                </div>
                                <div className='w-[27%]'>
                                    <button type='submit'>
                                        <CustomBtn text={"Subscribe Now"} />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter