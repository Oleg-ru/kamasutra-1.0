import React, {useState} from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader.jsx";
import Contact from "./Contact/Contact.jsx";
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks.jsx";
import {ProfileDataForm} from "./ProfileDataForm/ProfileDataForm.jsx";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }

    const [editMode, setEditMode] = useState(false);

    const {
        status,
        updateStatus,
        saveProfile,
    } = props;
    const handleSubmit = (formData) => {
        console.log(formData)
        if (saveProfile) {
            saveProfile();
            setEditMode(false)
        }
    };

    return (
        <>
            <div>
                <img className={styles.profileImg}
                     src="https://assets.monica.im/tools-web/_next/static/media/mobile_upscale.e93d7497.webp"
                     alt=""
                />
            </div>
            <ProfileStatusWithHooks status={status} updateStatus={updateStatus}/>
            {editMode ? <ProfileDataForm handleSubmit={handleSubmit} initialValues={props.profile}/> : <ProfileData {...props} goToEditMode={() => setEditMode(true)}/>}
        </>
    );
}

const ProfileData = (props) => {
    const {
        profile : {
            fullName,
            aboutMe,
            lookingForAJob,
            lookingForAJobDescription,
            contacts
        },
        isOwner,
        goToEditMode,
    } = props;

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    };

    const getContacts = (contacts) => {
        const contactsArray = [];

        for (const key in contacts) {
            if (!contacts[key]) {
                continue;
            }
            contactsArray.push(<Contact key={key} url={contacts[key]} type={key}/>)
        }

        return contactsArray;
    };

    return (
        <div className={styles.description}>
            {isOwner && <button className={styles.editProfile} onClick={goToEditMode} >Edit profile</button>}
            {isOwner && <input className={styles.loadFileInput} type="file" onChange={onMainPhotoSelected}/>}
            <img className={styles.myAvatar} src={props.profile.photos.large ?? 'https://upload.wikimedia.org/wikipedia/commons/2/2f/No-photo-m.png'} alt="avatar"/>
            <div className={styles.descriptionProfile}>
                <p className={styles.fullName}>👋 Привет, я {fullName}</p>
                <p className={styles.aboutMe}>🧬 Немного о себе: {aboutMe}</p>
                <p className={styles.lookingForAJob}>🏭 Сейчас я {lookingForAJob ? 'ищу работу.' : 'н е ищу работу.'}</p>
                <p className={styles.lookingForAJobDescription}>📣 Описание вакансии: {lookingForAJobDescription}</p>
                <p>📡 Мои контакты:</p>
                <div className={styles.contactsContainer}>
                    {getContacts(contacts)}
                </div>
            </div>
        </div>
    )
};


export default ProfileInfo;