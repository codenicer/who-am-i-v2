'use client'

import { useState, useEffect } from 'react'
import { Suspense } from 'react'

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
  const [isMobile, setIsMobile] = useState(false)

  const SuspenseTrigger = () => {
    throw new Promise(() => {})
  }

  // for suspense testing
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const SomeComponent = () => {
    const [ready, setReady] = useState(false)

    useEffect(() => {
      setTimeout(() => setReady(true), 1000)
    }, [])

    return ready ? <div>hello world!</div> : <SuspenseTrigger />
  }

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    checkMobile() // Check on initial load
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <main>
      <Suspense fallback={<Loader />}>
        {/* <SomeComponent /> */}
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
