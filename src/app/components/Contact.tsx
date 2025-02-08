'use client'

import styles from '../styles/Contact.module.scss'
import { useProfileStore } from '@/store/useProfileStore'

export default function Contact() {
  const { profile } = useProfileStore()

  if (!profile) return null

  return (
    <section id="contact" className={styles.contact}>
      <h2 className={styles.title}>Contact Me</h2>

      <div className={styles.container}>
        <p className={styles.description}>
          I would love to hear from you! Feel free to reach out for any
          inquiries or collaborations.
        </p>

        <a href={`mailto:${profile.email}`} className={styles.submitButton}>
          Email Me
        </a>
      </div>
    </section>
  )
}
