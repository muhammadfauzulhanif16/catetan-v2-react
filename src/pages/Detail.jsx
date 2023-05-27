import React from 'react'
import { useParams } from 'react-router-dom'
import { Badge, Flex, Heading, Text } from '@chakra-ui/react'
import { EmptyState } from '../components/EmptyState'
import PropTypes from 'prop-types'
import { Menu } from '../components/Menu'

export const Detail = ({ getNote, onArchive, onDelete, setPathName }) => {
  const data = getNote(useParams().id)

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

            <Menu
              data={data}
              onArchive={onArchive}
              onDelete={onDelete}
              setPathName={setPathName}
              active='Detail'
            />
          </Flex>

          <Text>{data.body}</Text>
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
