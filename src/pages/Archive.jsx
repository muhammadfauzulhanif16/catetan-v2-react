import React from 'react'
import { Shelf } from '../components/Shelf'
import PropTypes from 'prop-types'

export const Archive = ({ notes, onArchive, onDelete }) => {
  const archiveNote = notes.filter(({ archived }) => archived === true)

  return (
    <Shelf
      notes={archiveNote}
      active='archive'
      onArchive={onArchive}
      onDelete={onDelete}
    />
  )
}

Archive.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onArchive: PropTypes.func,
  onDelete: PropTypes.func
}
