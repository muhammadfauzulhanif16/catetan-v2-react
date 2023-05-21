import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './Item'

export const Shelf = ({ notes }) => {
  return (
    <SimpleGrid columns={[1, 2, 2, 3]} gap={4} w='full' pb={[24, 32, 40]}>
      {notes.map(({ id, title, body, createdAt }) => (
        <Item key={id} title={title} body={body} createdAt={createdAt} />
      ))}
    </SimpleGrid>
  )
}

Shelf.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object)
}
