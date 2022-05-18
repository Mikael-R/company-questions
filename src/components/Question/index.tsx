import Title from 'components/Title'
import Ranger from 'components/Ranger'

import { useQuestions } from 'contexts/QuestionsContext'

import * as S from './styles'

const Question = () => {
  const {
    currentQuestion,
    currentQuestionIndex,
    questionsAnswers,
    answerQuestion
  } = useQuestions()

  return (
    <S.Wrapper>
      <Title tag='h2'>
        {currentQuestionIndex + 1}. {currentQuestion?.category.name}
      </Title>

      <Title tag='h3' style={{ marginTop: '30px' }}>
        {currentQuestion?.title}
      </Title>

      <Ranger
        selected={
          questionsAnswers.find(({ id }) => id === currentQuestion?.id)?.answer
        }
        optionsSize={3}
        side='both'
        onSelect={(answer) => answerQuestion(currentQuestion?.id || '', answer)}
      />
    </S.Wrapper>
  )
}

export default Question
