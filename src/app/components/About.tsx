'use client'

import { useProfileStore } from '@/store/useProfileStore'
import styles from '../styles/About.module.scss'

export default function About() {
  const { profile } = useProfileStore()
  if (!profile) return null

  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>
        {profile.aboutMe.map((section, index) => (
          <p key={index} className={styles.description}>
            {section.text}
          </p>
        ))}

        <div className={styles.skills}>
          <h3>Technologies I work with:</h3>
          <ul className={styles.skillsList}>
            {profile.skills.map((skill, index) => (
              <li key={index} className={styles.skillItem}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
