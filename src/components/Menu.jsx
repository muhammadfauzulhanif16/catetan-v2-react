import React from 'react'
import {
  Button,
  Menu as MenuChakra,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { Nav } from './Nav'
import { MoreHorizontal as MoreHorizontalFilled } from '@emotion-icons/fluentui-system-filled'
import { MoreHorizontal as MoreHorizontalRegular } from '@emotion-icons/fluentui-system-regular'
// import { menuList } from '../utils/menuList'
import PropTypes from 'prop-types'
import { archiveChange } from '../utils/note'

export const Menu = ({ data, notes, setNotes }) => {
  // const menus = menuList()

  return (
    <MenuChakra>
      <MenuButton
        as={Button}
        p={0}
        variant='ghost'
        _hover={{
          bgColor: 'yellow.200'
        }}
        _active={{
          bgColor: 'yellow.200'
        }}
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
      </MenuButton>

      <MenuList>
        <MenuItem onClick={() => archiveChange(data.id, notes, setNotes)}>
          {data.archived ? 'Unarchive' : 'Archive'}
        </MenuItem>
      </MenuList>
    </MenuChakra>
  )
}

Menu.propTypes = {
  data: PropTypes.object,
  notes: PropTypes.arrayOf(PropTypes.object),
  setNotes: PropTypes.func
}
