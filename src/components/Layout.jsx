import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { Header } from './Header'
import { NavBar } from './NavBar'

export const Layout = ({
  note,
  notes,
  setNote,
  setNotes,
  pathName,
  setPathName,
  children
}) => {
  return (
    <Box w='full'>
      <Header pathName={pathName} />

      <Box px={[4, 8, 12]} h='full'>
        {children}
      </Box>

      <NavBar
        pathName={pathName}
        setPathName={setPathName}
        note={note}
        notes={notes}
        setNote={setNote}
        setNotes={setNotes}
      />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
  note: PropTypes.object,
  notes: PropTypes.arrayOf(PropTypes.object),
  setNote: PropTypes.func,
  setNotes: PropTypes.func,
  pathName: PropTypes.string,
  setPathName: PropTypes.func
}
