import React from 'react'
import style from '../../styles/Feature.module.css'
const Feature = () => {
  return (
    <div className={style.featureContainer}>
        <div className={style.sub_featurecontainer}>
            <div className={style.firstlistcontainer}>
            <li>Sign Up</li>
            <li>Log In</li>
            <li>Messenger</li>
            <li>Facebook Lite</li>
            <li>Video</li>
            <li>Meta Pay</li>
            <li>Meta Store</li>
            <li>Meta Quest</li>
            <li>Ray-Ban Meta</li>
            <li>Meta AI</li>
            <li>Meta AI more content</li>
            <li>Instagram</li>
            </div>
            
            <div className={style.secondlistcontainer}>
            
            <li>Threads</li>
            <li>Voting Information Center</li>
            <li>Privacy Policy</li>
            <li>Privacy Center</li>
            <li>About</li>
            <li>Create ad</li>
            <li>Create Page</li>
            <li>Developers</li>
            <li>Careers</li>
            <li>Cookies</li>
            <li>Ad choices</li>
            <li>Terms</li>
            </div>
            
            <div className={style.thirdcontainer}>
            <li>Help</li>
            <li>Contact Uploading & Non-UsersSettings</li>
            </div>
        </div>
        <div className={style.metalogobuttom}>
        <span>Meta © 2025</span>
        </div>
    </div>
  )
}

export default Feature
