import React from 'react'
import { Shelf } from '../components/Shelf'
import PropTypes from 'prop-types'

export const Archive = ({ notes, archiveChange }) => {
  const archiveNote = notes.filter(({ archived }) => archived === true)

  return (
    <Shelf notes={archiveNote} active='archive' archiveChange={archiveChange} />
  )
}

Archive.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  archiveChange: PropTypes.func
}
