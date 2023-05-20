import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Nav } from './Nav'
import { navList } from '../data/navList'

export const NavBar = () => {
  const navs = navList()

  return (
    <SimpleGrid
      boxShadow='xs'
      columns={3}
      m={[4, 8, 12]}
      bgColor='gray.100'
      p={2}
      gap={2}
      borderRadius={8}
      pos='fixed'
      bottom={0}
      right={0}
      left={0}
      // w='full'
    >
      {navs.map(({ initIcon, finalIcon, text }, id) => (
        <Nav
          key={id}
          initIcon={initIcon}
          finalIcon={finalIcon}
          text={text}
          initBgColor={text === 'Add' ? 'yellow.200' : 'gray.100'}
          finalBgColor={text === 'Add' ? 'yellow.300' : 'gray.200'}
        />
      ))}
    </SimpleGrid>
  )
}
