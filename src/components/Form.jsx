// import React from 'react'
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import style from '../styles/Form.module.css'
const Form = () => {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "santoshfacebook9811",
        "template_kwaacjl",
        form.current,
        "nTh6E3tfTrZ7m08Ch"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message Sent Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Error sending message!");
        }
      );
  };
  
  
  
  
  
  
  return (
    <div className='parent'>
       
            <form ref={form} onSubmit={sendEmail} className={style.form}>
                <input type="text" name="user_name" className={style.input} placeholder='Email or phone number'/>
                <input type="text" name="password" className={style.input} placeholder='Password'/>
                <button type="submit" className={style.btn_login}>Log In</button>
               <a href="" className={style.forgotten_password}>Forgot password?</a>
               <div className={style.horizontalline}></div>
               <button className={style.btn_create_new_account}>Create new account</button>
            </form>
            <div ><a href="" className={style.create_btn}>Create a Page</a> for a celebrity, brand or business.</div>
      
    </div>
  )
}

export default Form