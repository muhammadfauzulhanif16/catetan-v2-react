import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex } from '@chakra-ui/react'
import { NavBar } from './NavBar'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <Flex
      direction='column'
      // color='gray.600'

      px={[4, 8, 12]}
      mb={[24, 32, 40]}
    >
      <Header />

      <Box h='full'>{children}</Box>

      <NavBar />
    </Flex>
  )
}

Layout.propTypes = { children: PropTypes.element }
