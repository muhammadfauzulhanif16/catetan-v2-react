import React from 'react'
import { useParams } from 'react-router-dom'
import { Note } from '../utils/note'
import { Flex, Heading, Text } from '@chakra-ui/react'
import { EmptyState } from '../components/EmptyState'

export const Detail = () => {
  const { getNote } = Note()
  const { id } = useParams()
  console.log(id, 'detail')

  const note = getNote(id)

  console.log(note)

  return (
    <>
      {typeof note === 'undefined'
        ? (
        <EmptyState />
          )
        : (
        <Flex direction='column' gap={4} pb={[32, 32, 24]} color='gray.600'>
          <Heading noOfLines={1} size='lg'>
            {note?.title}
          </Heading>
          <Text noOfLines={2}>{note?.body}</Text>
        </Flex>
          )}
    </>
  )
}
