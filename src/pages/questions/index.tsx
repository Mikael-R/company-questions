import styled from 'styled-components'

import Ranger from 'components/Ranger'
import Title from 'components/Title'

import { useQuestions } from 'contexts/QuestionsContext'

import type { NextPage } from 'next'

const QuestionsPage: NextPage = () => {
  const { questions, answerQuestion } = useQuestions()

  return (
    <Container>
      {questions.map((question, i) => (
        <Wrapper key={question.id}>
          <Question>
            <Title tag='h2'>
              {i + 1}. {question.category.name}
            </Title>

            <Title tag='h3' style={{ margin: '30px 0 110px 0' }}>
              {question.title}
            </Title>

            <Ranger
              key={question.id}
              optionsSize={3}
              side='both'
              onSelect={(answer) => answerQuestion(question.id, answer)}
            />
          </Question>
        </Wrapper>
      ))}
    </Container>
  )
}

export default QuestionsPage

const Container = styled.main``

const Question = styled.div`
  display: flex;
  flex-direction: column;

  padding: 48px 32px;
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 48px 32px;
`
