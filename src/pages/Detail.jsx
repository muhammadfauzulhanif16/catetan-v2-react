import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Badge, Button, Flex, Heading, Text } from '@chakra-ui/react'
import { EmptyState } from '../components/EmptyState'
import PropTypes from 'prop-types'

export const Detail = ({ getNote, onArchive, onDelete, setPathName }) => {
  const data = getNote(useParams().id)
  const navigate = useNavigate()

  return (
    <>
      {typeof data === 'undefined'
        ? (
        <EmptyState />
          )
        : (
        <Flex direction='column' gap={4} pb={[32, 32, 24]} color='gray.600'>
          <Heading noOfLines={1} size='lg'>
            {data.title}
          </Heading>

          <Flex gap={4} alignItems='center'>
            <Text color='gray.400'>{data.createdAt}</Text>

            {data.archived ? <Badge colorScheme='purple'>Archived</Badge> : ''}
          </Flex>

          <Text>{data.body}</Text>

          <Flex gap={4}>
            <Button
              colorScheme='purple'
              variant='outline'
              onClick={() => {
                navigate(data.archived ? '/' : '/archived')
                setPathName(data.archived ? 'All' : 'Archived')
                onArchive(data.id)
              }}
            >
              {data.archived ? 'Unarchived' : 'Archived'}
            </Button>

            <Button
              colorScheme='red'
              variant='outline'
              onClick={() => {
                navigate(data.archived ? '/archived' : '/')
                setPathName(data.archived ? 'Archived' : 'All')
                onDelete(data.id)
              }}
            >
              Delete
            </Button>
          </Flex>
        </Flex>
          )}
    </>
  )
}

Detail.propTypes = {
  getNote: PropTypes.func,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func,
  setPathName: PropTypes.func
}
