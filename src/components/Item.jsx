import React from 'react'
import { Box, Heading, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const Item = ({ title, body, createdAt }) => {
  return (
    <Box p={[4, 8, 12]} bgColor='yellow.100' borderRadius={16}>
      <Heading noOfLines={1}>{title}</Heading>
      <Text noOfLines={2}>{body}</Text>
      <Text textAlign='right' mt={[2, 4, 8]}>
        {createdAt}
      </Text>
    </Box>
  )
}

Item.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string
}
