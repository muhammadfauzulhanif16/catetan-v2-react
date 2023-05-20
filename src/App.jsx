import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { Home } from './pages/Home'
import { mode } from '@chakra-ui/theme-tools'
import { Layout } from './components/Layout'

export const App = () => {
  const theme = extendTheme({
    fonts: {
      body: 'Josefin Sans',
      heading: 'Josefin Sans'
    },
    styles: {
      global: (props) => ({
        body: {
          color: mode('gray.800', 'whiteAlpha.900')(props),
          bg: mode('white', 'gray.800')(props),
          boxSizing: 'border-box'
        }
      })
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
