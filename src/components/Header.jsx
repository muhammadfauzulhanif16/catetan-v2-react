import React from 'react'
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  SimpleGrid
} from '@chakra-ui/react'
import { Icon } from './Icon'
import {
  Note as NoteFilled,
  Search as SearchFilled
} from '@emotion-icons/fluentui-system-filled'
import {
  Note as NoteRegular,
  Search as SearchRegular
} from '@emotion-icons/fluentui-system-regular'
import PropTypes from 'prop-types'
import { Nav } from './Nav'
import { ArrowLeft as ArrowLeftRegular } from '@emotion-icons/fluentui-system-regular/ArrowLeft'
import { ArrowLeft as ArrowLeftFilled } from '@emotion-icons/fluentui-system-filled/ArrowLeft'

export const Header = ({ pathName }) => {
  return (
    <SimpleGrid
      columns={pathName === 'Add' ? [3] : [1, 2]}
      gap={[4, 0]}
      p={[4, 8, 12]}
      bgColor='gray.50'
      pos='sticky'
      top={0}
      h={[136, 112, 144]}
    >
      {pathName === 'Add'
        ? (
        <Flex width={40} display={['block', 'none']}>
          <Nav initIcon={ArrowLeftRegular} finalIcon={ArrowLeftFilled} />
        </Flex>
          )
        : (
            ''
          )}

      <Flex gap={4} color='yellow.300' role='group'>
        <Icon iconStart={NoteRegular} iconEnd={NoteFilled} w={12} h={12} />

        <Heading>Catetan</Heading>
      </Flex>

      {pathName === 'Add'
        ? (
            ''
          )
        : (
        <InputGroup>
          <InputLeftElement role='group'>
            <Icon
              iconStart={SearchRegular}
              iconEnd={SearchFilled}
              w={6}
              h={6}
            />
          </InputLeftElement>

          <Input
            placeholder='Search note by title...'
            _focus={{ boxShadow: 'none', borderColor: 'yellow.300' }}
          />
        </InputGroup>
          )}
    </SimpleGrid>
  )
}

Header.propTypes = {
  pathName: PropTypes.string
}
