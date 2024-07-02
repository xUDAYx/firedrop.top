import { db } from '@/lib/db'

export const getUserCount = async () => {
  try {
    const userCount = await db.user.count()
    return userCount
  } catch (error) {
    console.error('Error fetching user count:', error)
    return 0
  }
}
