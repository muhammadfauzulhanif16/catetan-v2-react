import { SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import PropTypes from 'prop-types'
import { Item } from './Item'

export const Shelf = ({ notes, setNotes }) => {
  return (
    <SimpleGrid columns={[1, 2, 2, 3]} gap={4} w='full' pb={[24, 32, 40]}>
      {notes.map((note) => (
        <Item key={note.id} data={note} notes={notes} setNotes={setNotes} />
      ))}
    </SimpleGrid>
  )
}

Shelf.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  setNotes: PropTypes.func
}
