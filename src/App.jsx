import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'

export const App = () => {
  const theme = extendTheme({
    fonts: {
      body: 'Josefin Sans',
      heading: 'Josefin Sans'
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Home />
      </Layout>
    </ChakraProvider>
  )
}
