import Router from 'next/router'

import DefaultTemplate from 'templates/Default'

import type { NextPage } from 'next'

const SuccessPage: NextPage = () => {
  return (
    <DefaultTemplate
      title='Thank you'
      buttonText='Back to home'
      buttonOnClick={() => Router.push('/')}
    />
  )
}

export default SuccessPage
