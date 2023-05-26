import React from 'react'
import {
  IconButton,
  Menu as MenuChakra,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import {
  Archive,
  ContentView,
  Delete,
  MoreHorizontal
} from '@emotion-icons/fluentui-system-regular'
// import { menuList } from '../utils/menuList'
import PropTypes from 'prop-types'

export const Menu = ({ data, onArchive, onDelete }) => {
  // const menus = menuList()
  // const { archiveChange } = Note()
  const menus = [
    {
      text: 'View',
      icon: <ContentView width={24} height={24} />,
      action: null,
      color: 'blue'
    },
    {
      text: data.archived ? 'Unarchived' : 'Archived',
      icon: <Archive width={24} height={24} />,
      action: onArchive,
      color: 'purple'
    },
    {
      text: 'Delete',
      icon: <Delete width={24} height={24} />,
      action: onDelete,
      color: 'red'
    }
  ]

  return (
    <MenuChakra>
      <MenuButton
        as={IconButton}
        bgColor='yellow.100'
        _hover={{
          bgColor: 'yellow.200'
        }}
        _active={{
          bgColor: 'yellow.200'
        }}
        icon={<MoreHorizontal width={16} height={16} />}
      />

      <MenuList>
        {menus.map(({ text, icon, action, color }, id) => (
          <MenuItem
            key={id}
            icon={icon}
            onClick={text === 'View' ? null : () => action(data.id)}
            color={`${color}.300`}
          >
            {text}
          </MenuItem>
        ))}
      </MenuList>
    </MenuChakra>
  )
}

Menu.propTypes = {
  data: PropTypes.object,
  onArchive: PropTypes.func,
  onDelete: PropTypes.func
}
