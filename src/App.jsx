import React, { useState } from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { Layout } from './components/Layout'
import { Route, Routes } from 'react-router-dom'
import { All } from './pages/All'
import { Add } from './pages/Add'
import { Archive } from './pages/Archive'
import { noteList } from './utils/noteList'

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

  const [notes, setNotes] = useState(noteList())
  const [note, setNote] = useState({
    title: {
      content: '',
      max: 50
    },
    body: {
      content: ''
    }
  })
  const [pathName, setPathName] = useState('All')

  const onTitleChange = (e) => {
    if (e.target.value.length <= 50) {
      setNote({
        title: {
          content: e.target.value,
          max: 50 - e.target.value.length
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
        max: note.title.max
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
        max: 50
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
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, archived: !note.archived } : note
      )
    )
  }

  // const {
  //   notes,
  //   note,
  //   setNote,
  //   pathName,
  //   setPathName,
  //   titleChange,
  //   bodyChange,
  //   addNote
  // } = Note()

  return (
    <ChakraProvider theme={theme}>
      <Layout
        note={note}
        pathName={pathName}
        setPathName={setPathName}
        addNote={onAddNote}
      >
        <Routes>
          <Route
            path='/'
            element={
              <All notes={notes} onArchive={onArchive} onDelete={onDelete} />
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
                notes={notes}
                onArchive={onArchive}
                onDelete={onDelete}
              />
            }
          />
        </Routes>
      </Layout>
    </ChakraProvider>
  )
}
