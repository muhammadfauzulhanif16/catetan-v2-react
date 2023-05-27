import {
  Archive,
  ContentView,
  Delete
} from '@emotion-icons/fluentui-system-regular'
import React from 'react'

export const menuList = (data, navigate, onArchive, onDelete) => [
  {
    text: 'View',
    icon: <ContentView width={24} height={24} />,
    action: navigate,
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
