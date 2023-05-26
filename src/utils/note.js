import { useState } from 'react'
import { noteList } from './noteList'
import { useSearchParams } from 'react-router-dom'

export const Note = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [notes, setNotes] = useState(noteList())

  return { searchParams, setSearchParams, notes, setNotes }
}
