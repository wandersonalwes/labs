import { z } from 'zod'

export const SignUpSchema = z.object({
  name: z.string().min(1, 'Nome obrigatório'),
  email: z.string().min(1, 'E-mail obrigatório').email('E-mail inválido'),
  password: z
    .string()
    .min(8, 'A senha deve conter pelo menos 8 caracteres')
    .max(20, 'A senha deve conter no máximo 20 caracteres'),
})
