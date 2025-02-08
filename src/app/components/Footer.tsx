'use client'

import Link from 'next/link'
import styles from '../styles/Footer.module.scss'

interface SocialLink {
  name: string
  url: string
  icon?: string
}

const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
  },
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/in/yourusername',
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/yourusername',
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <div className={styles.socialLinks}>
          {socialLinks.map((link) => (
            <a
              key={link.name}
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
          © {currentYear} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
