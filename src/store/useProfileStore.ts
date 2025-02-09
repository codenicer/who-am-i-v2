import { create } from 'zustand'
import { UserProfile } from '@/types/userProfile'

interface ProfileState {
  profile: UserProfile | null
  loading: boolean
  error: string | null
  ip: string | null
  setProfile: (profile: UserProfile) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  setIp: (ip: string) => void
  fetchProfile: () => Promise<void>
  fetchIp: () => Promise<void>
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  loading: true,
  error: null,
  ip: null,
  setIp: (ip: string) => set({ ip }),
  setProfile: (profile) => set({ profile }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  fetchProfile: async () => {
    try {
      set({ loading: true, error: null })
      const response = await fetch('/api/profile')
      if (!response.ok) {
        throw new Error('Failed to fetch profile')
      }
      const data = await response.json()
      set({ profile: JSON.parse(data), loading: false })
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
