import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Contact.module.css"

const Contact = () => {
  return (
    <footer id='contact' className={styles.container}>
    <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel Free to Contact</p>
    </div>
    <ul className={styles.links}>
        <li className={styles.link}>
        <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon'/>
        <a href='mailto:huzaifailyas02@outlook.com'></a>
        </li>

        <li className={styles.link}>
        <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn Icon'/>
        <a href='https://www.linkedin.com/in/huzaifa-ilyas/'></a>
        </li>

        <li className={styles.link}>
        <img src={getImageUrl("contact/githubIcon.png")} alt='Email Icon'/>
        <a href='https://github.com/huzaifailyas02'></a>
        </li>
    </ul>
    </footer>
  )
}

export default Contact
