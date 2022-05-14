import Ranger from 'components/Ranger'

import { useQuestions } from 'contexts/QuestionsContext'

import type { NextPage } from 'next'

const QuestionsPage: NextPage = () => {
  const { questions, answerQuestion } = useQuestions()

  return (
    <>
      {questions.map((question) => (
        <Ranger
          key={question.id}
          optionsSize={3}
          side='both'
          onSelect={(answer) => answerQuestion(question.id, answer)}
        />
      ))}
    </>
  )
}

export default QuestionsPage
