'use client'

import styles from '../styles/About.module.scss'
import { Skill } from '@/types/userProfile'

const skills: Skill[] = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Node.js' },
]

const descriptionLines = [
  {
    text: "I'm a passionate full-stack developer with experience in",
    space: true,
  },
  {
    text: 'building scalable web applications and solving complex problems.',
    space: true,
  },
  {
    text: 'I enjoy working with modern technologies and frameworks.',
    space: false,
  },
  {
    text: 'My goal is to create efficient and user-friendly applications.',
    space: false,
  },
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>
        <div className={styles.description}>
          {descriptionLines.map((line, index) => (
            <p key={index}>
              {line.text}
              <br />
              {line.space && <br />}
            </p>
          ))}
        </div>

        <div className={styles.skills}>
          <h3>Technologies I work with:</h3>
          <ul className={styles.skillsList}>
            {skills.map((skill) => (
              <li key={skill.name} className={styles.skillItem}>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
