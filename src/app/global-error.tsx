'use client'

export default function GlobalError({
	error,
	reset,
}: Readonly<{
	error: Error & { digest?: string }
	reset: () => void
}>) {
	return (
		<html>
			<body>에러</body>
		</html>
	)
}
