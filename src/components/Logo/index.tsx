import type { ImgHTMLAttributes } from 'react'

type Props = Partial<ImgHTMLAttributes<HTMLImageElement>>

const Logo = (props: Props) => {
  return (
    <img {...props} width={156} height={36} src='/images/logo.svg' alt='Logo' />
  )
}

export default Logo
