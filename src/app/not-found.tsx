'use client'

import Link from 'next/link'
import styles from './styles/NotFound.module.scss'

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.ghost}>
          <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.ghostSvg}
          >
            {/* Ghost body */}
            <path
              d="M40 160 C40 80 40 40 100 40 C160 40 160 80 160 160 C160 180 140 180 120 180 C100 180 100 160 80 180 C60 180 40 180 40 160Z"
              fill="currentColor"
              className={styles.ghostBody}
            />
            {/* Ghost eyes */}
            <circle cx="80" cy="100" r="8" fill="#000" className={styles.eye} />
            <circle
              cx="120"
              cy="100"
              r="8"
              fill="#000"
              className={styles.eye}
            />
            {/* Flashlight beam */}
            <path
              d="M85 115 C90 120 110 120 115 115"
              stroke="#000"
              strokeWidth="3"
              className={styles.mouth}
            />
            {/* Flashlight */}
            <path
              d="M70 140 L130 140 L150 160 L50 160 Z"
              fill="#FFD700"
              className={styles.flashlight}
            />
            {/* Light beam */}
            <path
              d="M70 0 L130 0 L180 140 L20 140 Z"
              fill="rgba(255, 215, 0, 0.1)"
              className={styles.beam}
            />
          </svg>
        </div>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>Oops! This page has ghosted us.</p>
        <Link href="/" className={styles.button}>
          Go Back Home
        </Link>
      </div>
    </div>
  )
}
