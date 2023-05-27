import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { noteList } from './noteList'
import { v4 as uuidV4 } from 'uuid'

export const Note = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [pathName, setPathName] = useState('All')
  const [notes, setNotes] = useState(noteList)
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

  const onAdd = () => {
    setNotes([
      ...notes,
      {
        id: uuidV4(),
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

  const getNote = (id) => notes.find((note) => note.id === id)

  return {
    searchParams,
    setSearchParams,
    pathName,
    setPathName,
    notes,
    setNotes,
    note,
    setNote,
    getNote,
    onKeywordChange,
    onTitleChange,
    onBodyChange,
    onAdd,
    onArchive,
    onDelete,
    searchNotes
  }
}
