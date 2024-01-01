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
            <a href='mailto:huzaifailyas02@outlook.com'>
                <img src={getImageUrl("contact/emailIcon.png")} alt='Email Icon'/>
            </a>
        </li>

        <li className={styles.link}>
            <a href='https://www.linkedin.com/in/huzaifa-ilyas/'>        
                <img src={getImageUrl("contact/linkedinIcon.png")} alt='LinkedIn Icon'/>
            </a>
        </li>

        <li className={styles.link}>
            <a href='https://github.com/huzaifailyas02'>
                <img src={getImageUrl("contact/githubIcon.png")} alt='Email Icon'/>
            </a>
        </li>
    </ul>
    </footer>
  )
}

export default Contact
