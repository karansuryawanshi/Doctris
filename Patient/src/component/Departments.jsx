import React from 'react'
import Category from './Category'
import DoctorDetail from './DoctorDetail'

const CategoryData = [
  {
    icon:"ion:eye-sharp",
    title:"Eye Care",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente tenetur magnam autem vero eaque."
  },
  {
    icon:"ri:psychotherapy-fill",
    title:"Psychotherapy",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente tenetur magnam autem vero eaque."
  },
  {
    icon:"material-symbols:stethoscope",
    title:"Primary Care",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente tenetur magnam autem vero eaque."
  },
  {
    icon:"mingcute:dental-line",
    title:"Dental Care",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente tenetur magnam autem vero eaque."
  },
  {
    icon:"mdi:microscope",
    title:"Orthopedic",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente tenetur magnam autem vero eaque."
  },
  {
    icon:"f7:waveform-path-ecg",
    title:"Cardiology",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente tenetur magnam autem vero eaque."
  },
  {
    icon:"mingcute:apple-line",
    title:"Nutritionists",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente tenetur magnam autem vero eaque."
  },
  {
    icon:"icon-park-outline:connection-point",
    title:"Neurology",
    description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sapiente tenetur magnam autem vero eaque."
  }
]

const DoctorData = [
  {
    doctorName:"Dr Karan Suryawanshi",
    specialist:"M.B.B.S, Dental",
    img:"https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg"
  },
  { 
    doctorName:"Dr Sai Suryawanshi",
    specialist:"M.B.B.S, Orthopedic",
    img:"https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    doctorName:"Dr guru deore",
    specialist:"M.B.B.S, Psychotherapist",
    img:"https://plus.unsplash.com/premium_photo-1661281397737-9b5d75b52beb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
  },
  { 
    doctorName:"Dr Govind Desele",
    specialist:"M.B.B.S, Eye Care",
    img:"https://plus.unsplash.com/premium_photo-1661764878654-3d0fc2eefcca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGRvY3RvcnxlbnwwfHwwfHx8MA%3D%3D"
  },
]


const Departments = () => {
  return (
    <div className='w-full h-full mt-10'>
        <div className='text-sm flex items-center justify-center'>
            <p className='border border-blue-300 font-semibold text-blue-600 px-3 py-auto bg-blue-100 rounded-full '>Departments</p>
        </div>
        <div className='flex flex-col items-center font-semibold justify-center'>
            <p className='py-5 text-4xl'>Our Medical Services</p>
            <p className='w-5/12 font-normal text-lg text-gray-600'>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
        </div>
        <div className='flex item-center justify-center pt-10'>
          <div className="grid grid-cols-4 gap-4 w-10/12 ">
            {CategoryData.map((item)=>{
              return(
                <div class=" p-4">
                <Category
                title={item.title}
                icon={item.icon}
                description={item.description}/>
              </div>
              )
            })}
          </div>
        </div>
        <div className='py-10'>
          <div className='flex flex-col items-center font-semibold justify-center'>
              <p className='py-5 text-4xl'>Doctors</p>
              <p className='w-5/12 font-normal text-lg text-gray-600'>Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.</p>
          </div>
          <div className='flex items-center justify-center pt-10'>
            <div className='w-10/12'>
              <div className="grid grid-cols-4 gap-4">
                {DoctorData.map((item)=>{
                  return(
                    <div class="border-2 border-gray-100 rounded-lg w-64 h-max">
                      <DoctorDetail 
                      doctorName={item.doctorName} 
                      specialist={item.specialist}
                      img={item.img}/>
                      </div>
                  )
                })}
              </div>
                <div className='flex items-center justify-center py-10'>
                  <button className='border bg-blue-600 text-white text-lg rounded-lg px-6 py-2'>See More</button>
                </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className=' w-9/12 z-10 mb-64'>
            <img className='rounded-xl' src="https://doctris-react-landing.vercel.app/static/media/01.a38624f9facdafface04.jpg" alt="" />
          </div>
          <div before=" " className='mt-60 absolute content-none bg-blue-500 w-full min-h-96 before:content-[attr(before)]'	>
            <div className='flex items-center justify-center pt-96 space-x-40 py-10 '>
              <div className='text-white'>
                  <p className='font-bold text-5xl'>99%</p>
                  <p className='font-bold text-xl'>Positive feedback</p>
                  <p className='font-base font-base text-gray-200'>From Doctors</p>
              </div>
              <div className='text-white'>
                  <p className='font-bold text-5xl'>25+</p>
                  <p className='font-bold text-xl'>Experienced Clinics</p>
                  <p className='font-base font-base text-gray-200'>High Qualified</p>
              </div>  
              <div className='text-white'>
                  <p className='font-bold text-5xl'>1,251+</p>
                  <p className='font-bold text-xl'>Questions & Answers</p>
                  <p className='font-base font-base text-gray-200'>Your Questions</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
} 

export default Departments
