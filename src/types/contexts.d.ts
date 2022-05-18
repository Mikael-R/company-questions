import type { ReactNode } from 'react'
import type { Question } from 'types/entities'

export type CurrentQuestion = Question | null
export type Questions = Question[]
export type QuestionsAnswers = { id: string; answer: number }[]
export type AnswerQuestion = (questionId: string, answer: number) => void
export type GoTo = (to: 'previous' | 'next') => void

export interface AuthContextData {
  currentQuestion: CurrentQuestion
  currentQuestionIndex: number
  disablePrevious: boolean
  disableNext: boolean
  goTo: GoTo
  questions: Questions
  questionsAnswers: QuestionsAnswers
  loading: boolean
  answerQuestion: AnswerQuestion
}

export interface AuthProviderProps {
  children: ReactNode
}
