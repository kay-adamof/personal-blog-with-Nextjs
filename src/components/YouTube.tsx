import { Suspense } from 'react'
import { CardSkeleton } from './skeletons'
import reactElementToJsxString from 'react-element-to-jsx-string'

export const YouTube = () => <Suspense fallback={<CardSkeleton />}>$1</Suspense>
export const youTubeString = reactElementToJsxString(YouTube())

