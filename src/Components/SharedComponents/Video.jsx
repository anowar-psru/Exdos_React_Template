import video_bg from '../../assets/img/Videos/video_img.jpg'
import video_icon from '../../assets/img/Videos/icon.png'

const Video = () => {
    return (
        <>
            <section className='bg-cover bg-center bg-no-repeat py-70.5' style={{backgroundImage: `url(${video_bg})`}}>
                <div className="container">
                    <div className='flex items-center justify-center'>
                        <img className='cursor-pointer' src={video_icon} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Video