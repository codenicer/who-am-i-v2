import { create } from 'zustand'
import { UserProfile } from '@/types/userProfile'
import Cookies from 'js-cookie'

// Cookie configuration
const PROFILE_COOKIE_NAME = 'user_profile_data'
const IP_COOKIE_NAME = 'user_ip_data'
const COOKIE_EXPIRY = 1 / 144 // 10 minutes in days (1/144 of a day)

interface ProfileState {
  profile: UserProfile | null
  loading: boolean
  error: string | null
  ip: string | null
  setProfile: (profile: UserProfile) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setIp: (ip: string) => void
  initalizeProfile: () => Promise<void>
  fetchProfile: () => Promise<void>
  fetchIp: () => Promise<void>
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  loading: true,
  error: null,
  ip: null,
  setIp: (ip: string) => set({ ip }),
  setProfile: (profile) => {
    // Save to cookie when profile is set
    Cookies.set(PROFILE_COOKIE_NAME, JSON.stringify(profile), {
      expires: COOKIE_EXPIRY,
    })
    set({ profile })
  },
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  initalizeProfile: async () => {
    set({ loading: true, error: null })

    // Try to get data from cookies first
    const profileCookie = Cookies.get(PROFILE_COOKIE_NAME)
    const ipCookie = Cookies.get(IP_COOKIE_NAME)

    let profileLoaded = false
    let ipLoaded = false

    // Load profile from cookie if available
    if (profileCookie) {
      try {
        const profileData = JSON.parse(profileCookie)
        set({ profile: profileData })
        profileLoaded = true
      } catch (err) {
        console.error('Error parsing profile cookie:', err)
        // Cookie parsing failed, will fetch from API
      }
    }

    // Load IP from cookie if available
    if (ipCookie) {
      try {
        set({ ip: ipCookie })
        ipLoaded = true
      } catch (err) {
        console.error('Error parsing IP cookie:', err)
        // Cookie parsing failed, will fetch from API
      }
    }

    // Fetch profile from API if not loaded from cookie
    if (!profileLoaded) {
      try {
        const response = await fetch('/api/profile')
        if (!response.ok) {
          throw new Error('Failed to fetch profile')
        }
        const data = await response.json()
        const parsedProfile = JSON.parse(data)
        set({ profile: parsedProfile })

        // Save to cookie
        Cookies.set(PROFILE_COOKIE_NAME, JSON.stringify(parsedProfile), {
          expires: COOKIE_EXPIRY,
        })
      } catch (err) {
        set({
          error:
            err instanceof Error
              ? 'Failed to fetch profile: ' + err.message
              : 'An error occurred',
          loading: false,
        })
      }
    }

    // Fetch IP from API if not loaded from cookie
    if (!ipLoaded) {
      try {
        const response = await fetch('/api/client-ip', {
          cache: 'no-store',
          headers: {
            'Cache-Control': 'no-cache',
          },
        })

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        set({ ip: data.ip })

        // Save to cookie
        Cookies.set(IP_COOKIE_NAME, data.ip, { expires: COOKIE_EXPIRY })
      } catch (err) {
        console.error('IP fetch error:', err)
        set({
          error:
            err instanceof Error
              ? `Failed to fetch IP: ${err.message}`
              : 'An error occurred',
          loading: false,
          ip: 'unknown',
        })
      }
    }

    set({ loading: false })
  },

  fetchProfile: async () => {
    try {
      set({ loading: true, error: null })
      const response = await fetch('/api/profile')
      if (!response.ok) {
        throw new Error('Failed to fetch profile')
      }
      const data = await response.json()
      const parsedProfile = JSON.parse(data)

      // Save to cookie
      Cookies.set(PROFILE_COOKIE_NAME, JSON.stringify(parsedProfile), {
        expires: COOKIE_EXPIRY,
      })

      set({ profile: parsedProfile, loading: false })
    } catch (err) {
      set({
        error:
          err instanceof Error
            ? 'Failed to fetch profile: ' + err.message
            : 'An error occurred',
        loading: false,
      })
    }
  },

  fetchIp: async () => {
    try {
      set({ loading: true, error: null })
      const response = await fetch('/api/client-ip', {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache',
        },
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      // Save to cookie
      Cookies.set(IP_COOKIE_NAME, data.ip, { expires: COOKIE_EXPIRY })

      set({ ip: data.ip, loading: false })
    } catch (err) {
      console.error('IP fetch error:', err)
      set({
        error:
          err instanceof Error
            ? `Failed to fetch IP: ${err.message}`
            : 'An error occurred',
        loading: false,
        ip: 'unknown',
      })
    }
  },
}))
