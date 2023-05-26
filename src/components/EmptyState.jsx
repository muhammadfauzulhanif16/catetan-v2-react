import { Box, Flex, Text } from '@chakra-ui/react'
import { Icon } from './Icon'
import { Note as NoteFilled } from '@emotion-icons/fluentui-system-filled/Note'
import React from 'react'
import PropTypes from 'prop-types'

export const EmptyState = ({ active }) => {
  return (
    <Flex
      direction='column'
      alignItems='center'
      gap={4}
      color='gray.300'
      py={[32, 32, 24]}
    >
      <Icon
        initIcon={NoteFilled}
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
  )
}

EmptyState.propTypes = {
  active: PropTypes.string
}
