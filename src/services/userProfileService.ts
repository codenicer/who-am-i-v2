import { redis } from '@/lib/redis'
import { UserProfile } from '@/types/userProfile'

const USER_PROFILE_KEY = 'user:profile'

export class UserProfileService {
  static async getUserProfile(): Promise<UserProfile | null> {
    try {
      const data = await redis.call('JSON.GET', USER_PROFILE_KEY)
      if (!data) {
        throw new Error('Profile not found')
      }
      return data as UserProfile
    } catch (error) {
      console.error('Error fetching user profile:', error)
      return null
    }
  }

  static async updateUserProfile(profile: UserProfile): Promise<boolean> {
    try {
      await redis.set(USER_PROFILE_KEY, JSON.stringify(profile))
      return true
    } catch (error) {
      console.error('Error updating user profile:', error)
      return false
    }
  }
}
