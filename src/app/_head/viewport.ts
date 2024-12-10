import type { Viewport } from 'next'

export async function getTheme() {
	// const theme = (await cookies()).get('theme')
	// if (!theme) return undefined
	// return theme === 'dark' ? '#1c1c1c' : '#ffffff'
	return '#ffffff'
}

export default function genViewPort(): Viewport {
	return {
		width: 'device-width',
		initialScale: 1,
		maximumScale: 1,
		minimumScale: 1,
		userScalable: false,
		// themeColor: getTheme(),
		viewportFit: 'cover',
	}
}