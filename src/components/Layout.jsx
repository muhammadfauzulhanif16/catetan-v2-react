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
      h='100vh'
      pos='fixed'
      w='full'
    >
      <Header />

      <Box px={[4, 8, 12]} pb={[24, 32, 40]} h='full' overflow='auto'>
        {children}
      </Box>

      <NavBar />
    </Flex>
  )
}

Layout.propTypes = { children: PropTypes.element }
