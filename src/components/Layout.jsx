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
  onAdd,
  onKeywordChange
}) => {
  return (
    <Box w='full' userSelect='none'>
      <Header
        pathName={pathName}
        keyword={keyword}
        onKeywordChange={onKeywordChange}
      />

      <Box px={[4, 8, 12]} h='full'>
        {children}
      </Box>

      <NavBar
        pathName={pathName}
        setPathName={setPathName}
        note={note}
        onAdd={onAdd}
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
  onAdd: PropTypes.func,
  onKeywordChange: PropTypes.func
}
