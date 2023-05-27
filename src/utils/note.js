import { useState } from 'react'
import { getNotes } from './noteList'
import { useSearchParams } from 'react-router-dom'

export const Note = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [notes, setNotes] = useState(getNotes())

  return { searchParams, setSearchParams, notes, setNotes }
}
