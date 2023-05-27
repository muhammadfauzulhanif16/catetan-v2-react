import React from 'react'
import {
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  Input,
  Textarea
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

export const AddForm = ({ note, onTitleChange, onBodyChange }) => {
  return (
    <Grid h='full' templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}>
      <GridItem colSpan={[0, 2]} colStart={[0, 2]}>
        <FormControl mb={[4, 8, 12]}>
          <FormLabel>Title</FormLabel>
          <Input
            value={note.title.content}
            onChange={onTitleChange}
            placeholder='Enter a title'
            _focus={{ boxShadow: 'none', borderColor: 'yellow.300' }}
          />
          <FormHelperText>{`Max ${note.title.max} chars left.`}</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Content</FormLabel>
          <Textarea
            placeholder='Type anything'
            onChange={onBodyChange}
            _focus={{ boxShadow: 'none', borderColor: 'yellow.300' }}
            resize='none'
          />
          <FormHelperText>{"Can't be empty."}</FormHelperText>
        </FormControl>
      </GridItem>
    </Grid>
  )
}

AddForm.propTypes = {
  note: PropTypes.object,
  onTitleChange: PropTypes.func,
  onBodyChange: PropTypes.func
}
