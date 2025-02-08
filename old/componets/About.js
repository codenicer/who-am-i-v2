import { techList } from '../utils/tech-list'
import { about } from '../utils/about'
import ScrollAnimation from 'react-animate-on-scroll'
import styles from '../styles/About.module.scss'
import { useEffect, useState } from 'react'

export default function About({ inViewport }) {
  const [hidden, setHidden] = useState(false)

  return (
    <ScrollAnimation
      animateOnce
      animateIn="ani-viewport"
      className={`${hidden ? '' : 'hidden'}`}
    >
      <div id="about" className={styles.about_card}>
        <div className={styles.about_card_content}>
          <div className={'heading_container ' + styles.heading_cont_about}>
            <h1 className={'heading_title'}>About Me</h1>
            <div className={'heading_vertical_line'}></div>
          </div>
          <div className={styles.about_info}>
            <p
              className={`${styles.about_subject} ${styles.about_subject_title}`}
            >
              {about.nameTitle}
            </p>
            <p className={`${styles.about_subject} ${styles.about_subject_fp}`}>
              {about.firstP}
            </p>
            <p className={`${styles.about_subject} ${styles.about_subject_sp}`}>
              {about.secondP}
            </p>
            <p
              className={`${styles.about_subject}  ${styles.about_subject_techabout}`}
            >
              {about.techAbout}
            </p>
            <ul className={`${styles.tech_list}`}>
              {techList.map((tech, i) => {
                return <li key={i}>{tech}</li>
              })}
            </ul>

            <div className={`${styles.img_cont} ${styles.image_cont_center}`}>
              <div className={styles.image_box}>
                <img src="/me.jpeg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollAnimation>
  )
}
