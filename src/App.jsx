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

  // const titleChange = (e) => {
  //   setNote({
  //     title: {
  //       content: e.target.value,
  //       max: 50 - e.target.value.length
  //     },
  //     body: {
  //       content: note.body.content
  //     }
  //   })
  // }

  const bodyChange = (e) => {
    setNote({
      title: {
        content: note.title.content,
        max: note.title.max
      },
      body: {
        content: e.target.value
      }
    })
  }

  return (
    <ChakraProvider theme={theme}>
      <Layout note={note}>
        <Routes>
          <Route path='/' element={<All />} />
          <Route
            path='/add'
            element={
              <Add
                note={note}
                // titleChange={titleChange}
                setNote={setNote}
                bodyChange={bodyChange}
              />
            }
          />
          <Route path='/archive' element={<Archive />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  )
}
