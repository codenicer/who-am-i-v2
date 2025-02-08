import { redis } from '@/lib/redis'
import { UserProfile } from '@/types/userProfile'

const USER_PROFILE_KEY = 'user:profile'

export class UserProfileService {
  static async getUserProfile(): Promise<UserProfile | null> {
    try {
      const data = await redis.get(USER_PROFILE_KEY)
      return data ? JSON.parse(data) : null
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
