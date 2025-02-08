'use client'

import { useState } from 'react'
import styles from '../styles/Experience.module.scss'
import { useProfileStore } from '@/store/useProfileStore'

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)
  const { profile } = useProfileStore()

  if (!profile) return null

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.container}>
        <div className={styles.tabs}>
          {profile.experiences.map((exp, index) => (
            <button
              key={exp.company}
              className={`${styles.tab} ${
                index === activeIndex ? styles.active : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {exp.company}
            </button>
          ))}
        </div>

        <div className={styles.content}>
          <h3>{profile.experiences[activeIndex].position}</h3>
          <p className={styles.duration}>
            {profile.experiences[activeIndex].duration}
          </p>
          <ul className={styles.description}>
            {profile.experiences[activeIndex].description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className={styles.technologies}>
            {profile.experiences[activeIndex].technologies.map((tech) => (
              <span key={tech} className={styles.tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
