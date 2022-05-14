import { ThemeProvider } from 'styled-components'

import { QuestionsProvider } from 'contexts/QuestionsContext'

import GlobalStyles from 'styles/global'
import theme from 'styles/theme'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <QuestionsProvider>
          <Component {...pageProps} />
        </QuestionsProvider>
      </ThemeProvider>
    </>
  )
}
