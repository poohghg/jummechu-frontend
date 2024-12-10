import type { Metadata } from 'next'
import { Viewport } from 'next'
import '@/app/_resourse/assets/scss/index.scss'
import React from 'react'
import localFont from 'next/font/local'
import genMetadata from '@/app/_head/metadata'
import genViewPort from '@/app/_head/viewport'

const geistSans = localFont({
	src: '/_resourse/fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: '/_resourse/fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	...genMetadata({
		title: '점메츄',
		description: '점메츄',
	}),
}

export function generateViewport(): Viewport {
	return genViewPort()
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ko">
			<body className={`layout ${geistSans.variable}  antialiased`}>
				{children}
			</body>
		</html>
	)
}