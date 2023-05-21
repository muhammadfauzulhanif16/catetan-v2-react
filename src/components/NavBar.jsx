import React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import { Nav } from './Nav'
import { navList } from '../utils/navList'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import { addNote } from '../utils/note'

export const NavBar = ({
  pathName,
  setPathName,
  note,
  notes,
  setNote,
  setNotes
}) => {
  const navs = navList(pathName)
  const navigate = useNavigate()

  return (
    <SimpleGrid
      boxShadow='xs'
      columns={3}
      m={[4, 8, 12]}
      bgColor='gray.100'
      p={2}
      gap={2}
      borderRadius={8}
      pos='fixed'
      bottom={0}
      right={0}
      left={0}
    >
      {navs.map(({ initIcon, finalIcon, text }, id) => (
        <Nav
          key={id}
          initIcon={initIcon}
          finalIcon={finalIcon}
          text={text}
          buttonProps={{
            w: 'full',
            bgColor:
              text === 'Add' || text === 'Submit' ? 'yellow.200' : 'gray.100',
            _hover: {
              bgColor:
                text === 'Add' || text === 'Submit' ? 'yellow.300' : 'gray.200'
            },
            isDisabled:
              text === 'Submit' && (!note.title.content || !note.body.content),
            gap: [2, 4],
            alignItems: 'center',
            role: 'group',
            onClick:
              text === 'Submit'
                ? () => {
                    addNote(note, notes, setNote, setNotes)
                    setPathName('All')
                    navigate('/')
                  }
                : () => {
                    setPathName(text)
                    navigate(`/${text === 'All' ? '' : text.toLowerCase()}`)
                  }
          }}
          textProps={{
            fontSize: 'sm'
          }}
          iconProps={{
            w: 6,
            h: 6
          }}
        />
      ))}
    </SimpleGrid>
  )
}

NavBar.propTypes = {
  pathName: PropTypes.string,
  setPathName: PropTypes.func,
  note: PropTypes.object,
  notes: PropTypes.arrayOf(PropTypes.object),
  setNote: PropTypes.func,
  setNotes: PropTypes.func
}
