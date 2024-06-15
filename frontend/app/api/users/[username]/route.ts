import { NextApiResponse } from 'next'
import { NextRequest, NextResponse } from 'next/server'

type Params = {
  username: string
}

export const GET = async (request: NextRequest, context: { params: Params }) => {

  let username = context.params.username
  return NextResponse.json({ message: `Welcome Mr. ${username}` })
}



