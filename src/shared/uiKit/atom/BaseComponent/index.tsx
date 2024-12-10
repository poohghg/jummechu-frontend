import React, { Component, ElementType, ReactNode, useRef } from 'react'
import { TPolymorphic, TPolymorphicRef } from '@/shared/type/component'

interface Props<T extends ElementType> {
	as: T
	children?: ReactNode
	ref?: TPolymorphicRef<T>
}

function BaseComponent<T extends ElementType>({
	as,
	children,
	...props
}: TPolymorphic<T, Props<T>>) {
	const Component: ElementType = as
	return <Component {...props}>{children}</Component>
}

export default BaseComponent

const Test = () => {
	const ref = useRef<HTMLButtonElement>(null)

	return (
		<BaseComponent as={'button'} ref={ref}>
			Test
		</BaseComponent>
	)
}