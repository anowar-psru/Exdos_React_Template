import { useForm } from 'react-hook-form'
import CustomBtn from './CustomBtn'

const ContactForm = ({heading, bgColor}) => {

    const {register, handleSubmit, formState:{errors}} = useForm()
    const onclick = (data) => {
        console.log(data);
    }
    return (
        <>
            <section className={`py-20 md:py-32 ${bgColor}`}>
                <div className="container">
                    <div className='flex flex-col md:flex-row'>
                        <div className='w-full md:w-[40%] lg:w-[50%]'>
                            <h2 className='text-5xl lg:text-[100px] text-heading font-heading sm:leading-30'>{heading}</h2>
                        </div>
                        <div className='w-full md:w-[60%] lg:w-[50%] mt-10 md:mt-0'>
                            <form onSubmit={handleSubmit(onclick)}>
                                <h3 className='text-3xl text-heading font-heading leading-10'>Get in tourch</h3>
                                {/* Full Name Field Here */}
                                <div className='mt-10 relative'>
                                    <input 
                                        {...register('name', {required: 'Name is required'})}
                                        className={`text-[15px] font-medium leading-6.25 border-b  outline-0 focus:text-heading focus:border-b-heading w-full pb-2.5 
                                            ${errors.name ? 'focus:text-red-500 focus:border-b-red-500' : 'border-b-paragraph focus:border-b focus:text-heading'}
                                        `} 
                                        type="text" 
                                        placeholder='Full Name*' />
                                        {/* Errors Message Here */}
                                        <p className='absolute top-full left-0 text-sm text-red-600'>{errors.name?.message}</p>
                                </div>
                                <div className='flex items-center gap-7.5 mt-10'>
                                    {/* Email Field Here */}
                                    <div className='w-[50%] relative'>
                                        <input 
                                            {...register('email', {
                                                required: 'Email is required',
                                                pattern: {
                                                value: /^\S+@\S+\.\S+$/,
                                                message: 'Invalid email address'
                                                }
                                            })}
                                            className={`text-[15px] font-medium leading-6.25 border-b outline-0 w-full pb-2.5 focus:text-heading focus:border-b-heading
                                                ${errors.email ? 'border-b-red-500 text-red-500 focus:border-b-red-500' : 'border-b-paragraph focus:border-b-heading'}
                                            `}
                                            type="email"
                                            placeholder='email here*'
                                        />

                                        {errors.email && (
                                            <p className="absolute top-full left-0 text-red-600 text-sm mt-1">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>
                                    {/* Subject Field Here */}
                                    <div className='w-[50%] relative'>
                                        <input 
                                            {...register('subject', {required: 'Subject field is required'})}
                                            className={`text-[15px] font-medium leading-6.25 border-b  outline-0 focus:text-heading focus:border-b-heading w-full pb-2.5 
                                                ${errors.subject ? 'border-b-red-500 text-red-500 focus:border-b-red-500' : 'border-b-paragraph focus:border-b focus:text-heading'}
                                            `} 
                                            type="text" 
                                            placeholder='subject*' />
                                            <p className='absolute top-full left-0 text-sm text-red-600'>{errors.subject?.message}</p>
                                    </div>
                                </div>
                                {/* Message Field Here */}
                                <div className='mt-10'>
                                    <textarea 
                                        {...register('message')}
                                        name="message" id="message" 
                                        className='text-[15px] font-medium leading-6.25 uppercase border-b border-b-paragraph outline-0 focus:text-heading focus:border-b-heading w-full pb-2.5' 
                                        type="text" 
                                        placeholder='write note*'></textarea>
                                </div>
                                {/* Submite BTN Here */}
                                <div>
                                    <button type='submit' className='about-btn mt-11.25 cursor-pointer'>
                                         <CustomBtn className="primary-btn" text={"Free Estimate"} />
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

export default ContactForm