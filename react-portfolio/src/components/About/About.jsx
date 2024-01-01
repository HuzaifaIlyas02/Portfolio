import React from 'react'
import { getImageUrl} from "../../utils";
import styles from "./About.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
            <img src={getImageUrl("about/about.png")} alt="Me sitting with a laptop" className={styles.aboutImage}/>
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Data Engineering</h3>
                    <p>Dedicated to designing scalable ETL pipelines and optimizing databases, expertise includes leveraging AWS cloud services. Committed to transforming raw data into actionable insights, be part of the journey where data, fueled by AWS, propels us toward a future full of possibilities.</p>
                </div>
                </li>

                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/serverIcon.png")} alt="Server icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Machine Learning</h3>
                    <p>Passionate about merging smart tech and data seamlessly, the focus is on crafting clever solutions and unlocking the power of machine learning for cool innovations. </p>
                </div>
                </li>

                <li className={styles.aboutItem}>
                <img src={getImageUrl("about/uiIcon.png")} alt="UI icon"/>
                <div className={styles.aboutItemText}>
                    <h3>Web Developer</h3>
                    <p>Focused on crafting user-friendly web applications, I specialize in software development using frameworks like React and Django.</p>
                </div>
                </li>
            </ul>
        </div>
    </section>
  )
}

export default About
