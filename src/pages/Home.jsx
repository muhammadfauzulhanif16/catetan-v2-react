import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import { noteList } from '../data/noteList'

export const Home = () => {
  const notes = noteList(50)

  console.log(notes)

  return (
    <Grid
      // w={0}
      // h={0}
      templateColumns='repeat(4, 1fr)'
      // flexGrow={1}
      gap={4}

      // mb={36}
    >
      <GridItem>1</GridItem>

      {notes?.map(({ id }) => (
        <GridItem key={id} bgColor='blue.200'>
          {id}
        </GridItem>
      ))}
    </Grid>
  )
}
