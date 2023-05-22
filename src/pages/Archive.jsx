import React from 'react'
import { Shelf } from '../components/Shelf'
import PropTypes from 'prop-types'

export const Archive = ({ notes, setNotes }) => {
  notes = notes.filter(({ archived }) => archived === true)

  return <Shelf notes={notes} setNotes={setNotes} active='archive' />
}

Archive.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  setNotes: PropTypes.func
}
