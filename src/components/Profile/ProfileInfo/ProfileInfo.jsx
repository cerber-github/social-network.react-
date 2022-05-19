import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://st4.depositphotos.com/20524830/i/600/depositphotos_257969776-stock-photo-wide-panorama-beautiful-sunrise-landscape.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
                ava
            </div>
        </div> )
}

export default ProfileInfo;