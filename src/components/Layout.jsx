import React from 'react'
import PropTypes from 'prop-types'
import { Grid, GridItem } from '@chakra-ui/react'
import { NavBar } from './NavBar'
import { Header } from './Header'

export const Layout = ({ children }) => {
  return (
    <Grid
      templateRows='repeat(8, 1fr)'
      color='gray.600'
      bgColor='gray.50'
      px={[4, 8, 12]}
      h='100vh'
      w='100vw'
      pos='fixed'
      // gap={[4, 8, 12]}
    >
      <GridItem h='full'>
        <Header />
      </GridItem>

      <GridItem rowSpan={6} overflow='auto'>
        {children}
      </GridItem>

      <GridItem h='full'>
        <NavBar />
      </GridItem>
    </Grid>
  )
}

Layout.propTypes = { children: PropTypes.element }
