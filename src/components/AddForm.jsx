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
import { bodyChange, titleChange } from '../utils/note'

export const AddForm = ({ note, setNote }) => {
  return (
    <Grid h='full' templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}>
      <GridItem colSpan={[0, 2]} colStart={[0, 2]}>
        <FormControl mb={[4, 8, 12]}>
          <FormLabel>Title</FormLabel>
          <Input
            value={note.title.content}
            onChange={(e) => titleChange(e, note, setNote)}
            placeholder='Enter a title'
          />
          <FormHelperText>{`Max ${note.title.max} chars left.`}</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Content</FormLabel>
          <Textarea
            value={note.body.content}
            placeholder='Type anything'
            onChange={(e) => bodyChange(e, note, setNote)}
          />
          <FormHelperText>{"Can't be empty."}</FormHelperText>
        </FormControl>
      </GridItem>
    </Grid>
  )
}

AddForm.propTypes = {
  note: PropTypes.object,
  setNote: PropTypes.func,
  titleChange: PropTypes.func,
  bodyChange: PropTypes.func
}
