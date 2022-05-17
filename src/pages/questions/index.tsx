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
    questions,
    currentQuestion,
    currentQuestionIndex,
    disablePrevious,
    disableNext,
    goTo,
    loading,
    questionsAnswers,
    answerQuestion
  } = useQuestions()

  return (
    <Container>
      <Progress value={questionsAnswers.length / questions.length} />

      {loading ? (
        <Loading />
      ) : (
        <>
          <Wrapper>
            <Question>
              <Title tag='h2'>
                {currentQuestionIndex + 1}. {currentQuestion?.category.name}
              </Title>

              <Title tag='h3' style={{ marginTop: '30px' }}>
                {currentQuestion?.title}
              </Title>

              <Ranger
                selected={
                  questionsAnswers.find(({ id }) => id === currentQuestion?.id)
                    ?.answer
                }
                optionsSize={3}
                side='both'
                onSelect={(answer) =>
                  answerQuestion(currentQuestion?.id || '', answer)
                }
              />
            </Question>
          </Wrapper>

          <Buttons>
            <Arrows
              disableUp={disablePrevious}
              disableDown={disableNext}
              onClickUp={() => goTo('previous')}
              onClickDown={() => goTo('next')}
            />

            <Button
              id='continue'
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
  height: 90vh;
  position: relative;
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

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 36px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 56px 36px;
  }
`

const Buttons = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  padding: 0 24px;

  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 0 36px;
  }
`
