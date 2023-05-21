import React from 'react'
import { Shelf } from '../components/Shelf'
import PropTypes from 'prop-types'

export const All = ({ notes }) => {
  notes = notes.filter(({ archived }) => archived === false)

  return (
    <>
      <Shelf notes={notes} />

      {/* <NavBar */}
      {/*  pathName={pathName} */}
      {/*  setPathName={setPathName} */}
      {/*  note={note} */}
      {/*  notes={notes} */}
      {/*  setNote={setNote} */}
      {/*  setNotes={setNotes} */}
      {/* /> */}
    </>
  )
}

All.propTypes = {
  note: PropTypes.object,
  notes: PropTypes.arrayOf(PropTypes.object),
  setNote: PropTypes.func,
  setNotes: PropTypes.func
}
