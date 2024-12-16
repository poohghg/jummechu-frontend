import { ReactNode } from 'react'

type Case = Record<string | number, ReactNode>

interface Props<T extends Case> {
	value: keyof T | 'default'
	caseByValue: T
}

export default function SwitchCase<T extends Case>({
	value,
	caseByValue,
}: Props<T>) {
	return caseByValue[value]
}
