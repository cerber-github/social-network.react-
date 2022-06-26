import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../Common/Preloader";

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.photoBlock}>
                <img src='https://st4.depositphotos.com/20524830/i/600/depositphotos_257969776-stock-photo-wide-panorama-beautiful-sunrise-landscape.jpg'/>
            </div>
            <div className={s.descriptionBlock}>
               <img src={props.profile.photos.large} />
                ava
            </div>
        </div> )
}

export default ProfileInfo;