import { create } from 'zustand'
import { UserProfile } from '@/types/userProfile'

interface ProfileState {
  profile: UserProfile | null
  loading: boolean
  error: string | null
  setProfile: (profile: UserProfile) => void
  setLoading: (loading: boolean) => void
  setError: (error: string | null) => void
  fetchProfile: () => Promise<void>
}

export const useProfileStore = create<ProfileState>((set) => ({
  profile: null,
  loading: true,
  error: null,
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
        error: err instanceof Error ? err.message : 'An error occurred',
        loading: false,
      })
    }
  },
}))
