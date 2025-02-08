'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from '../styles/Main.module.scss'
import { useProfileStore } from '@/store/useProfileStore'

export default function Main() {
  const { profile } = useProfileStore()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  if (!profile) return null

  return (
    <section className={`${styles.main} ${isVisible ? styles.visible : ''}`}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I&apos;m{' '}
          <span className={styles.name}>
            {profile.firstName} {profile.lastName}
          </span>
        </h1>
        <h2 className={styles.subtitle}>{profile.profession}</h2>
        <p className={styles.description}>{profile.professionDescription}</p>
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
