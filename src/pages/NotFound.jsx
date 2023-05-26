import { Flex, Text } from '@chakra-ui/react'
import { Icon } from '../components/Icon'
import React from 'react'
import {
  Home as HomeRegular,
  Page
} from '@emotion-icons/fluentui-system-regular'
import { Home as HomeFilled } from '@emotion-icons/fluentui-system-filled'
import { useNavigate } from 'react-router-dom'
import { Nav } from '../components/Nav'

export const NotFound = () => {
  const navigate = useNavigate()

  return (
    <Flex
      direction='column'
      justifyContent='center'
      alignItems='center'
      gap={4}
      color='gray.300'
      position='fixed'
      bgColor='gray.50'
      top={0}
      right={0}
      left={0}
      bottom={0}
      zIndex={3}
    >
      <Icon
        initIcon={Page}
        iconProps={{
          w: 16,
          h: 16
        }}
      />

      <Text textAlign='center'>Ooohh no..., page not found</Text>

      <Nav
        initIcon={HomeRegular}
        finalIcon={HomeFilled}
        text='Back to Home'
        buttonProps={{
          gap: [2, 4],
          onClick: () => navigate('/'),
          color: 'gray.600',
          bgColor: 'yellow.200',
          _hover: {
            bgColor: 'yellow.300'
          }
        }}
        textProps={{
          fontSize: 'sm'
        }}
        iconProps={{
          w: 6,
          h: 6
        }}
      />
      {/* <Button onClick={() => navigate('/')}>Back to Home</Button> */}
    </Flex>
  )
}
