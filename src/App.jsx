import React, { useState } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Layout } from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import { All } from './pages/All'
import { Add } from './pages/Add'
import { Archive } from './pages/Archive'

export const App = () => {
  const theme = extendTheme({
    fonts: {
      body: 'Josefin Sans',
      heading: 'Josefin Sans'
    },
    styles: {
      global: (props) => ({
        body: {
          // color: mode('gray.800', 'whiteAlpha.900')(props),
          bg: mode('gray.50', 'gray.900')(props)
        }
      })
    }
  })

  const [note, setNote] = useState({
    title: {
      content: '',
      max: 50
    },
    body: {
      content: ''
    }
  })

  return (
    <ChakraProvider theme={theme}>
      <Layout note={note}>
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/add' element={<Add note={note} setNote={setNote} />} />
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  )
}
