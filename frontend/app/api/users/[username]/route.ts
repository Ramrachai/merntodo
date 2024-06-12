import { NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
  username: string
}

export const GET = async (request: NextRequest, context: { params: Params }) => {
  console.log("=========")
  let username = context.params.username
  let filterByPrice = request.nextUrl.searchParams.get('price')?.split("-")
  let lowRange = filterByPrice[0]
  let maxRange = filterByPrice[1]
  let filterByGender = request.nextUrl.searchParams.get('gender')
  console.log(filterByPrice, filterByGender)

  return NextResponse.json({ message: `Welcome Mr. ${username}`, lowRange, maxRange })
}



