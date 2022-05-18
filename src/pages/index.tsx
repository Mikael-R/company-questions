import Router from 'next/router'

import DefaultTemplate from 'templates/Default'

import type { NextPage } from 'next'

const HomePage: NextPage = () => {
  return (
    <DefaultTemplate
      title={
        <>
          Welcome to <br />
          Graypool
        </>
      }
      buttonText='Start'
      buttonOnClick={() => Router.push('questions')}
    />
  )
}

export default HomePage
