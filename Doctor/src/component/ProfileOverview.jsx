import React, { useState } from 'react'
import AllComponent from '../component/AllComponent'
import {Icon} from "@iconify-icon/react" 
import ReactStars from "react-rating-stars-component";
import ProfileReview from '../component/ProfileReview';
import ProfileLocation from '../component/ProfileLocation';
import ProfileTimetable from '../component/ProfileTimetable';

const ProfileOverview = () => {
  return (
    <div>
      <p className='font-semibold text-xl'>Dr. Christopher Burrell</p>
                            <p className='text-blue-600 cursor-pointer'>Gynecologist,  Ph.D</p>
                            <div className='pt-6 text-gray-600'>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam cupiditate veniam, minus nihil eaque ipsum nam accusamus accusantium facilis fuga iusto sequi inventore cum dignissimos necessitatibus! Qui praesentium harum eveniet itaque! Veniam repellat culpa quia esse iusto ex officiis dolores voluptatem? Ex odio id officia fugiat hic quasi amet ab?</p>
                            </div>
                            <div className=''>
                                <p className='py-6 font-semibold'>Specialties:</p>
                                <p> <span><Icon className='text-blue-600' icon={"solar:arrow-right-bold"}></Icon></span> Women's health services</p>
                                <p> <span><Icon className='text-blue-600' icon={"solar:arrow-right-bold"}></Icon></span> Pregnancy care</p>
                                <p> <span><Icon className='text-blue-600' icon={"solar:arrow-right-bold"}></Icon></span> Surgical procedures</p>
                                <p> <span><Icon className='text-blue-600' icon={"solar:arrow-right-bold"}></Icon></span> Specialty care</p>
                                <p> <span><Icon className='text-blue-600' icon={"solar:arrow-right-bold"}></Icon></span> Conclusion</p>
                            </div>
                            <div>
                                <div>
                                    <p className='py-6 font-semibold'>My Team :</p>
                                </div>
                                <div className='grid grid-cols-4 gap-4 mb-10'>
                                    <div className='border rounded-xl'>
                                        <div>
                                            <img className='rounded-xl' src="https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg" alt="" />
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
                                    <div className='border rounded-xl'>
                                        <div>
                                            <img className='rounded-xl' src="https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg" alt="" />
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
                                    <div className='border rounded-xl'>
                                        <div>
                                            <img className='rounded-xl' src="https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg" alt="" />
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
                                    <div className='border rounded-xl'>
                                        <div>
                                            <img className='rounded-xl' src="https://doctris-react-landing.vercel.app/static/media/01.d8b9651b2a3ba6336221.jpg" alt="" />
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
                            </div>
    </div>
  )
}

export default ProfileOverview
