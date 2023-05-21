import React from 'react'
import PropTypes from 'prop-types'
import { Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { Item } from './Item'
import { Icon } from './Icon'
import { Note } from '@emotion-icons/fluentui-system-filled'

export const Shelf = ({ notes, setNotes }) => {
  return (
    <>
      {notes.length > 0
        ? (
        <SimpleGrid columns={[1, 2, 2, 3]} gap={4} w='full' pb={[24, 32, 40]}>
          {notes?.map((note) => (
            <Item key={note.id} data={note} notes={notes} setNotes={setNotes} />
          ))}
        </SimpleGrid>
          )
        : (
        <Flex
          direction='column'
          alignItems='center'
          gap={4}
          color='gray.300'
          py={[32, 32, 24]}
        >
          <Icon
            initIcon={Note}
            iconProps={{
              w: 16,
              h: 16
            }}
          />

          <Text textAlign='center'>
            No notes yet. <br /> Add one or more notes.-
          </Text>
        </Flex>
          )}
    </>
  )
}

Shelf.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  setNotes: PropTypes.func
}
