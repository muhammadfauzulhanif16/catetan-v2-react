import React from 'react'
import {
  IconButton,
  Menu as MenuChakra,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react'
import { MoreHorizontal } from '@emotion-icons/fluentui-system-regular'
// import { menuList } from '../utils/menuList'
import PropTypes from 'prop-types'
import { menuList } from '../utils/menuList'
import { useNavigate } from 'react-router-dom'

export const Menu = ({ data, onArchive, onDelete }) => {
  const navigate = useNavigate()
  const menus = menuList(data, navigate, onArchive, onDelete)
  // const menus = menuList()
  // const { archiveChange } = Note()

  // const menus = [
  //   {
  //     text: 'View',
  //     icon: <ContentView width={24} height={24} />,
  //     action: navigate,
  //     color: 'blue'
  //   },
  //   {
  //     text: data.archived ? 'Unarchived' : 'Archived',
  //     icon: <Archive width={24} height={24} />,
  //     action: onArchive,
  //     color: 'purple'
  //   },
  //   {
  //     text: 'Delete',
  //     icon: <Delete width={24} height={24} />,
  //     action: onDelete,
  //     color: 'red'
  //   }
  // ]

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
            onClick={() => action(`${text === 'View' ? '/' : ''}${data.id}`)}
            color={`${color}.300`}
          >
            {`${text} note`}
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
