'use client'

import { useState } from 'react'
import styles from '../styles/Experience.module.scss'
import type { Experience as ExperienceType } from '@/types'

const experiences: ExperienceType[] = [
  {
    company: 'Company Name',
    position: 'Senior Developer',
    duration: '2020 - Present',
    description: [
      'Led development of key features',
      'Mentored junior developers',
      'Improved application performance',
    ],
    technologies: ['React', 'Node.js', 'TypeScript'],
  },
  {
    company: 'Company Name',
    position: 'Senior Developer',
    duration: '2020 - Present',
    description: [
      'Led development of key features',
      'Mentored junior developers',
      'Improved application performance',
    ],
    technologies: ['React', 'Node.js', 'TypeScript'],
  },
  {
    company: 'Company Name',
    position: 'Senior Developer',
    duration: '2020 - Present',
    description: [
      'Led development of key features',
      'Mentored junior developers',
      'Improved application performance',
    ],
    technologies: ['React', 'Node.js', 'TypeScript'],
  },
  {
    company: 'Company Name',
    position: 'Senior Developer',
    duration: '2020 - Present',
    description: [
      'Led development of key features',
      'Mentored junior developers',
      'Improved application performance',
    ],
    technologies: ['React', 'Node.js', 'TypeScript'],
  },
  {
    company: 'Company Name',
    position: 'Senior Developer',
    duration: '2020 - Present',
    description: [
      'Led development of key features',
      'Mentored junior developers',
      'Improved application performance',
    ],
    technologies: ['React', 'Node.js', 'TypeScript'],
  },

  // Add more experiences from your old project
]

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <section id="experience" className={styles.experience}>
      <h2 className={styles.title}>Experience</h2>

      <div className={styles.container}>
        <div className={styles.tabs}>
          {experiences.map((exp, index) => (
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
          <h3>{experiences[activeIndex].position}</h3>
          <p className={styles.duration}>{experiences[activeIndex].duration}</p>
          <ul className={styles.description}>
            {experiences[activeIndex].description.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <div className={styles.technologies}>
            {experiences[activeIndex].technologies.map((tech) => (
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
