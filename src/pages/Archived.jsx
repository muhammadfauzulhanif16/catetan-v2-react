import React from 'react'
import { Shelf } from '../components/Shelf'
import PropTypes from 'prop-types'

export const Archived = ({ notes, onArchive, onDelete }) => {
  const archiveNote = notes.filter(({ archived }) => archived === true)

  return (
    <Shelf
      notes={archiveNote}
      active='archived'
      onArchive={onArchive}
      onDelete={onDelete}
    />
  )
}

Archived.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onArchive: PropTypes.func,
  onDelete: PropTypes.func
}
