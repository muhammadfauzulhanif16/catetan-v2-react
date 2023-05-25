import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import { Item } from './Item'
import { Icon } from './Icon'
import { Note as NoteFilled } from '@emotion-icons/fluentui-system-filled'
import { Note as NoteRegular } from '@emotion-icons/fluentui-system-regular'

export const Shelf = ({ notes, active, archiveChange }) => {
  return (
    <>
      {notes.length > 0
        ? (
        <SimpleGrid columns={[1, 2, 2, 3]} gap={4} w='full' pb={[24, 32, 40]}>
          {notes.map((note) => (
            <Item key={note.id} data={note} archiveChange={archiveChange} />
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
          role='group'
        >
          <Icon
            initIcon={NoteFilled}
            finalIcon={NoteRegular}
            iconProps={{
              w: 16,
              h: 16
            }}
          />

          <Box>
            <Text textAlign='center'>{`No ${active} notes yet.`}</Text>
            <Text textAlign='center'>Add one or more notes.</Text>
          </Box>
        </Flex>
          )}
    </>
  )
}

Shelf.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  active: PropTypes.string,
  archiveChange: PropTypes.func
}
