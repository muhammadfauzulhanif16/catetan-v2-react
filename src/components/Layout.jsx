import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { Header } from './Header'
import { NavBar } from './NavBar'

export const Layout = ({
  note,
  keyword,
  pathName,
  setPathName,
  children,
  onAddNote,
  onSearch
}) => {
  return (
    <Box w='full'>
      <Header pathName={pathName} keyword={keyword} onSearch={onSearch} />

      <Box px={[4, 8, 12]} h='full'>
        {children}
      </Box>

      <NavBar
        pathName={pathName}
        setPathName={setPathName}
        note={note}
        onAddNote={onAddNote}
      />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.element,
  note: PropTypes.object,
  keyword: PropTypes.string,
  pathName: PropTypes.string,
  setPathName: PropTypes.func,
  onAddNote: PropTypes.func,
  onSearch: PropTypes.func
}
