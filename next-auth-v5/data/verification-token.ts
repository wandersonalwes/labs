import { prisma } from '@/lib/prisma'

export const getVerificationTokenByToken = async (token: string) => {
  const verificationToken = await prisma.verificationToken.findFirst({
    where: { token },
  })

  return verificationToken
}

export const getVerificationTokenByEmail = async (email: string) => {
  const verificationToken = await prisma.verificationToken.findFirst({
    where: { email },
  })

  return verificationToken
}
