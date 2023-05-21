import React from 'react'
import { Box, Flex, Heading, Text } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import { Nav } from './Nav'
import { MoreHorizontal as MoreHorizontalFilled } from '@emotion-icons/fluentui-system-filled'
import { MoreHorizontal as MoreHorizontalRegular } from '@emotion-icons/fluentui-system-regular'

export const Item = ({ title, body, createdAt }) => {
  return (
    <Box p={[4, 8, 12]} bgColor='yellow.100' borderRadius={8}>
      <Heading noOfLines={1} size='lg'>
        {title}
      </Heading>
      <Text noOfLines={2}>{body}</Text>

      <Flex
        mt={[2, 4, 6]}
        justifyContent='space-between'
        alignItems='center'
        gap={4}
      >
        <Nav
          initIcon={MoreHorizontalRegular}
          finalIcon={MoreHorizontalFilled}
          buttonProps={{
            variant: 'ghost',
            _hover: {
              bgColor: 'yellow.200'
            }
          }}
        />

        <Text color='gray.400'>{createdAt}</Text>
      </Flex>
    </Box>
  )
}

Item.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string
}
