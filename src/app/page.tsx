'use client'

import { useState, useEffect } from 'react'
import { Suspense } from 'react'
import { useProfileStore } from '@/store/useProfileStore'

// Import your components here
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Main from './components/Main'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  const { profile, loading, error, fetchProfile } = useProfileStore()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  if (loading) return <Loader />
  if (error) return <div>Error: {error}</div>
  if (!profile) return <div>No profile data found</div>

  return (
    <main>
      <Suspense fallback={<Loader />}>
        <Navbar isMobile={isMobile} />
        <Main />
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Footer />
      </Suspense>
    </main>
  )
}
