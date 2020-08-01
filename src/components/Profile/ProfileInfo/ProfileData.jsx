import React from 'react';
import s from './ProfileData.module.css'
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileData = ({profile, isOwner, goToEditMode, status, updateStatus}) => {
    return     <div>
        {isOwner && <div className={s.btnEdit}><button onClick={goToEditMode}>Edit</button></div>}
        <div className={s.name}>
            {profile.fullName}
        </div>
        <div className={s.status}>
            <ProfileStatusWithHooks status={status}
                                    updateStatus={updateStatus}
                                    profile={profile}/>
        </div>

        <div className={s.line}></div>
        <div className={s.sectionAbout}>
            <span>About Me:</span> <span className={s.aboutRight}>{profile.aboutMe}</span>
        </div>
        <div className={s.sectionAbout}>
            <span>Looking for a job:</span> <span className={s.aboutRight}>{profile.lookingForAJob ? "YES" : "NO"}</span>
        </div>
        {profile.lookingForAJob &&
        <div className={s.sectionAbout}>
            <span>My skills:</span> <span className={s.aboutRight}>{profile.lookingForAJobDescription}</span>
        </div>
        }
        <div className={s.line}></div>
        <div>
            {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b> <span className={s.aboutRight}>{contactValue}</span></div>
}

export default ProfileData;