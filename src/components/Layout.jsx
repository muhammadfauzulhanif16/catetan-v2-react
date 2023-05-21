import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { NavBar } from './NavBar'
import { Header } from './Header'

export const Layout = ({ children }) => {
  const [pathName, setPathName] = useState('')

  return (
    <Box w='full'>
      <Header pathName={pathName} />

      <Box px={[4, 8, 12]} h='full'>
        {children}
      </Box>

      <NavBar pathName={pathName} setPathName={setPathName} />
    </Box>
  )
}

Layout.propTypes = { children: PropTypes.element }
