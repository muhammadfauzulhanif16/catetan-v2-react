import React from 'react'
import { Button } from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'

export const Archive = () => {
  const navigate = useNavigate()

  return <Button onClick={() => navigate('/')}>Archive</Button>
}
