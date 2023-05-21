import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@chakra-ui/react'
import { NavBar } from './NavBar'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <Box w='full'>
      <Header />

      <Box px={[4, 8, 12]} h='full'>
        {children}
      </Box>

      <NavBar />
    </Box>
  )
}

Layout.propTypes = { children: PropTypes.element }
