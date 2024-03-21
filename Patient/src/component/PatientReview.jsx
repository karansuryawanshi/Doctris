import React from 'react'   
// import Slider from "react-slick";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PatientReview = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='flex items-center justify-center t-0 '>
      <div className='w-6/12'>
        <div className='pb-10'>
          <div className='flex items-center justify-center'>
              <p className='pb-5 text-4xl font-semibold'>Patients Says</p>
          </div>
          <div className='flex items-center justify-center'>
            <div className='w-10/12'>
                <p>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
            </div>
          </div>
        </div>
        <div>

        </div>
          <Slider {...settings}>
          <div className='w-100 h-100 bg-gray-100 rounded-lg p-4'>
            <p className='italic'>"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "</p>
            <div className='grid items-center justify-center py-10'>
              <img className='rounded-full w-24 h-24' src="https://images.unsplash.com/photo-1710900791793-487f655010f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p className='font-semibold text-blue-600'>- Karan Suryawanshi</p>
            </div>
          </div>
          <div className='w-100 h-100 bg-gray-100 rounded-lg p-4'>
            <p className='italic'>"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "</p>
            <div className='grid items-center justify-center py-10'>
              <img className='rounded-full w-24 h-24' src="https://images.unsplash.com/photo-1710900791793-487f655010f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p className='font-semibold text-blue-600'>- Karan Suryawanshi</p>
            </div>
          </div>
          <div className='w-100 h-100 bg-gray-100 rounded-lg p-4'>
            <p className='italic'>"It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. The most well-known dummy text is the Lorem Ipsum, which is said to have originated in the 16th century. "</p>
            <div className='grid items-center justify-center py-10'>
              <img className='rounded-full w-24 h-24' src="https://images.unsplash.com/photo-1710900791793-487f655010f7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <p className='font-semibold text-blue-600'>- Karan Suryawanshi</p>
            </div>
          </div>
      </Slider>
      </div>
    </div>
  )
}

export default PatientReview
