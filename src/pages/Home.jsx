import React from 'react'
import { GridItem, SimpleGrid } from '@chakra-ui/react'
import { noteList } from '../data/noteList'

export const Home = () => {
  const notes = noteList(50)

  return (
    <SimpleGrid columns={[1, 2, 4]} gap={4} w='full'>
      {notes.map(({ id }) => (
        <GridItem key={id} bgColor='blue.200' h={16}>
          {id}
        </GridItem>
      ))}
    </SimpleGrid>
  )
}
