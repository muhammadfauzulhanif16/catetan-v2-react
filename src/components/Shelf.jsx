import { GridItem, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import { noteList } from '../data/noteList'

export const Shelf = () => {
  const notes = noteList(50)
  console.log(notes)

  return (
    <SimpleGrid columns={[1, 2, 4]} gap={4} w='full'>
      {notes.map(({ id }, idx) => (
        <GridItem key={idx} bgColor='blue.200' h={16}>
          {id}
        </GridItem>
      ))}
    </SimpleGrid>
  )
}
