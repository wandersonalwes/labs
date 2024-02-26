import type { NextAuthConfig } from 'next-auth'

import Google from 'next-auth/providers/google'
import Credentials from 'next-auth/providers/credentials'

import { getUserByEmail } from './data/user'
import { LoginSchema } from './schemas/login-schema'

import bcrypt from 'bcryptjs'

export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)

        if (!validatedFields.success) return null

        const { email, password } = validatedFields.data

        const user = await getUserByEmail(email)

        if (!user || !user.password) return null

        const passwordsMatch = await bcrypt.compare(password, user.password)

        if (!passwordsMatch) return null

        return user
      },
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
} satisfies NextAuthConfig
