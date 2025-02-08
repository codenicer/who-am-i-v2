'use client'

import styles from '../styles/About.module.scss'

interface Skill {
  name: string
  icon?: string
}

const skills: Skill[] = [
  { name: 'JavaScript' },
  { name: 'TypeScript' },
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'Node.js' },
  // Add more skills from your old project
]

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.content}>
        <div className={styles.description}>
          <p>
            {/* Add your about text from the old project */}
            I&apos;m a passionate full-stack developer with experience in
            building scalable web applications and solving complex problems.
          </p>
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
