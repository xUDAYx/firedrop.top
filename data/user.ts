import { db } from '@/lib/db'

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({ where: { email } })
    return user
  } catch {
    return null
  }
}

export const getUserById = async (id: string) => {
  try {
    const user = await db.user.findUnique({ where: { id } })
    return user
  } catch {
    return null
  }
}

export const getTotalRegisteredUsers = async () => {
  try {
    const totalUsers = await db.user.count()
    return totalUsers
  } catch (error) {
    console.error('Error fetching total registered users:', error)
    return 0
  }
}

