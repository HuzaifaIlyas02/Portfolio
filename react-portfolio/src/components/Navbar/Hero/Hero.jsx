import React from 'react'
import { getImageUrl } from '../../../utils'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section className={styles.container}>
        <div className={styles.content}>
            <h1 className={styles.title}>Hi, I'm Huzaifa</h1>
            <p className={styles.description}>
            Passionate computer science student with expertise in software development, AI, machine learning, and cloud services. 
            Eager to contribute and seize opportunities in the tech industry.
            </p>
            <a href="mailto:huzaifailyas02@outlook.com" className={styles.contactBtn}>Contact Me</a>
        </div>
        <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg}/>

        <div className={styles.topBlur}/>
        <div className={styles.bottomBlur}/>
    
    </section>
  )
}

export default Hero
