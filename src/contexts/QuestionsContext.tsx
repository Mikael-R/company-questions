import { createContext, useContext, useEffect, useState } from 'react'

import Router from 'next/router'

import QuestionsRepository from 'repositories/questionsRepository'

import type { ReactNode } from 'react'
import type { Question } from 'types/entities'

type CurrentQuestion = Question | null
type Questions = Question[]
type QuestionsAnswers = { id: string; answer: number }[]
type AnswerQuestion = (questionId: string, answer: number) => void
type GoTo = (to: 'previous' | 'next') => void

interface AuthContextData {
  currentQuestion: CurrentQuestion
  disablePrevious: boolean
  disableNext: boolean
  goTo: GoTo
  questions: Questions
  questionsAnswers: QuestionsAnswers
  progressValue: number
  loading: boolean
  answerQuestion: AnswerQuestion
}

interface AuthProviderProps {
  children: ReactNode
}

const questionsRepository = new QuestionsRepository()

const QuestionsContext = createContext<AuthContextData>({
  currentQuestion: null,
  disablePrevious: true,
  disableNext: true,
  goTo: () => undefined,
  questions: [],
  questionsAnswers: [],
  progressValue: 0,
  loading: true,
  answerQuestion: () => undefined
})

export const QuestionsProvider = ({ children }: AuthProviderProps) => {
  const [questions, setQuestions] = useState<Questions>([])
  const [questionsAnswers, setQuestionsAnswers] = useState<QuestionsAnswers>([])
  const [currentQuestion, setCurrentQuestion] = useState<CurrentQuestion>(null)
  const [loading, setLoading] = useState(true)

  const progressValue = questionsAnswers.length / questions.length || 0

  const currentQuestionIndex = questions.findIndex(
    ({ id }) => id === currentQuestion?.id
  )
  const previousQuestion = questions[currentQuestionIndex - 1]

  const disablePrevious = isNaN(
    Number(
      questionsAnswers.find(({ id }) => id === previousQuestion?.id)?.answer
    )
  )

  const disableNext = isNaN(
    Number(
      questionsAnswers.find(({ id }) => id === currentQuestion?.id)?.answer
    )
  )

  const send = async () => {
    await Router.push('success')
    setCurrentQuestion(questions[0])
    setQuestionsAnswers([])
  }

  const goTo: GoTo = (to) => {
    switch (true) {
      case progressValue === 1 && to === 'next':
        return send()

      case to === 'previous' && !disablePrevious:
        return setCurrentQuestion(questions[currentQuestionIndex - 1])

      case to === 'next' && !disableNext:
        return setCurrentQuestion(questions[currentQuestionIndex + 1])
    }
  }

  const answerQuestion: AnswerQuestion = (questionId, answer) => {
    setQuestionsAnswers([
      ...questionsAnswers.filter(({ id }) => id !== questionId),
      {
        id: questionId,
        answer
      }
    ])
  }

  const fetchQuestions = async () => {
    try {
      const { questions } = await questionsRepository.getQuestions()
      setCurrentQuestion(questions[0])
      setQuestions(questions)
    } catch {
      Router.push('/')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchQuestions()
  }, [])

  return (
    <QuestionsContext.Provider
      value={{
        disablePrevious,
        disableNext,
        goTo,
        currentQuestion,
        questions,
        questionsAnswers,
        progressValue,
        loading,
        answerQuestion
      }}
    >
      {children}
    </QuestionsContext.Provider>
  )
}

export const useQuestions = () => {
  const context = useContext(QuestionsContext)

  return context
}
