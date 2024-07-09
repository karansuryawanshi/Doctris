import React from 'react'
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react'
import PosterFooter from './PosterFooter';
import Departments from './Departments';
import { useNavigate } from 'react-router-dom';
import serumLogo from "../assets/serumlogo.png";
import pharmaLogo from "../assets/PharmaLogo.png";
import ucbpharmaLogo from "../assets/ucbPharma.png";
import icbPharmaLogo from "../assets/icbPharma.png";
import paracetamol from "../assets/paracitamol.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const Header = ({userId, profileImage}) => {

    const navigate = useNavigate()
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    // const notify = () => toast("Wow so easy!");


    var settings = {
        dots: true,
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > false) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    const DashboardNavigate = ()=>{
        navigate('/patient/dashboard')
    }

    const ProfileNavigate = ()=>{
        navigate('/patient/profile/'+userId)
    }

    
  const deleteToken = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log("Cookie deleted successfully");
  };
    
  return (
    <>
    <div className='absolute z-10 w-full h-full'>
        <div className={`transition duration-200 flex${scrolled ? " bg-slate-100 sticky top-0" : ""}`}>
            <div className='w-7/12 h-20 flex items-center justify-center space-x-10'>
                <div>
                    <img className='w-28' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAAAWCAYAAADzeqMPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkI0ODI2M0RBMDlBNDExRURBM0FGQ0E4MUY3QkMwMjVEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkI0ODI2M0RCMDlBNDExRURBM0FGQ0E4MUY3QkMwMjVEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QjQ4MjYzRDgwOUE0MTFFREEzQUZDQTgxRjdCQzAyNUQiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QjQ4MjYzRDkwOUE0MTFFREEzQUZDQTgxRjdCQzAyNUQiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5GDWK8AAAJT0lEQVR42uxaC5BWZRl+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" alt="" />
                </div>
                <div className=''>
                    <ul className='flex text-sm text-zinc-700 space-x-8 font-semibold'>
                        <li className='cursor-pointer'onClick={()=>{navigate("/patient")}}>HOME</li>
                        <li className='cursor-pointer'onClick={()=>{navigate("/patient/appointment")}}>APPOINTMENT</li>
                        <li className='cursor-pointer'onClick={()=>{navigate("/patient/dashboard")}}>PATIENT</li>
                        <li className='cursor-pointer'
                            // onClick={notify}
                            >PHARMACY</li>
                        <li className='cursor-pointer'>PAGES</li>
                    </ul>
                </div>
            </div>
            <div className='w-5/12 flex items-center justify-center space-x-4'>
                <div className='cursor-pointer bg-blue-600 rounded-full p-1 hover:bg-blue-700 transition duration-200'>
                    <Icon className='text-3xl '
                        icon={"system-uicons:settings"}  
                        color='white'
                        />
                </div>
                <div className='bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700 transition duration-200'>
                    <Icon className='text-2xl'
                        icon={"system-uicons:search"}  
                        color='white'
                        />
                </div>
        <div className=''>
            <div id="dropdownToggle" className='w-10 h-10 rounded-full cursor-pointer bg-blue-600'>
                {profileImage ? (
                    <img className='rounded-full h-10 w-10' onClick={DashboardNavigate} src={profileImage} alt="" />
                ):(
                    <div className='flex items-center justify-center'><Icon className='text-3xl font-thin text-white mt-1' icon={"ph:user-thin"}></Icon></div>
                )}
                <ul className='w-16 h-16 space-y-2 bg-white rounded-lg shadow-md left-15 list-none  opacity-0 hover:opacity-100 px-0 top-full transition-all  duration-200 ease-in-out'>
                    <li className='pl-2 hover:text-black text-gray-600 font-semibold' onClick={ProfileNavigate}>Profile</li>
                    <li className='pl-2 hover:text-black text-gray-600 font-semibold'onClick={deleteToken}>Logout</li>
                </ul>
            </div>
        </div>
        </div>
        </div>
        <div className='flex md:mt-40 md:ml-64 w-96  '>
            <div className=''>
                <div>
                    <img className='h-12' src="https://doctris-react-landing.vercel.app/static/media/logo-icon.22a229d806c0a3c4c95a.png" alt="" />
                </div>
                <div className='text-6xl mt-5 font-bold text-white'>
                    Meet the <br /> Best Doctor
                </div>
                <div className=' text-gray-200 pt-10 font-medium text-base'>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Error velit quas ad vitae suscipit, incidunt obcaecati similique dignissimos ipsam veritatis!
                </div>
                <div>
                    <button className='border-2 border-blue-600 bg-blue-600 hover:bg-blue-700 duration-300 p-2 rounded-lg text-white mt-10'onClick={()=>{navigate("/patient/appointment")}}>Make Appointment</button>
                </div>
                <div className='text-gray-200 pt-5'>
                T&C apply. Please read Terms and Conditions
                </div>
            </div>
        </div>
            <div className='flex items-center justify-center mt-20'>
                <div className='flex rounded-lg w-8/12 min-h-max'>
                    <PosterFooter
                    icon={"ph:heartbeat-fill"}
                    head={"Emergency Cases"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veritatis numquam recusandae ut consequuntur vel ea tempore mollitia soluta sapiente!"}
                    background={"bg-gray-100 rounded-l-lg"}>
                    </PosterFooter>

                    <PosterFooter
                    icon={"map:doctor"}
                    head={"Doctor Timetable"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veritatis numquam recusandae ut consequuntur vel ea tempore mollitia soluta sapiente!"}
                    background={"bg-white"}>
                    </PosterFooter>

                    <PosterFooter
                    icon={"bxs:ambulance"}
                    head={"Ambulance Service"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur veritatis numquam recusandae ut consequuntur vel ea tempore mollitia soluta sapiente!"}
                    background={"bg-gray-100 rounded-r-lg"}>
                    </PosterFooter >
                </div>
            </div>
        <div>
        <div className='w-full h-full pt-20'>
        <div className='flex items-center justify-center'>
            <div className='flex items-center justify-center'>
                <div>
                    <img className='w-10/12 h-full' src="https://doctris-react-landing.vercel.app/static/media/about-2.4f696a42c208855604fb.png" alt="" />
                </div>
                <div className='w-5/12'>
                    <p className='text-4xl font-semibold'>About Our Treatments</p> <br />
                    <p className='text-lg text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt placeat adipisci harum itaque dolores nulla blanditiis architecto officia nostrum inventore quam, amet temporibus non quod!</p> <br />
                    <p className='text-lg text-gray-600'>The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to 'proper' Latin. It contains a series of real Latin words.</p>
                    <button className='mt-5 flex items-center bg-blue-600 px-4 py-2 rounded-lg text-white text-lg hover:bg-blue-700 duration-300'>Read More <Icon className='text-xl' icon={"basil:arrow-right-outline"}></Icon> </button>
                </div>
            </div>
        </div>
    </div>
            <Departments></Departments>
            <div className='flex items-center justify-center t-0 '>
      <div className='w-6/12'>
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
        <div>
        <div className='bg-gray-100 mt-10 flex fles items-center justify-center'>
        <div className='w-9/12 flex items-center justify-center space-x-24'>
            <img className='w-32 h-24' src={serumLogo} alt="" />
            <img className='w-32 h-24' src={pharmaLogo} alt="" />
            <img className='w-32 h-24' src={ucbpharmaLogo} alt="" />
            <img className='w-32 h-24' src={icbPharmaLogo} alt="" />
            <img className='w-32 h-24' src={paracetamol} alt="" />
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
                            <div className='border border-1 rounded-full cursor-pointer hover:bg-blue-900 duration-300'><Icon className='w-6 h-6 p-1' icon={"iconoir:facebook"}></Icon></div>
                            <div className='border border-1 rounded-full cursor-pointer hover:bg-blue-900 duration-300'><Icon className='w-6 h-6 p-1' icon={"iconoir:instagram"}></Icon></div>
                            <div className='border border-1 rounded-full cursor-pointer hover:bg-blue-900 duration-300'><Icon className='w-6 h-6 p-1' icon={"iconoir:twitter"}></Icon></div>
                            <div className='border border-1 rounded-full cursor-pointer hover:bg-blue-900 duration-300'><Icon className='w-6 h-6 p-1' icon={"iconoir:linkedin"}></Icon></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    </div>
        </div>
    </div>
    </>
  )
}

export default Header
