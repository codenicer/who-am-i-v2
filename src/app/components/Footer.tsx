'use client'

import Link from 'next/link'
import styles from '../styles/Footer.module.scss'
import { useProfileStore } from '@/store/useProfileStore'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const { profile } = useProfileStore()

  if (!profile) return null
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          {profile.socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
            >
              {link.name}
            </a>
          ))}
        </div>

        <nav className={styles.nav}>
          <Link href="#about" className={styles.navLink}>
            About
          </Link>
          <Link href="#experience" className={styles.navLink}>
            Experience
          </Link>
          <Link href="#projects" className={styles.navLink}>
            Projects
          </Link>
          <Link href="#contact" className={styles.navLink}>
            Contact
          </Link>
        </nav>

        <p className={styles.copyright}>
          © {currentYear} {profile.firstName} {profile.lastName}. All rights
          reserved.
        </p>
      </div>
    </footer>
  )
}
