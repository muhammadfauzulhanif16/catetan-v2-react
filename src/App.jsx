import React, { useState } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Layout } from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import { All } from './pages/All'
import { Add } from './pages/Add'
import { Archive } from './pages/Archive'
import { Note } from './utils/note'
import { NotFound } from './pages/NotFound'

export const App = () => {
  const theme = extendTheme({
    fonts: {
      body: 'Josefin Sans',
      heading: 'Josefin Sans'
    },
    styles: {
      global: (props) => ({
        body: {
          color: mode('gray.600', 'gray.300')(props),
          bg: mode('gray.50', 'gray.900')(props)
        }
      })
    }
  })

  const { searchParams, setSearchParams, notes, setNotes } = Note()

  // const [searchParams, setSearchParams] = useSearchParams()
  // const [notes, setNotes] = useState(noteList())
  const [note, setNote] = useState({
    title: {
      content: '',
      max: 50,
      keyword: searchParams.get('keyword') || ''
    },
    body: {
      content: ''
    }
  })
  const [pathName, setPathName] = useState('All')

  const onKeywordChange = ({ target: { value: keyword } }) => {
    setNote({
      title: {
        content: note.title.content,
        max: note.title.max,
        keyword
      },
      body: {
        content: note.body.content
      }
    })

    setSearchParams({ keyword })
  }

  const onTitleChange = (e) => {
    if (e.target.value.length <= 50) {
      setNote({
        title: {
          content: e.target.value,
          max: 50 - e.target.value.length,
          keyword: note.title.keyword
        },
        body: {
          content: note.body.content
        }
      })
    }
  }

  const onBodyChange = (e) => {
    setNote({
      title: {
        content: note.title.content,
        max: note.title.max,
        keyword: note.title.keyword
      },
      body: {
        content: e.target.value
      }
    })
  }

  const onAddNote = () => {
    setNotes([
      ...notes,
      {
        id: +new Date(),
        title: note.title.content,
        body: note.body.content,
        archived: false,
        createdAt: new Date().toLocaleString()
      }
    ])

    setNote({
      title: {
        content: '',
        max: 50,
        keyword: note.title.keyword
      },
      body: {
        content: ''
      }
    })
  }

  const onArchive = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    )
  }

  const onDelete = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  const searchNotes = notes.filter((data) =>
    note.title.keyword === ''
      ? data
      : data.title.toLowerCase().includes(note.title.keyword.toLowerCase())
  )

  return (
    <ChakraProvider theme={theme}>
      <Layout
        note={note}
        keyword={note.title.keyword}
        pathName={pathName}
        setPathName={setPathName}
        onAddNote={onAddNote}
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
            path='/archive'
            element={
              <Archive
                notes={searchNotes}
                onArchive={onArchive}
                onDelete={onDelete}
              />
            }
          />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </Layout>
    </ChakraProvider>
  )
}
