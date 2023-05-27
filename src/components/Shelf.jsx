import React from 'react'
import PropTypes from 'prop-types'
import { SimpleGrid } from '@chakra-ui/react'
import { Item } from './Item'
import { EmptyState } from './EmptyState'

export const Shelf = ({ notes, onArchive, onDelete }) => {
  return (
    <>
      {notes.length > 0
        ? (
        <SimpleGrid columns={[1, 1, 2, 3]} gap={4} w='full' pb={[24, 32, 40]}>
          {notes.map((note) => (
            <Item
              key={note.id}
              data={note}
              onArchive={onArchive}
              onDelete={onDelete}
            />
          ))}
        </SimpleGrid>
          )
        : (
        <EmptyState />
          )}
    </>
  )
}

Shelf.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  onArchive: PropTypes.func,
  onDelete: PropTypes.func
}
