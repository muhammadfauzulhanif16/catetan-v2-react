import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { Header } from './Header'
import { NavBar } from './NavBar'

export const Layout = ({ note, pathName, setPathName, children, addNote }) => {
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
        addNote={addNote}
      />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
  note: PropTypes.object,
  pathName: PropTypes.string,
  setPathName: PropTypes.func,
  addNote: PropTypes.func
}
