import React, {useState} from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileDataForm from "./ProfileDataForm";
import ProfileData from "./ProfileData";

const ProfileInfo = ({profile, status, updateStatus, isOwner, savePhoto, saveProfile}) => {

    let [editMode, setEditMode] = useState(false);

    if (!profile) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhoto(e.target.files[0]);
        }
    }

    const onSubmit = (formData) => {
        saveProfile(formData).then(
            () => {
                setEditMode(false);
            }
        );
    }

    return (
        <div>
            <div className={s.mainProfileBlock}>
                <div className={s.imgBlock}>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto}/>
                    {isOwner && <input className={s.fileBtn} type={"file"} onChange={onMainPhotoSelected}/>}
                </div>
                <div className={s.descriptionBlock}>
                    {editMode
                        ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData goToEditMode={() => {
                            setEditMode(true)
                        }} profile={profile} isOwner={isOwner}
                                       status={status} updateStatus={updateStatus}/>
                    }
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;