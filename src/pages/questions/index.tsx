import styled from 'styled-components'

import Loading from 'components/Loading'
import Title from 'components/Title'
import Progress from 'components/Progress'
import Ranger from 'components/Ranger'
import Button from 'components/Button'
import Arrows from 'components/Arrows'

import { useQuestions } from 'contexts/QuestionsContext'

import type { NextPage } from 'next'

const QuestionsPage: NextPage = () => {
  const {
    currentQuestion,
    disablePrevious,
    disableNext,
    goTo,
    loading,
    questions,
    progressValue,
    answerQuestion
  } = useQuestions()

  return (
    <Container>
      <Progress value={progressValue} />

      {loading ? (
        <Loading />
      ) : (
        <>
          {questions.map((question, i) => (
            <Wrapper
              key={question.id}
              visible={currentQuestion?.id === question.id}
            >
              <Question>
                <Title tag='h2'>
                  {++i}. {question.category.name}
                  {currentQuestion?.id === question.id ? 'visible' : 'none'}
                </Title>
                <Title tag='h3' style={{ marginTop: '30px' }}>
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

          <Buttons>
            <Arrows
              disableUp={disablePrevious}
              disableDown={disableNext}
              onClickUp={() => goTo('previous')}
              onClickDown={() => goTo('next')}
            />

            <Button
              rounded={true}
              disabled={disableNext}
              onClick={() => goTo('next')}
            >
              Continue
            </Button>
          </Buttons>
        </>
      )}
    </Container>
  )
}

export default QuestionsPage

const Container = styled.main`
  height: 96vh;
  position: relative;

  padding: 42px 32px;
`

const Question = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
`

interface WrapperProps {
  visible?: boolean
}

const Wrapper = styled.div<WrapperProps>`
  width: 100vw;
  height: 100%;

  ${({ visible }) => (visible ? 'display: flex;' : 'display: none;')}

  flex-direction: column;
  justify-content: space-between;

  padding: 48px 72px 24px 32px;
`

const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
`
