import React from 'react'
import { Plus } from "lucide-react";
import style from "../../styles/languages.module.css"
const Footer = () => {
  return (
    <div className={style.footercontainer}>
      <div className={style.footeralign}>
        <li>English (US)</li>
        <li>नेपाली</li>
        <li>हिन्दी</li>
        <li>Español</li>
        <li>Português (Brasil)</li>
        <li>日本語</li>
        <li>Français (France)</li>
        <li>Deutsch</li>
        <li>Italiano</li>
        <li>العربية</li>
        <li className={style.iconplus}>中文(简体)  <Plus size={20} className={style.plus} /> </li>
      </div>
      <div className={style.div_underline}></div>
     
      
    </div>
  )
}

export default Footer
