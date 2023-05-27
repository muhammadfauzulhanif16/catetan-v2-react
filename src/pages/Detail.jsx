import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { getNote } from '../utils/noteList'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const note = getNote(useParams().id)
  console.log(note, 'detail')
  return (
    <Flex direction='column' gap={4} pb={[32, 32, 24]}>
      <Heading noOfLines={1} size='lg'>
        {note.title}
      </Heading>
      <Text noOfLines={2}>{note.body}</Text>
    </Flex>
  )
}
