import DefaultTemplate from 'template/Default'

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
    />
  )
}

export default HomePage
