'use client'

import { useEffect } from 'react'
import styles from '../styles/Loader.module.scss'
import { useLoading } from '../context/LoadingContext'

export default function Loader() {
  const { setIsLoading } = useLoading()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [setIsLoading])

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.loader}>
        <div className={styles.spinner}></div>
      </div>
    </div>
  )
}
