import type { Question } from './entities'

export type GetQuestionsResponse = {
  surveyId: number
  questions: Question[]
}
