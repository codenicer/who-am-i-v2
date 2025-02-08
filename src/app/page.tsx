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
import { ChatWidget, RootProvider } from '@my-chatbot/ui'
import { RateLimitParams } from '@my-chatbot/core'
import { Redis } from '@upstash/redis'

const redis = new Redis({
  url: process.env.NEXT_PUBLIC_REDIS_URL!,
  token: process.env.NEXT_PUBLIC_REDIS_TOKEN!,
})

export default function Home() {
  const { profile, loading, error, fetchProfile } = useProfileStore()
  const [clientIp, setClientIp] = useState<string>('unknown')
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

  useEffect(() => {
    // Fetch client IP on component mount
    fetch('/api/client-ip')
      .then((res) => res.json())
      .then((data) => setClientIp(data.ip))
      .catch(console.error)
  }, [])

  // Configure rate limit with client IP
  const rateLimit: RateLimitParams = {
    identifier: `chat:${clientIp}`, // Use IP in identifier
    limit: 20,
    window: 3600,
    redis,
  }

  if (loading) return <Loader />
  if (error) return <div>Error: {error}</div>
  if (
    !process.env.NEXT_PUBLIC_OPENAI_API_KEY ||
    !process.env.NEXT_PUBLIC_REDIS_URL ||
    !process.env.NEXT_PUBLIC_REDIS_TOKEN
  ) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold text-red-500">Error</h1>
        <p>Required environment variables are not configured</p>
      </div>
    )
  }
  if (!profile) return <div>No profile data found</div>

  return (
    <RootProvider
      key={`chat-provider-${clientIp}`}
      personalContext={profile.personalContext}
      aiConfig={{
        provider: 'gemini',
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY!,
        model: 'gemini-2.0-flash-lite-preview-02-05',
      }}
      rateLimit={rateLimit}
    >
      <main>
        <Suspense fallback={<Loader />}>
          <Navbar isMobile={isMobile} />
          <Main />
          <About />
          <Experience />
          <Projects />
          <Contact />
          <Footer />
          <ChatWidget
            position="bottom-right"
            assistantImageUrl={profile.personalContext.assistant.avatarUrl}
          />
        </Suspense>
      </main>
    </RootProvider>
  )
}
