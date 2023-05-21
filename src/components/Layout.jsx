import React from 'react'
import PropTypes from 'prop-types'
import { Flex } from '@chakra-ui/react'
import { NavBar } from './NavBar'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <Flex
      direction='column'
      color='gray.600'
      bgColor='gray.50'
      px={[4, 8, 12]}
      gap={[4, 8, 12]}
      mb={[24, 32, 40]}
    >
      <Header />

      <Flex flexGrow={1} bgColor='green.200'>
        {children}
      </Flex>

      <NavBar />
    </Flex>
  )
}

Layout.propTypes = { children: PropTypes.element }
