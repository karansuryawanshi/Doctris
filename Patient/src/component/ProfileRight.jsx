import React, { useState } from 'react';
import Profile from './Profile';
import ProfileSetting from './ProfileSetting';

const ProfileRight = () => {
    const [isProfileVisible, setIsProfileVisible] = useState(true);
    const [isProfileSetingVisible, setIsProfileSetingVisible] = useState(false);

    const isProfileSetting = () => {
        setIsProfileVisible(false);
        setIsProfileSetingVisible(true)
    };

    const isProfile =()=>{
        setIsProfileVisible(true);
        setIsProfileSetingVisible(false)
    }

    return (
        <div className='w-8/12 pt-10 rounded-lg'>
            <div className='flex rounded-xl border-2 duration-300'>
                <div className='w-1/2 bg-blue-600 p-3 rounded-l-xl flex items-center justify-center cursor-pointer'onClick={isProfile}>
                    <p className='text-lg text-white'>Profile</p>
                </div>
                <div className='w-1/2 rounded-r-xl p-3 flex items-center justify-center cursor-pointer'onClick={isProfileSetting}>
                    <p className='text-lg '>Profile Settings</p>
                </div>
            </div>
            {isProfileVisible && <Profile />}
            {isProfileSetingVisible && <ProfileSetting/>}
        </div>
    );
};

export default ProfileRight;
