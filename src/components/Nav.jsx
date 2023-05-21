import React from 'react'
import { Button, Text } from '@chakra-ui/react'
import { Icon } from './Icon'
import PropTypes from 'prop-types'

export const Nav = ({
  initIcon,
  finalIcon,
  text,
  initColor,
  finalColor,
  initBgColor,
  finalBgColor,
  setPathName,
  isDisabled
}) => {
  return (
    <Button
      gap={[2, 4]}
      w='full'
      alignItems='center'
      role='group'
      color={initColor}
      bgColor={initBgColor}
      _hover={{ color: finalColor, bgColor: finalBgColor }}
      onClick={text === 'Submit' ? () => {} : () => setPathName(text)}
      isDisabled={isDisabled}
    >
      <Icon iconStart={initIcon} iconEnd={finalIcon} w={6} h={6} />

      <Text fontSize='sm'>{text ?? text}</Text>
    </Button>
  )
}

Nav.propTypes = {
  initIcon: PropTypes.elementType.isRequired,
  finalIcon: PropTypes.elementType.isRequired,
  initColor: PropTypes.string,
  finalColor: PropTypes.string,
  initBgColor: PropTypes.string,
  finalBgColor: PropTypes.string,
  text: PropTypes.string,
  setPathName: PropTypes.any,
  isDisabled: PropTypes.bool
}
