import React from 'react'
import { Link, SimpleGrid } from '@chakra-ui/react'
import { Nav } from './Nav'
import { navList } from '../utils/navList'
import { Link as RRLink, redirect } from 'react-router-dom'
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
        <Link
          as={RRLink}
          key={id}
          to={`/${
            text === 'All' ? '' : text === 'Submit' ? 'add' : text.toLowerCase()
          }`}
        >
          <Nav
            isDisabled={
              (text === 'Submit' && !note.title.content) ||
              (text === 'Submit' && !note.body.content)
            }
            onClick={
              text === 'Submit'
                ? () => {
                    addNote(note, notes, setNote, setNotes)
                    redirect('/')
                  }
                : () => setPathName(text)
            }
            setPathName={setPathName}
            initIcon={initIcon}
            finalIcon={finalIcon}
            text={text}
            initBgColor={
              text === 'Add' || text === 'Submit' ? 'yellow.200' : 'gray.100'
            }
            finalBgColor={
              text === 'Add' || text === 'Submit' ? 'yellow.300' : 'gray.200'
            }
            width='full'
          />
        </Link>
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
