import React from 'react';
import styles from './Contact.module.css'
import facebook from '../../../../assets/profile-contacts/facebook.svg'
import github from '../../../../assets/profile-contacts/github.svg'
import instagram from '../../../../assets/profile-contacts/instagram.svg'
import twitter from '../../../../assets/profile-contacts/twitter.svg'
import vk from '../../../../assets/profile-contacts/vk.svg'
import website from '../../../../assets/profile-contacts/website.svg'
import youtube from '../../../../assets/profile-contacts/youtube.svg'


function Contact(props) {

    const {
        url,
        type,
    } = props;

    const getLogo = () => {
        switch (type) {
            case 'facebook':
                return facebook;
            case 'github':
                return github;
            case 'instagram':
                return instagram;
            case 'twitter':
                return twitter;
            case 'vk':
                return vk;
            case 'website':
                return website;
            case 'youtube':
                return youtube;
        }
    };

    const logo = getLogo();

    return (
        <a className={styles.link} href={url} target="_blank">
            <img className={styles.logo} src={logo} alt={type}/>
        </a>
    );
}

export default Contact;