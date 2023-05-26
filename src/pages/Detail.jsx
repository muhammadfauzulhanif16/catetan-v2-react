import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useParams } from 'react-router-dom'

export const Detail = () => {
  const { id } = useParams()

  return (
    <Flex
      direction='column'
      alignItems='center'
      gap={4}
      color='gray.300'
      py={[32, 32, 24]}
    >
      {id}
      {/* <Icon */}
      {/*  initIcon={NoteFilled} */}
      {/*  iconProps={{ */}
      {/*    w: 16, */}
      {/*    h: 16 */}
      {/*  }} */}
      {/* /> */}

      {/* <Box> */}
      {/*  <Text textAlign='center'>{`No ${active} notes yet.`}</Text> */}
      {/*  <Text textAlign='center'>Add one or more notes.</Text> */}
      {/* </Box> */}
    </Flex>
  )
}
