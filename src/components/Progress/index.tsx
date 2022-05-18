import * as S from './styles'

import type { ProgressHTMLAttributes } from 'react'

export type Props = ProgressHTMLAttributes<HTMLProgressElement>

const Progress = (props: Props) => <S.Progress {...props} />

export default Progress
