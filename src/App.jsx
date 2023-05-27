import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Layout } from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import { All } from './pages/All'
import { Add } from './pages/Add'
import { Archived } from './pages/Archived'
import { NotFound } from './pages/NotFound'
import { Detail } from './pages/Detail'
import { Note } from './utils/note'

export const App = () => {
  const theme = extendTheme({
    fonts: {
      body: 'Josefin Sans',
      heading: 'Josefin Sans'
    },
    styles: {
      global: (props) => ({
        body: {
          color: mode('gray.500', 'gray.300')(props),
          bg: mode('white', 'gray.900')(props)
        }
      })
    }
  })

  const {
    pathName,
    setPathName,
    note,
    setNote,
    onKeywordChange,
    onTitleChange,
    onBodyChange,
    onAdd,
    onArchive,
    onDelete,
    searchNotes,
    getNote
  } = Note()

  return (
    <ChakraProvider theme={theme}>
      <Layout
        note={note}
        keyword={note.title.keyword}
        pathName={pathName}
        setPathName={setPathName}
        onAdd={onAdd}
        onKeywordChange={onKeywordChange}
      >
        <Routes>
          <Route
            path='/'
            element={
              <All
                notes={searchNotes}
                onArchive={onArchive}
                onDelete={onDelete}
                setPathName={setPathName}
              />
            }
          />
          <Route
            path='/notes/:id'
            element={
              <Detail
                getNote={getNote}
                onArchive={onArchive}
                onDelete={onDelete}
                setPathName={setPathName}
              />
            }
          />
          <Route
            path='/add'
            element={
              <Add
                note={note}
                setNote={setNote}
                onTitleChange={onTitleChange}
                onBodyChange={onBodyChange}
              />
            }
          />
          <Route
            path='/archived'
            element={
              <Archived
                notes={searchNotes}
                onArchive={onArchive}
                onDelete={onDelete}
                setPathName={setPathName}
              />
            }
          />

          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  )
}
