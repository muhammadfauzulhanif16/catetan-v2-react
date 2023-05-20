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
      // w='100vw'
      // pos='fixed'
      gap={[4, 8, 12]}
      // boxSizing='content-box'
    >
      <Header />

      <Flex flexGrow={1} bgColor='green.200' h={0}>
        {children}
      </Flex>

      <NavBar />
    </Flex>
  )
}

Layout.propTypes = { children: PropTypes.element }
