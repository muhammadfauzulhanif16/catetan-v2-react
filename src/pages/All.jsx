import React from 'react'
import { Shelf } from '../components/Shelf'
import PropTypes from 'prop-types'

export const All = ({ notes }) => {
  notes = notes.filter(({ archived }) => archived === false)

  return <Shelf notes={notes} />
}

All.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
}
