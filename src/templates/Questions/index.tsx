import Progress from 'components/Progress'
import Loading from 'components/Loading'
import Button from 'components/Button'
import Arrows from 'components/Arrows'

import { useQuestions } from 'contexts/QuestionsContext'

import * as S from './styles'

import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const QuestionsTemplate = ({ children }: Props) => {
  const {
    questions,
    disablePrevious,
    disableNext,
    goTo,
    loading,
    questionsAnswers
  } = useQuestions()

  return (
    <S.Container>
      <Progress value={questionsAnswers.length / questions.length || 0} />

      {loading ? (
        <Loading />
      ) : (
        <>
          <S.Wrapper>{children}</S.Wrapper>

          <S.Buttons>
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
          </S.Buttons>
        </>
      )}
    </S.Container>
  )
}

export default QuestionsTemplate
