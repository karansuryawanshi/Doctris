import React from 'react'
import serumLogo from "../assets/serumlogo.png";
import pharmaLogo from "../assets/PharmaLogo.png";
import ucbpharmaLogo from "../assets/ucbPharma.png";
import icbPharmaLogo from "../assets/icbPharma.png";
import paracetamol from "../assets/paracitamol.png"
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
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
                    Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.
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
  )
}

export default Footer
