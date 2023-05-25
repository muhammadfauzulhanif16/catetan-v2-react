import React from 'react'
import { Shelf } from '../components/Shelf'
import PropTypes from 'prop-types'

export const All = ({ notes, archiveChange }) => {
  const allNote = notes.filter(({ archived }) => archived === false)

  return <Shelf notes={allNote} active='all' archiveChange={archiveChange} />
}

All.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  archiveChange: PropTypes.func
}
