import React, { useState } from 'react'
// import LoggedInContainer from '../container/LoggedInContainer'
import { Icon } from '@iconify/react'
import { makeAuthenticatedGETRequest } from '../utils/server'
import SingleDoctorComponent from "../component/SingleDoctorComponent"

const SearchPage = () => {
    const [isInputFocus, setIsInputFocus] = useState(false)
    const [searchText, setSearchText] = useState("")
    const [songData, setSongData] = useState([])

    const seachtext = async() =>{
        const response = await makeAuthenticatedGETRequest(
            "/auth/get/doctorcity/" + searchText
        );
        setSongData(response.data)
        console.log(response.data)
    }

  return (
    // <LoggedInContainer curActiveScreen="search">
        <div className='w-full py-6'>
            <div className={`w-1/3 p-3 text-sm rounded-full bg-gray-800 px-5 flex text-white space-x-3 items-center ${isInputFocus ? "border border-white" : ""}`}>
                <Icon className='text-white text-2xl' icon="mdi:search" width="1.5rem" height="1.5rem" />
                <input
                    type="text"
                    placeholder="What do you want to search ?"
                    className="bg-gray-800 w-full focus:outline-none"
                    onFocus={()=>{
                        setIsInputFocus(true)
                    }}
                    onBlur={()=>{
                        setIsInputFocus(false)
                    }}
                    value={searchText}

                    onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}
                    onKeyDown={(e)=>{
                        if(e.key === "Enter"){
                            seachtext()
                        }
                    }}
                />
            </div>
                {
                    songData.length > 0?
            <div className='pt-10 space-y-3'>

                    <div className='text-white'>Search Result for <span className='font-bold'>{searchText}</span></div>
                {songData.map((item) =>{
                    return (
                        <SingleDoctorComponent
                        info={item} 
                        playSound={()=>{}}
                        />
                        )
                    })}
            </div>:<div className='text-white py-10'>Search for artist, song, podcast and more</div>
                }
        </div>
    // </LoggedInContainer>
  )
}

export default SearchPage
