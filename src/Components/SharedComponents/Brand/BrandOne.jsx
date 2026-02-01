import brand_img_1 from '../../../assets/img/brand/top-brand-h1-1.png'
import brand_img_2 from '../../../assets/img/brand/top-brand-h1-2.png'
import brand_img_3 from '../../../assets/img/brand/top-brand-h1-3.png'
import brand_img_4 from '../../../assets/img/brand/top-brand-h1-4.png'
import brand_img_5 from '../../../assets/img/brand/top-brand-h1-5.png'
import brand_img_6 from '../../../assets/img/brand/top-brand-h1-6.png'
import brand_img_7 from '../../../assets/img/brand/top-brand-h1-7.png'
import brand_img_8 from '../../../assets/img/brand/top-brand-h1-1.png'
import brand_img_9 from '../../../assets/img/brand/top-brand-h1-3.png'
import brand_img_10 from '../../../assets/img/brand/top-brand-h1-4.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
const BrandOne = () => {
    const brands = [
        brand_img_1,
        brand_img_2,
        brand_img_3,
        brand_img_4,
        brand_img_5,
        brand_img_6,
        brand_img_7,
        brand_img_8,
        brand_img_9,
        brand_img_10,
    ]
    // Slick Slider Function Here
    const settings = {
        dots: false,
        arrows: false,
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0, // 🔥 কোন delay নাই
        speed: 4000, // 🔥 যত বড় দিবে তত smooth হবে
        cssEase: "linear",  // 🔥 থামা ছাড়া চলবে
        pauseOnHover: false,
        pauseOnFocus: false,
        centerPadding: "60px",
        responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 7,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,

        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      }
    ]
    }
    return (
        <>
            <section className='bg-primary pl-20 py-8 overflow-x-hidden'>
                <Slider {...settings}>
                    {
                        brands.map((img, index) => (
                            <div key={index} className='flex items-center gap-26'>
                                <img src={img} alt="" />
                            </div>
                        ))
                    }
                </Slider>
            </section>
        </>
    )
}

export default BrandOne