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
    doctorName:"Dr Karan Suryawanshu",
    specialist:"M.B.B.S, Dental"
  },
  { 
    doctorName:"Dr Sai Suryawanshi",
    specialist:"M.B.B.S, Orthopedic"
  },
  { 
    doctorName:"Dr guru deore",
    specialist:"M.B.B.S, Psychotherapist"
  },
  { 
    doctorName:"Dr Govind Desele",
    specialist:"M.B.B.S, Eye Care"
  },
]


const Departments = () => {
  return (
    <div className='w-full h-full mt-10'>
        <div className='text-sm flex items-center justify-center'>
            <p className='border border-blue-300 font-semibold text-blue-600 px-3 py-auto bg-blue-100 rounded-full '>Departments</p>
        </div>
        <div className='flex flex-col items-center font-semibold justify-center'>
            <p className='py-5 text-2xl font-sans'>Our Medical Services</p>
            <p className='w-5/12 font-sans font-normal text-sm text-gray-600'>Great doctor if you need your family member to get effective immediate assistance, emergency<span className='flex items-center justify-center'> treatment or a simple consultation.</span></p>
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
              <p className='py-5 text-2xl font-sans'>Our Medical Services</p>
              <p className='w-5/12 font-sans font-normal text-sm text-gray-600'>Great doctor if you need your family member to get effective immediate assistance, emergency<span className='flex items-center justify-center'> treatment or a simple consultation.</span></p>
          </div>
          <div className='flex items-center justify-center pt-10'>
            <div className='w-10/12'>
              <div className="grid grid-cols-4 gap-4">
                {DoctorData.map((item)=>{
                  return(
                    <div class="border-2 border-gray-100 rounded-lg w-64 h-max">
                      <DoctorDetail 
                      doctorName={item.doctorName} 
                      specialist={item.specialist}/>
                      </div>
                  )
                })}
              </div>
                <div className='flex items-center justify-center py-10'>
                  <button className='border bg-blue-600 text-white rounded-lg px-6 py-2'>See More</button>
                </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center pb-40'>
          <div className=' w-9/12 z-10 pb-96'>
            <img className='rounded-xl' src="https://doctris-react-landing.vercel.app/static/media/01.a38624f9facdafface04.jpg" alt="" />
          </div>
          <div before=" " className='mt-60 absolute content-none bg-blue-500 w-full min-h-96 before:content-[attr(before)]'	>
            Hello
          </div>
        </div>
    </div>
  )
} 

export default Departments
