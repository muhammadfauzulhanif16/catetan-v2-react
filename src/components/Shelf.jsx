import { GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'

export const Shelf = ({ notes }) => {
  return (
    <SimpleGrid columns={[1, 2, 4]} gap={4} w='full' pb={[24, 32, 40]}>
      {notes.map(({ id, title }) => (
        <GridItem key={id} bgColor='blue.200' h={16}>
          {title}
        </GridItem>
      ))}
    </SimpleGrid>
  )
}

Shelf.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
}
