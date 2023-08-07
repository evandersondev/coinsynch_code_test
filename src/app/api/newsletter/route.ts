import { NextResponse } from 'next/server'
import { z } from 'zod'

const newsletterSchema = z.object({
  email: z.string().email(),
})

export async function POST(request: Request) {
  const { email } = newsletterSchema.parse(await request.json())

  await new Promise((resolve) => setTimeout(resolve, 3000))

  return NextResponse.json({
    message: `You are subscribe on Newsletter with email: ${email}`,
  })
}
