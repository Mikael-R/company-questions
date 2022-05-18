import { createContext, useContext, useEffect, useState } from 'react'

import Router from 'next/router'

import QuestionsRepository from 'repositories/questionsRepository'

import { isNumber } from 'utils'

import type {
  AnswerQuestion,
  AuthContextData,
  AuthProviderProps,
  CurrentQuestion,
  GoTo,
  Questions,
  QuestionsAnswers
} from 'types/contexts'

const questionsRepository = new QuestionsRepository()

const QuestionsContext = createContext<AuthContextData>({
  currentQuestion: null,
  currentQuestionIndex: -1,
  disablePrevious: true,
  disableNext: true,
  goTo: () => undefined,
  questions: [],
  questionsAnswers: [],
  loading: true,
  answerQuestion: () => undefined
})

export const QuestionsProvider = ({ children }: AuthProviderProps) => {
  const [questions, setQuestions] = useState<Questions>([])
  const [questionsAnswers, setQuestionsAnswers] = useState<QuestionsAnswers>([])
  const [currentQuestion, setCurrentQuestion] = useState<CurrentQuestion>(null)
  const [loading, setLoading] = useState(true)

  const currentQuestionIndex = questions.findIndex(
    ({ id }) => id === currentQuestion?.id
  )
  const previousQuestion = questions[currentQuestionIndex - 1]
  const nextQuestion = questions[currentQuestionIndex + 1]

  const findQuestionById = (questionId: string) =>
    questionsAnswers.find(({ id }) => id === questionId)

  const disablePrevious =
    !previousQuestion ||
    !isNumber(findQuestionById(previousQuestion.id)?.answer)

  const disableNext =
    !currentQuestion || !isNumber(findQuestionById(currentQuestion.id)?.answer)

  const send = async () => {
    await Router.push('success')
    setCurrentQuestion(questions[0])
    setQuestionsAnswers([])
  }

  const goTo: GoTo = (to) => {
    switch (true) {
      case questions.length === questionsAnswers.length && to === 'next':
        return send()

      case to === 'previous' && !disablePrevious:
        return setCurrentQuestion(previousQuestion)

      case to === 'next' && !disableNext:
        return setCurrentQuestion(nextQuestion)
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
        currentQuestionIndex,
        disablePrevious,
        disableNext,
        goTo,
        currentQuestion,
        questions,
        questionsAnswers,
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
