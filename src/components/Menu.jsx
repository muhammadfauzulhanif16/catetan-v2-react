import React from 'react'
import {
  Menu as MenuChakra,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { Nav } from './Nav'
import { MoreHorizontal as MoreHorizontalFilled } from '@emotion-icons/fluentui-system-filled'
import {
  Archive,
  MoreHorizontal as MoreHorizontalRegular
} from '@emotion-icons/fluentui-system-regular'
// import { menuList } from '../utils/menuList'
import PropTypes from 'prop-types'

export const Menu = ({ data, archiveChange }) => {
  // const menus = menuList()
  // const { archiveChange } = Note()

  return (
    <MenuChakra>
      <MenuButton>
        <Nav
          initIcon={MoreHorizontalRegular}
          finalIcon={MoreHorizontalFilled}
          buttonProps={{
            variant: 'ghost',
            bgColor: 'yellow.100',
            _hover: {
              bgColor: 'yellow.200'
            }
          }}
        />
      </MenuButton>

      <MenuList>
        <MenuItem
          icon={<Archive width={24} height={24} />}
          onClick={() => archiveChange(data.id)}
        >
          {data.archived ? 'Unarchived' : 'Archived'}
        </MenuItem>
      </MenuList>
    </MenuChakra>
  )
}

Menu.propTypes = {
  data: PropTypes.object,
  archiveChange: PropTypes.func
}
