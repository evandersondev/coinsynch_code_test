import { NextResponse } from 'next/server'

interface User {
  name: {
    first: string
    last: string
  }
  picture: {
    thumbnail: string
  }
}

interface ResponseData {
  results: User[]
}

export async function GET() {
  const response = await fetch('https://randomuser.me/api?gender=male')
  const { results }: ResponseData = await response.json()

  const user = {
    name: `${results[0].name.first} ${results[0].name.last}`,
    imageUrl: results[0].picture.thumbnail,
  }

  return NextResponse.json(user)
}
