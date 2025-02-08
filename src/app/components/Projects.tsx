'use client'

import Image from 'next/image'
import styles from '../styles/Projects.module.scss'
import type { Project } from '@/types'

const projects: Project[] = [
  {
    title: 'Project Name',
    description: 'A brief description of the project and its key features.',
    image: '/project-image.jpg',
    techStack: ['React', 'Next.js', 'TypeScript'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  {
    title: 'Project Name',
    description: 'A brief description of the project and its key features.',
    image: '/project-image.jpg',
    techStack: ['React', 'Next.js', 'TypeScript'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  {
    title: 'Project Name',
    description: 'A brief description of the project and its key features.',
    image: '/project-image.jpg',
    techStack: ['React', 'Next.js', 'TypeScript'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  {
    title: 'Project Name',
    description: 'A brief description of the project and its key features.',
    image: '/project-image.jpg',
    techStack: ['React', 'Next.js', 'TypeScript'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  {
    title: 'Project Name',
    description: 'A brief description of the project and its key features.',
    image: '/project-image.jpg',
    techStack: ['React', 'Next.js', 'TypeScript'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  {
    title: 'Project Name',
    description: 'A brief description of the project and its key features.',
    image: '/project-image.jpg',
    techStack: ['React', 'Next.js', 'TypeScript'],
    link: 'https://project-demo.com',
    github: 'https://github.com/username/project',
  },
  // Add more projects from your old project
]

const firstProject = projects[0]

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <h2 className={styles.title}>Featured Projects</h2>
      <div className={`${styles.grid} ${styles.main}`}>
        <article key={firstProject.title} className={styles.project}>
          {firstProject.image && (
            <div className={styles.imageContainer}>
              <Image
                src={firstProject.image}
                alt={firstProject.title}
                width={500}
                height={300}
                className={styles.image}
              />
            </div>
          )}

          <div className={styles.content}>
            <h3 className={styles.projectTitle}>{firstProject.title}</h3>
            <p className={styles.description}>{firstProject.description}</p>

            <div className={styles.techStack}>
              {firstProject.techStack.map((tech) => (
                <span key={tech} className={styles.tech}>
                  {tech}
                </span>
              ))}
            </div>

            <div className={styles.links}>
              {firstProject.github && (
                <a
                  href={firstProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  GitHub
                </a>
              )}
              {firstProject.link && (
                <a
                  href={firstProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </article>
      </div>
      <div className={styles.grid}>
        {projects.map((project) => (
          <article key={project.title} className={styles.project}>
            {project.image && (
              <div className={styles.imageContainer}>
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className={styles.image}
                />
              </div>
            )}

            <div className={styles.content}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>

              <div className={styles.techStack}>
                {project.techStack.map((tech) => (
                  <span key={tech} className={styles.tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className={styles.links}>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    GitHub
                  </a>
                )}
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
