import React from 'react'
import PropTypes from 'prop-types'
import { Icon as IconChakra } from '@chakra-ui/react'

export const Icon = ({ initIcon, finalIcon, iconProps }) => {
  return (
    <>
      <IconChakra
        as={initIcon}
        _groupHover={{ display: `${finalIcon ? 'none' : 'block'}` }}
        {...iconProps}
      />

      {finalIcon
        ? (
        <IconChakra
          as={finalIcon}
          display='none'
          _groupHover={{ display: 'block' }}
          {...iconProps}
        />
          )
        : (
            ''
          )}
    </>
  )
}

Icon.propTypes = {
  initIcon: PropTypes.elementType.isRequired,
  finalIcon: PropTypes.elementType,
  iconProps: PropTypes.object
}
