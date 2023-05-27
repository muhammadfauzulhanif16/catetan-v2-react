import React from 'react'
import { useParams } from 'react-router-dom'
import { Badge, Flex, Heading, Text } from '@chakra-ui/react'
import { EmptyState } from '../components/EmptyState'
import PropTypes from 'prop-types'

export const Detail = ({ getNote }) => {
  const note = getNote(useParams().id)

  console.log(useParams().id, 'detail')
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

          <Flex gap={4} alignItems='center'>
            <Text color='gray.400'>{note?.createdAt}</Text>

            {note?.archived ? <Badge colorScheme='purple'>Archived</Badge> : ''}
          </Flex>

          <Text>{note?.body}</Text>
        </Flex>
          )}
    </>
  )
}

Detail.propTypes = {
  getNote: PropTypes.func
}
