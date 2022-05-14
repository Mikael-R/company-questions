export type Question = {
  id: string
  createdAt: string
  title: string
  category: Category
  surveyId?: string
}

export type Category = {
  id: number
  name: string
}
