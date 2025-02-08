'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'

export default function Main() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I&apos;m <span className={styles.name}>Your Name</span>
        </h1>
        <h2 className={styles.subtitle}>Full Stack Developer</h2>
        <p className={styles.description}>
          I build exceptional and accessible digital experiences for the web.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/me.jpeg"
          alt="Profile picture"
          width={300}
          height={300}
          className={styles.profileImage}
          priority
        />
      </div>
    </section>
  )
}
