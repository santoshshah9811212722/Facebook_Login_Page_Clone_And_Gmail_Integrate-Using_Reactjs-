import React from 'react'
import style from '../styles/Form.module.css'
const Form = () => {
  return (
    <div className='parent'>
       
            <form action="" className={style.form}>
                <input type="text" className={style.input} placeholder='Email or phone number'/>
                <input type="text" className={style.input} placeholder='Password'/>
                <button className={style.btn_login}>Log In</button>
               <a href="" className={style.forgotten_password}>Forgot password?</a>
               <div className={style.horizontalline}></div>
               <button className={style.btn_create_new_account}>Create new account</button>
            </form>
      
    </div>
  )
}

export default Form