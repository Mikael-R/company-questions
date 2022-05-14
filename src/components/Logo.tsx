import React from 'react'

type Props = Partial<React.ImgHTMLAttributes<HTMLImageElement>>

const Logo = (props: Props) => {
  return (
    <img {...props} width={156} height={36} src='/images/logo.svg' alt='Logo' />
  )
}

export default Logo
