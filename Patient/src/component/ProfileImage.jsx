import React from 'react'
import { openUploadWidget } from "../utils/CloudinaryService";
import { cloudinary_upload_preset } from "../config";

const ProfileImage = ({setUrl, url}) => {

  const uploadImageWidget = () => {
    // console.log(props);
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dcjuzfafi",
        uploadPreset: cloudinary_upload_preset,
        // tags: ["myname"],
        // maxImageWidth: 600,
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
          console.log(result.info.original_filename)
          setUrl(result.info.secure_url)
        }else{
          if(error){
            console.log(error)
          }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <div>
        <div className='flex items-center justify-center p-10'>
            <button className='px-4 py-2 rounded-lg text-white bg-blue-600 hover:bg-blue-700 duration-300'onClick={uploadImageWidget}>Upload</button>
        </div>
    </div>
  )
}

export default ProfileImage
