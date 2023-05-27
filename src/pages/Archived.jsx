import React from 'react'
import { Shelf } from '../components/Shelf'
import PropTypes from 'prop-types'

export const Archived = ({ notes, onArchive, onDelete, setPathName }) => {
  const archiveNote = notes.filter(({ archived }) => archived === true)

  return (
    <Shelf
      notes={archiveNote}
      onArchive={onArchive}
      onDelete={onDelete}
      setPathName={setPathName}
      active='Archived'
    />
  )
}

Archived.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
  setPathName: PropTypes.func
}
