import React, { useState, useEffect } from 'react'
import {Icon} from "@iconify-icon/react" 
import ReactStars from "react-rating-stars-component";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { makeAuthenticatedGETRequest } from '../utils/server';
import { useNavigate } from 'react-router-dom';

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


const LoggedinHome = () => {
    const [scrolled, setScrolled] = useState(false);
    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > false) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const navigate = useNavigate(); 

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const ratingChanged = (newRating) => {
        console.log(newRating);
      };

      var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      useEffect(() => {
        const fetchData = async () => {
            const response = await makeAuthenticatedGETRequest("/doctorauth/get/doctor/me");
            console.log("******response****",response.data)
            if(!response){
                console.log("not response")
            }
            else(
                console.log("response gained")
            )
        };
        fetchData();
      }, []);
  return (
    <div className='w-screen h-screen'>
        <div className='w-full h-full hue-rotate-15' style={{ backgroundImage: 'url("https://doctris-react-landing.vercel.app/static/media/01.a38624f9facdafface04.jpg")'}}>
        {/* <div className='w-screen h-screen opacity-75 brightness-50 hue-rotate-15 bg-[url("https://doctris-react-landing.vercel.app/static/media/01.a38624f9facdafface04.jpg")]'> */}
        <div className='w-screen h-screen backdrop-brightness-50' style={{ backgroundColor: 'rgba(140, 192, 229, 0.3)'}}>
            <div className='nav h-20 w-full sticky top-0'>
                <div className= {`text-sm font-semibold text-gray-300 duration-300  flex${scrolled ? " bg-gray-200 text-gray-900 sticky top-0" : ""}`}>
                    <ul className='flex space-x-8 p-8  w-8/12'>
                        <li className='cursor-pointer'><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAWCAYAAADzeqMPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0ODI2M0RBMDlBNDExRURBM0FGQ0E4MUY3QkMwMjVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0ODI2M0RCMDlBNDExRURBM0FGQ0E4MUY3QkMwMjVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjQ4MjYzRDgwOUE0MTFFREEzQUZDQTgxRjdCQzAyNUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ4MjYzRDkwOUE0MTFFREEzQUZDQTgxRjdCQzAyNUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GDWK8AAAJT0lEQVR42uxaC5BWZRl+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" alt="" /></li>
                        <li className='cursor-pointer'>HOME</li>
                        <li className='cursor-pointer'>APPOINTMENT</li>
                        <li className='cursor-pointer'>PATIENT</li>
                        <li className='cursor-pointer'>PHARMACY</li>
                        <li className='cursor-pointer'>PAGES</li>
                    </ul>
                    <ul className='w-4/12 flex justify-end space-x-8 mr-32 p-6 \'>
                        <li className=''><Icon className='text-3xl p-1 rounded-full text-white bg-blue-600 duration-300 cursor-pointer hover:bg-blue-700' icon="system-uicons:settings"></Icon></li>
                        <li><Icon className='text-3xl p-1 rounded-full text-white bg-blue-600 duration-300 cursor-pointer hover:bg-blue-700' icon="system-uicons:search"></Icon></li>
                        <li><img className='w-10 h-10 rounded-full text-white bg-blue-600 duration-300 cursor-pointer hover:bg-blue-700' src="https://plus.unsplash.com/premium_photo-1712160362268-68616bf1c0d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHx8" alt="" /></li>
                    </ul>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <div className='w-7/12 mt-40 space-y-6'>
                    <div className='flex-col'>
                        <div className='w-7/12'>
                            <img className='w-10 h-10' src="https://doctris-react-landing.vercel.app/static/media/logo-icon.22a229d806c0a3c4c95a.png" alt="" />
                        </div>
                        <div className=' w-1/2 font-bold text-white text-6xl'>
                            Meet the Best Doctor
                        </div>
                        <div className='w-7/12 '>
                            <p className='text-gray-300 text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, unde. Velit nobis quis quam quibusdam fugiat placeat vitae.</p>
                        </div>
                        <div className='space-y-2'>
                            <div>
                                <button className='bg-blue-500 text-white px-2 py-2 rounded-lg'>Make Appointment</button>
                            </div>
                            <div>
                                <p className='text-gray-300 text-lg'>T&C apply. Please read Terms and Conditions</p>
                            </div>
                        </div>
                    </div>
                    <div className='w-full bg-white flex rounded-xl'>
                        <div className='w-1/3 bg-gray-100 p-4 rounded-l-xl space-y-2'>
                            <div>
                                <Icon className='text-blue-500 text-4xl' icon={"ph:heartbeat-fill"}></Icon>
                            </div>
                            <div>
                                <p className='text-2xl font-bold text-gray-800'>Emergency Cases</p>
                            </div>
                            <div>
                                <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure impedit dolores molestias!</p>
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <p className='text-lg text-blue-600'>Read More </p>
                                <span className='pt-2'> <Icon className='text-lg px-2 text-blue-600' icon={"ph:arrow-right-light"}></Icon> </span>
                            </div>
                        </div>
                        <div className='w-1/3  p-4 rounded-l-xl space-y-2'>
                            <div>
                                <Icon className='text-blue-500 text-4xl' icon={"ph:heartbeat-fill"}></Icon>
                            </div>
                            <div>
                                <p className='text-2xl font-bold text-gray-800'>Emergency Cases</p>
                            </div>
                            <div>
                                <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure impedit dolores molestias!</p>
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <p className='text-lg text-blue-600'>Read More </p>
                                <span className='pt-2'> <Icon className='text-lg px-2 text-blue-600' icon={"ph:arrow-right-light"}></Icon> </span>
                            </div>
                        </div>
                        <div className='w-1/3 bg-gray-100 p-4 rounded-r-xl space-y-2'>
                            <div>
                                <Icon className='text-blue-500 text-4xl' icon={"ph:heartbeat-fill"}></Icon>
                            </div>
                            <div>
                                <p className='text-2xl font-bold text-gray-800'>Emergency Cases</p>
                            </div>
                            <div>
                                <p className='text-gray-600 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure impedit dolores molestias!</p>
                            </div>
                            <div className='flex items-center cursor-pointer'>
                                <p className='text-lg text-blue-600'>Read More </p>
                                <span className='pt-2'> <Icon className='text-lg px-2 text-blue-600' icon={"ph:arrow-right-light"}></Icon> </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='flex items-center justify-center'>
                    <div className='mt-20 w-9/12 flex'>
                        <div>
                            <img className='w-11/12' src="https://doctris-react-landing.vercel.app/static/media/about-2.4f696a42c208855604fb.png" alt="" />
                        </div>
                        <div className='w-1/2 grid items-center py-40'>
                            <div>
                                <p className='text-4xl font-semibold'>About Our Treatments</p> 
                            </div>
                            <div className='text-gray-700'>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum ex fugiat saepe porro temporibus, voluptas error quod maiores! Dolorem, praesentium.
                            </div>
                            <div className='text-gray-700'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium eius reprehenderit id, repudiandae delectus perferendis tenetur, quibusdam nesciunt, amet culpa molestias. Explicabo ad tempore sint excepturi suscipit eius incidunt cumque.
                            </div>
                            <div>
                                <button className='bg-blue-600 flex text-white px-4 py-2 rounded-lg'> <p> Read More</p><span className='pt-1'> <Icon className='text-lg px-2 text-white font-semibold' icon={"ph:arrow-right-light"}></Icon> </span> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center py-6'>
                    <div className='w-9/12 space-y-8'>
                        <div className='flex items-center justify-center'>
                            <p className='border text-blue-600 px-3 border-blue-500 rounded-xl font-semibold bg-blue-200 text-sm'>Departments</p>
                        </div>
                        <div className='flex items-center justify-center '>
                            <p className='text-4xl font-semibold'>Our Medical Services</p>
                        </div>
                        <div className='flex items-center justify-center'>
                            <p className='w-7/12 text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reiciendis beatae molestiae architecto quos ea. Aliquam necessitatibus natus repudiandae. Incidunt?</p>
                        </div>
                        <div className='grid grid-cols-4 gap-4'>
                        {CategoryData.map((item)=>{
                            return(
                            <div className='space-y-3'>
                                <div className='w-12 h-12 rounded-lg bg-blue-200 flex items-center justify-center'>
                                    <Icon className='text-3xl text-blue-800' icon={item.icon}></Icon>
                                </div>
                                <div>
                                    <p className='text-xl font-semibold'>{item.title}</p>
                                </div>
                                <div>
                                    <p className='text-base text-gray-600'>{item.description}</p>
                                </div>
                                <div className='flex'>
                                    <p className='text-blue-600 '>Read More </p>
                                    <span className='pt-1 text-blue-600'> <Icon icon={"ph:arrow-right-light"}></Icon></span>   
                                </div>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center py-6'>
                    <div className='w-9/12 space-y-8'>
                        <div className='flex items-center justify-center'>
                            <div>
                                <div className='flex items-center justify-center '>
                                    <p className='text-4xl font-semibold'>Doctors</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <p className='w-7/12 text-lg text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas reiciendis beatae molestiae architecto quos ea. Aliquam necessitatibus natus repudiandae. Incidunt?</p>
                                </div>
                                <div className='grid grid-cols-4 gap-8 pt-4'>
                                    <div className='border'>
                                        <div>
                                            <img src="https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg" alt="" />
                                        </div>
                                        <div className='p-4'>
                                            <div className=''>
                                                <p className='font-semibold text-xl'>Calvin Carlo</p>
                                                <p className='text-sm font-thin'>Eye Care</p>
                                            </div>
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    onChange={5}
                                                    size={20}
                                                    activeColor="#f1b561"
                                                />
                                            </div>
                                            <div className='space-y-2 pt-2'>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"carbon:location"}></Icon> <p className='text-gray-600'>63, PG Shustoke, UK</p></div>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"tabler:clock"}></Icon> <p className='text-gray-600'>Mon: 2:00PM - 6:00PM</p></div>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"uil:usd-circle"}></Icon> <p className='text-gray-600'>$ 75 USD / Visit</p></div>
                                            </div>
                                            <div className='flex space-x-3 pt-2'>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"iconoir:facebook"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"basil:linkedin-outline"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"teenyicons:github-outline"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"teenyicons:twitter-outline"}></Icon></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border'>
                                        <div>
                                            <img src="https://doctris-react-landing.vercel.app/static/media/02.38e00cf46dc0cbd9fed3.jpg" alt="" />
                                        </div>
                                        <div className='p-4'>
                                            <div className=''>
                                                <p className='font-semibold text-xl'>Calvin Carlo</p>
                                                <p className='text-sm font-thin'>Eye Care</p>
                                            </div>
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    onChange={5}
                                                    size={20}
                                                    activeColor="#f1b561"
                                                />
                                            </div>
                                            <div className='space-y-2 pt-2'>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"carbon:location"}></Icon> <p className='text-gray-600'>63, PG Shustoke, UK</p></div>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"tabler:clock"}></Icon> <p className='text-gray-600'>Mon: 2:00PM - 6:00PM</p></div>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"uil:usd-circle"}></Icon> <p className='text-gray-600'>$ 75 USD / Visit</p></div>
                                            </div>
                                            <div className='flex space-x-3 pt-2'>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"iconoir:facebook"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"basil:linkedin-outline"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"teenyicons:github-outline"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"teenyicons:twitter-outline"}></Icon></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border'>
                                        <div>
                                            <img src="https://doctris-react-landing.vercel.app/static/media/05.e4b5d05f3ab9e6bad04a.jpg" alt="" />
                                        </div>
                                        <div className='p-4'>
                                            <div className=''>
                                                <p className='font-semibold text-xl'>Calvin Carlo</p>
                                                <p className='text-sm font-thin'>Eye Care</p>
                                            </div>
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    onChange={5}
                                                    size={20}
                                                    activeColor="#f1b561"
                                                />
                                            </div>
                                            <div className='space-y-2 pt-2'>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"carbon:location"}></Icon> <p className='text-gray-600'>63, PG Shustoke, UK</p></div>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"tabler:clock"}></Icon> <p className='text-gray-600'>Mon: 2:00PM - 6:00PM</p></div>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"uil:usd-circle"}></Icon> <p className='text-gray-600'>$ 75 USD / Visit</p></div>
                                            </div>
                                            <div className='flex space-x-3 pt-2'>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"iconoir:facebook"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"basil:linkedin-outline"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"teenyicons:github-outline"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"teenyicons:twitter-outline"}></Icon></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='border'>
                                        <div>
                                            <img src="https://doctris-react-landing.vercel.app/static/media/04.f645789423636f851180.jpg" alt="" />
                                        </div>
                                        <div className='p-4'>
                                            <div className=''>
                                                <p className='font-semibold text-xl'>Calvin Carlo</p>
                                                <p className='text-sm font-thin'>Eye Care</p>
                                            </div>
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    onChange={5}
                                                    size={20}
                                                    activeColor="#f1b561"
                                                />
                                            </div>
                                            <div className='space-y-2 pt-2'>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"carbon:location"}></Icon> <p className='text-gray-600'>63, PG Shustoke, UK</p></div>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"tabler:clock"}></Icon> <p className='text-gray-600'>Mon: 2:00PM - 6:00PM</p></div>
                                                <div className='text-sm flex space-x-2'><Icon className='text-blue-500 text-lg ' icon={"uil:usd-circle"}></Icon> <p className='text-gray-600'>$ 75 USD / Visit</p></div>
                                            </div>
                                            <div className='flex space-x-3 pt-2'>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"iconoir:facebook"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"basil:linkedin-outline"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"teenyicons:github-outline"}></Icon></div>
                                                <div className='border rounded-full items-center justify-center px-1 bg-blue-100 cursor-pointer duration-300 hover:bg-blue-600'><Icon className='text-xl p-2 text-blue-600 font-semibold duration-300 hover:text-white' icon={"teenyicons:twitter-outline"}></Icon></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <div className='flex items-center justify-center pt-6'>
                                        <button className='px-4 py-2 bg-blue-600 text-lg text-white rounded-lg duration-300 hover:bg-blue-700'>See More</button>
                                    </div>
                                    <div className='flex items-center justify-center pt-8'>
                                        <div className=' z-10 mb-64'>
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
                            </div>
                        </div>
                        <div className='flex items-center justify-center t-0 '>
                            <div className='w-8/12'>
                                <div className='pb-10'>
                                <div className='flex items-center justify-center'>
                                    <p className='pb-5 text-4xl font-semibold'>Patients Says</p>
                                </div>
                                <div className='flex items-center justify-center'>
                                    <div className='w-10/12'>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque maiores sed, velit eos ipsa magni quas deserunt repellendus doloribus ipsum!</p>
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
                    </div>
                </div>
                    <div>
                        <div className='bg-gray-100 w-full h-24 mt-8 flex fles items-center justify-center'>
                            <div className='w-9/12 flex items-center justify-center space-x-24'>
                                <img className='w-32 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjU5MUMzRTE0NTZFRTExRUI5RTNDQTg1MjE2NzU4NThFIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjU5MUMzRTE1NTZFRTExRUI5RTNDQTg1MjE2NzU4NThFIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTkxQzNFMTI1NkVFMTFFQjlFM0NBODUyMTY3NTg1OEUiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NTkxQzNFMTM1NkVFMTFFQjlFM0NBODUyMTY3NTg1OEUiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5zv56LAAAEGklEQVR42uyd23HjMAwADY+7TAEpIHWkgBSQOnH36cnNxZII4rk7k484pvgS1pBFMaKqNwCACjyiG/D59W1xmGfrSsHyACX5eH9zre/eYMz0xe/ZywPAEGHpydezlQeAIcLS4n8HgCHCUoP3yUJ5NW4nADQVlhq+/4q0dHN7AaCJsHRDuTPSUud2A0BRYenG8hJcPwA0EpY6HEcK9QMAYRWWlZwQzi5pHW0D0gJoKqyjsjorHGtpnW0D0gJoJqyzsoqS1tU2IC2AJsK6KivLelaPj7QABghrVVbR67SQFsAQYXnLCmkBFOKRqC1RsnouL7/Uq4HlvcZ35+X3lXbIhuOLcbnIvlrE0HK/P7++X9b78f5mcg5lybCiZUWm9bpdGnAMNaq7wnit9jNkjI7IqtsloYesPNdpdb48vBpU6nSedBF7hbEJ+SAJFdZBO1vI6mzajbRs2md9UmuDMbEet1Hff4YJK0BWSMs3QLWAGLK3Keuea2FzECKsQFlZTgzS6ieIrpeqZFiFZcU6rf3BqkNEoc3HON24uwqroKyQFhkHY5oIt3VYhWX1XL7zOq2f4+cVJLIwTx5jYnU+ifH5eLVeF6zWXYVkWA1kNTHT8lgoKSder4pVP9VpDtPKykVYhWTF3UO/9ojTfGSQVUqpVGWrsArKCmntryc6QNWgn1pkTNqtfr9HNvpF6hiVWSGtPZlptkDe/diP5/eN2bLGWhlWYVlNl1b1IK4MWVaEsBrIikyLwO/W15BL2B3SunN+AyDBKpgL68gtzRfm9chKjnzqWGRqVR5B8grkimuPsstqVJa1JcNqIC1kBd5k2WBxVobVQFrIam+QqGMQS2D5CbtKuJ+DW7/DOrjiNZO0kFWeE9X75smOY3ruaZV2VbvlZeE9Q4eSSQtZXc86zoy1OmcCYvg+K/HqLcd6Ny4Ji0pruqx+e+ZtR936n59uWPfzZ3mvcfun3rZ7ujeQ1pTMShYl5ZkJVLpD6iGQ7vX6rsMqLC3uBuZDBrWh9Pxb7t5wT9r4TNJCVsMCrPFYlp+XkJXuTb7TQlZxbRf6OZOwR3OK3z1EVnEBJ/SzzrhZb+YX+ixhUWkhq5hAyb4Tqdx87kaPlVW4sBylYyUtZBUTzFKsr5mk3Gqb5EeiSY78Jw5Hyq+eHNGyynZXTQPaK036KYbHFct6d+7nnklYHaRFZtU3a8rYzxQ7jv4VlGvl94KTO22dFgAkFVZFaSErgMHCspDObbF8hnVaAFBEWCvSstpvKXKdFgAUE9YVaV3JurKt0wKAosI6I63V7TospIWsAIYLyyvIo/fTAoAmwrII9sz7aQFAM2GtBL0ESwtZAQwU1pXgl+BMC1kBDBbWGQlI8OUhsgJAWIdkkP3vADBIWKsZVIbyAHCCPwIMANvv0fF1xef1AAAAAElFTkSuQmCC" alt="" />
                                <img className='w-32 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjYxMTc1N0IwNTZFRTExRUJBRUFDRDkwRjEzNkNFOTQyIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjYxMTc1N0IxNTZFRTExRUJBRUFDRDkwRjEzNkNFOTQyIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjExNzU3QUU1NkVFMTFFQkFFQUNEOTBGMTM2Q0U5NDIiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjExNzU3QUY1NkVFMTFFQkFFQUNEOTBGMTM2Q0U5NDIiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5qD4gfAAADnklEQVR42uyd623DMAwGQ8NbdoAO0Dk6QAfonGz7LyiCPGyR4kfdAQGaAjFlWTxTfpq7XwAAFNhnN+Dz61u1765NbwwlWJGP97fUeBtdflpWt74DAMIqKSukBYCwpGSFtAAQlpSskBYAwpKSFdICQFhSskJaAAhLSlbXv0dcAAirvKyotgAGs9MFaYL5W6YNjMnFqkCFBaHVEJUWAMKSEgrSAkBYUiJBWgAIK1Ugdjl3HAlpASCsNFnd+htpASCssrJCWgAIS0pWSAsAYUnJaoS0AABhhcnKL7dvvUFaAAirnKzufUdaAAGsdGtOlKyu////7CHHpsZvMxOMQZ8jrFKyWkFaI9fDTsQa9fKP0TF84PqP7H8bsOwyL1xZYUqYJSumh+cT6NXH8Rx5fE9GjGeX6YL5MbXN3YWVLSukVaOCi4jhgW1ysT6fJq2NBBguK6TVU3bd1sEV+3xjAIfICmm9Nh30hG3uBZKcPENYZWWFtJBA1b6Q7fONDR4qK6SVu84ZL7n1gmN4GToJq6qsukjL7nyy4qrHmLF9Qvvj8+s7VbBdhFVdVqtXWiaS9NExTDBXSo3RDsJSkdVoablw/z/7W0toX3ZCWvFtW3onqi4sNVl1lVZmAlSosryzFBAWsuoqLW8yLjrgNz7t2IU3Tras7v3+6LJH3Xv46J2HAGcrwhICVKyw1CurlaaHSBSWFlY3WSlLi+uFAGEtKKuulRbVFSwrrO6yUpMW1RVMQeGge9UbmaMSuMOBeKqrXpTZQe0NO0qxsoqS1orV1aqyXGK99+JJW0lWEZc1REtrRpVlxcbF0X6LXEem1Aepegxr1crqUfutWXJYgbZXfHAeU2ohYSGrutJywbFRKUaFMfnqTqJUHk2bEg58LEVnWY2eHmbszUdPp7pUWbPO3Ibu4D7e31KrwSkVFrKaVmmdGZxR/WoJy7Ki7WU6WL3CEpaVT0jmiErrmeVCzenayDiSO/at0YZd5czLjIcAukCiWoEYCLaTsAZVVyvLKlJanGpfK/lNrL25wkJWstJygQSyQjGOLFftjoRplWaKsJAVlVZQ8h5J9owY1UV1ZsxMbbPKA/ysYucV7iufOKBHxoy8FGN0DOWzh/Zgh1Umz1KEde9ajd/qC8VoDe5u68FOT6g/NrYPAKiAsABAp/xzjz/Gmv12WADIJ+M2nXBhISsAxCVVYT0QGlsYQFdOqfE4hgUAMgyvsJgCAkDU9PBHgAEAQaI2G54E370AAAAASUVORK5CYII=" alt="" />
                                <img className='w-32 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY5NkEzRTI1NTZFRTExRUJCNzIxOEFCMTU5Q0E4OTVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY5NkEzRTI2NTZFRTExRUJCNzIxOEFCMTU5Q0E4OTVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6Njk2QTNFMjM1NkVFMTFFQkI3MjE4QUIxNTlDQTg5NUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6Njk2QTNFMjQ1NkVFMTFFQkI3MjE4QUIxNTlDQTg5NUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6GcnpyAAACcUlEQVR42uzdUU6FMBBGYUvYpQtwAa7DBbgA11mN8cGYaLwXWuaH7zz5wIXSmR5mgGDrvT8AQALrPT96eX37tNzz02P7+NssAriLD4fctP2y5WBf4lKiAZjCstN+iAtAjLCIC0CcsIgLQJywiAtAnLCIC0CcsIgLQJywiAtAnLC+iwsAIoSl2gIQJSziAhAnLOICECcsACAsANmsBcfUhAVAQoVFVgDKV1hEBaC8sIgKQHlhERW6HEF1YUnC2xbtLfNWdV/37Pfntm3H/bcJ590Hroc+aT32iut8lrCICn3jb+VQZqx3jdvop4RNop1KHEnHRJ182y3+o4RFVCAr7J4HewuLqEiErDAsH5ZJg5S4ADZLa5k8UOLSqgERwiIuQgQ25cZaYNDueR0bgwrz38gO1YVFXPgt7o24hszr6OMMj5dPJKMXX3SePJNkSWERF4A4YSVc+VVZ4gzCAmEChIX50mgHHx8nZDUFKCZNN9jHX4DaAcc8tbAk7XWF4TUX7XxMS+gR9rloKQsBGXlxxX9C0cPGm37FbBv2qUVEqQrrr4rK+1hQaamuSggrXVT9ismiIsXRebAUEoCKSrKqssS/tLBI6lrVDmnhFBVWIhbQ/rcDgD/x4uh1pdEDx+CpYUYlrcJSZVlUsFYIiyyMAzHxW00wtKiYWGVFvocF8tbGg7BQUhD9H9sQmQuflhBl2rFKX2H42Zr0gxbnyE/A9MnnMqUtJCxctZJRUQVe+LSEqFL1wEWLsHApsRLvySEsWOzmKGZ+CAsWA2LaQsLC2WTVCoxBrFRYuGgV0wqcB1kVqbIIC2cVaCswBnHbmXcBBgD2J4dOXBKC2QAAAABJRU5ErkJggg==" alt="" />
                                <img className='w-32 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjlBNEEyODNDNTZFRTExRUI5QTRCODUwQ0RFNkQyQ0VDIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjlBNEEyODNENTZFRTExRUI5QTRCODUwQ0RFNkQyQ0VDIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6OUE0QTI4M0E1NkVFMTFFQjlBNEI4NTBDREU2RDJDRUMiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OUE0QTI4M0I1NkVFMTFFQjlBNEI4NTBDREU2RDJDRUMiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4XZ5UvAAADM0lEQVR42uzd0Y3bMBBFUdNwly7ABbiOFJACUieTfCQwAmSzijnUcHgusH9riUNKV8+UTLXe+wUAVuB2dgO+fP32zsd/2bYFNS96+8DSPB/3qfu7Fum3vsg2AWwqrF50XwCKJ6zRUiEogLCWFgqJAYSVTirEBBBWiaRDZgBhpZEKIQGEVSrhkBpAWKdLhYgAwiqZbMgNIKzTpEJAAGGVTjQkBxDWdKkQD0BYWyQZsgMIa5pUCAcgrK0SDOkBhBUuFaIBCGvL5EJ+gIQVJhWCAQhr68RCgkAwt83qPSqVtoCI+sF6Rn12tLRHbr8N/mzWOkfv93BbPnqJzPNxH/7ylmuBEzD6jTYtqO27XwxW7btV65y+IMAPmQ2v9XrB6CsSWaFCf6Vs43XhTmoT5SJlzam3J+6/fln/RSefrWFY236mrJFJS8KSriQr/bfMmF4X7ah2gmSkrHk1ZkpafUKtWWoKa8uopCVhSVfAMmQR1qjb61JWzgvA659aC+0z4tEFCUu6AiSsZOlKygKKc9MF0pV+2a7WZes8VVgH7xq0g//bgwf8s9vvZHhKv5PVJGbOY5nD2ov+x9+KJ3H7jzr7gnVmHtPf+4v4+U1KYQWmq8tlztxR9bmslrxtbYM6pUgJq5RUHNjq3KrWU4QVnK6yHgTdgZ2qrWRFWMsnJSlrzZOx7XoC78Z0YRVKV1VTVg/Y3pFJYeQfUwkr0cA4qfSBMSWskumqasoiLdJKyc1g/HVbFec5jq7p7qFXY/rhPp+Pe01hFU5Xr22u+PQ7adVMWu2Mc/vdp+KvhQZAfPZVAsXHdIqwCjzVHtF2EgA2TVg7yBDYnvA5rITpykoO514kKl8EdrnA9ZfzW8JKkq6kLGAgI5ahCRVW4rkrq5LiyFi2JMdK1ov6FFntlLDe7SxSQXVZhbVp5AJ/YcJa4M6glIUzk1aVVUimyWqXhDWqw0gFO8hqWBsjlk4OuUuYLF31kwfdHcN6ssk8f5qi1qh13r0157j8WsKDaqXPtoT9sPJ0QnTb2j/ENPVgH/6VMPh3RdXXRve1E5gprE1SFoDVhSVdSVmAhCVlARgpLOlKygKi+S7AAGXxCMDjV0fjAAAAAElFTkSuQmCC" alt="" />
                                <img className='w-32 h-8' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAA8CAYAAADc3IdaAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkEwQURBNTAzNTZFRTExRUJBRTk3QTEyQzYzM0IwQ0U4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkEwQURBNTA0NTZFRTExRUJBRTk3QTEyQzYzM0IwQ0U4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QTBBREE1MDE1NkVFMTFFQkFFOTdBMTJDNjMzQjBDRTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QTBBREE1MDI1NkVFMTFFQkFFOTdBMTJDNjMzQjBDRTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz79OU7oAAADtElEQVR42uyd23GkMBBFuVvO0gE4AMfhAByA4+y1q/Znp2ZZJCT1Q+dU+cOeGQQacbgNAsvMDgCADLxk34CPz6+zl+/YWAwPqM7722uq9f1V+Lsw588DAMJaKhukBYCwAAAQ1oxURMoCQFgpZIW0ABAWAMDewrLkyweATYRlxdoBAEpCAEBYe6QrAHAm9a05H59f3HoDQMICAEBYpCsAIGEhKwCEVTFdPWIHJ+4BcqSNbA/wG1wKjtj41YnNgiVFG9gv9udzFrDfq/C0b9/fXlP05wvf35ABoMUyOBp2ajv5uyas17P3qOG91rgOmtS/vcJske6/lmcdr08JAtFElqokDJiuPJLLnWXogsxmlM+7ld300e7CCi4rS7QjqbOsso36ybMcteJ9t0/C2iARRT76z2xfjAEoI6xEpWAmadnA93mlHDn2HyCs4bLKPNC8U0fPSeOrErEbAlKAvlGisaWb31Uoql8llMOAGnnVUMf8RDhi51PHetvhfyGkdXxookRatr91XJSZAhI6YSW+/cbjaKvOI+esc0rV5kmpSBuXiTg3K2zCKlAKmvMAbD0K966vBvaRDs4PLZVZlgmj1UtCj1IwinhWCl1Jt9f7gHZ2cFDgfkJYxUpBr5QlBnW6A8uqW6ysUtlefR6WDRiEcl4Hj7ZHnYDOskPIcTn28AOZhDUwXdnAwZf1BHLG9bbk63X3ILdSXOkEyUx3iDbYq1xd1NF/5TalTBCWbynI4AFkjLCmiyqarDLOB5Nz+9WlJfqviLCyzQtZsOPvNmht4HJ2P6GtCz8IK7G0KpSCo3bQiuXLqhvfr/T/ipTV/dmfi1+DJ28PgSeOxi8FV82l6tl+79n80dKynfwetp/OxPTzWqSqJ+w5rGKl4d1yZlWqGiXcq+uiQH09u4/t6HsUNOUxCStNuorQL61PXZhdwow8x3Xns3Jot2cZp08w/U5QqQZk6KuEi1LW7rL638nXq6VQ65FbHSknciKu2BbCojRMI6rdUjUgLErBIjurBreNLBBtXWFNSlk7yuqOLDSx7ar3PCrgOEVYlIYpJCXn9jMK50weWrD9ImH9zcvGO3HkdDXyKZ4r1+tu23IcA7MlogXr/vhfpx+v8j4d95nCgMxyJcxBs29nPYYGIBXfsiJhrSwNs80jAYB+dr9KSLoCQFjICgAQFgBsTJWrhJ7/MRgASFhhQVYACAsAYA9hqVg7AEDCQlYACAuhAADCQoYAUFdYSrJMAEBYCAYAYVEKAkAAfgswAMknI4VwYGW/AAAAAElFTkSuQmCC" alt="" />                                </div>
                            </div>
                    </div>
                    <div>
                    <div className='feature-post'>
                        <div className='flex items-center justify-center bg-slate-800'>
                            <div className='flex w-11/12 m-10'>
                                <div className='w-1/2 text-white'>
                                    <div className='Logo text-white font-semibold text-3xl mb-6'>
                                        <img className='w-28' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAWCAYAAADzeqMPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJGRTA1NzQzMDlBNDExRURBNzhFRjBGOTA2NzkyOUNCIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJGRTA1NzQ0MDlBNDExRURBNzhFRjBGOTA2NzkyOUNCIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkZFMDU3NDEwOUE0MTFFREE3OEVGMEY5MDY3OTI5Q0IiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkZFMDU3NDIwOUE0MTFFREE3OEVGMEY5MDY3OTI5Q0IiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5myJ61AAAI/UlEQVR42uxaC3AV5RU+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" alt="" />
                                    </div>
                                    <div className='flex w-96 mb-8 text-lg text-gray-300 '>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nobis dolore placeat in sequi itaque quas sit ab est cupiditate!
                                    </div>

                                    <div className='text-lg mt-8 mb-5  text-gray-300 '>2024© Doctris. Design & Develop with 🙂 by Karan Suryawanshi.</div>
                                </div>
                                <div className='text-gray-300 flex space-x-28 mt-2'>
                                    <div className='space-y-3'>
                                        <div className='text-xl font-semibold text-white'>Company</div>
                                        <div>About us</div>
                                        <div>Services</div>
                                        <div>Team</div>
                                        <div>Project</div>
                                        <div>Blog</div>
                                        <div>Login</div>
                                    </div>
                                    <div className='space-y-3'>
                                        <div className='text-xl font-semibold text-white'>Pages</div>
                                        <div>Eye Care</div>
                                        <div>Psychotherapy</div>
                                        <div>Dental Care</div>
                                        <div>Orthopedic</div>
                                        <div>Cardiology</div>
                                        <div>Gynecology</div>
                                        <div>Neurology</div>
                                    </div>
                                    <div className='space-y-3'>
                                        <div className='text-xl font-semibold text-white'>Contact us</div>
                                        <div className='flex text-lg' > <Icon className='mr-2 mt-2' icon={"ep:message"}></Icon> contact@example.com</div>
                                        <div className='flex text-lg' > <Icon className='mr-2 mt-2' icon={"ph:phone"}></Icon> +152 534-468-854</div>
                                        <div className='flex text-lg' > <Icon className='mr-2 mt-2' icon={"carbon:location"}></Icon> View on Google map</div>

                                        <div className='flex space-x-4 pt-2'>
                                            <div className='border border-1 rounded-full cursor-pointer hover:bg-blue-900 duration-300 px-1'><Icon className='w-6 h-6 px-1 py-2' icon={"iconoir:facebook"}></Icon></div>
                                            <div className='border border-1 rounded-full cursor-pointer hover:bg-blue-900 duration-300 px-1'><Icon className='w-6 h-6 px-1 py-2' icon={"iconoir:instagram"}></Icon></div>
                                            <div className='border border-1 rounded-full cursor-pointer hover:bg-blue-900 duration-300 px-1'><Icon className='w-6 h-6 px-1 py-2' icon={"iconoir:twitter"}></Icon></div>
                                            <div className='border border-1 rounded-full cursor-pointer hover:bg-blue-900 duration-300 px-1'><Icon className='w-6 h-6 px-1 py-2' icon={"iconoir:linkedin"}></Icon></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex bg-slate-800 items-center justify-center'>
                        <div className=' border-t w-9/12 flex'>
                            <div className='py-6 text-gray-300 text-lg w-1/2'>
                                2024© Doctris. Design & Develop with 🙂 by Karan Suryawanshi.
                            </div>
                            <div className='w-1/2 flex items-center justify-end gap-4 text-gray-300'>
                                <p>Terms</p>
                                <p>Privacy</p>
                                <p>About</p>
                                <p>Contact</p>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
  )
}

export default LoggedinHome
