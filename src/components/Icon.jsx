import React from 'react'
import PropTypes from 'prop-types'
import { Icon as IconChakra } from '@chakra-ui/react'

export const Icon = ({ iconStart, iconEnd, w, h }) => {
  return (
    <>
      <IconChakra
        as={iconStart}
        w={w}
        h={h}
        _groupHover={{ display: 'none' }}
      />

      <IconChakra
        as={iconEnd}
        w={w}
        h={h}
        display='none'
        _groupHover={{ display: 'block' }}
      />
    </>
  )
}

Icon.propTypes = {
  iconStart: PropTypes.elementType.isRequired,
  iconEnd: PropTypes.elementType.isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired
}
