import styled from 'styled-components'

import Title from 'components/Title'
import Progress from 'components/Progress'
import Ranger from 'components/Ranger'

import { useQuestions } from 'contexts/QuestionsContext'

import type { NextPage } from 'next'

const QuestionsPage: NextPage = () => {
  const { loading, questions, questionsAnswers, answerQuestion } =
    useQuestions()

  return (
    <Container>
      <Progress value={questionsAnswers.length / questions.length} />

      {loading ? (
        <Title tag='h1'>me contrata pfvr :)</Title>
      ) : (
        questions.map((question, i) => (
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
        ))
      )}
    </Container>
  )
}

export default QuestionsPage

const Container = styled.main`
  position: relative;

  padding: 42px 32px;
`

const Question = styled.div`
  display: flex;
  flex-direction: column;
`

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 48px 32px;
`
