import React from 'react'
import { Shelf } from '../components/Shelf'
import PropTypes from 'prop-types'

export const All = ({ notes, onArchive, onDelete, setPathName }) => {
  const allNote = notes.filter(({ archived }) => archived === false)

  return (
    <Shelf
      notes={allNote}
      onArchive={onArchive}
      onDelete={onDelete}
      setPathName={setPathName}
      active='All'
    />
  )
}

All.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
  setPathName: PropTypes.func
}
