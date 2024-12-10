import { NextResponse, NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  console.log(request.nextUrl)
  if (request.nextUrl.pathname.startsWith('/login')) {
    console.log('현재 시각 ::', new Date().toLocaleString()) // <- 현재 시각 출력됨
    console.log(request.headers.get('sec-ch-ua-platform')) // <- 클라이언트의 운영체제가 출력됨
    return NextResponse.next()
  }
}
