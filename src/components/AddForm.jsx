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

export const AddForm = ({ note, titleChange, bodyChange }) => {
  return (
    <Grid h='full' templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}>
      <GridItem colSpan={[0, 2]} colStart={[0, 2]}>
        <FormControl mb={[4, 8, 12]}>
          <FormLabel>Title</FormLabel>
          <Input onChange={titleChange} />
          <FormHelperText>{`Max ${note.title.max} chars left.`}</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Content</FormLabel>
          <Textarea placeholder='Type anything' onChange={bodyChange} />
          <FormHelperText>{"Can't be empty."}</FormHelperText>
        </FormControl>
      </GridItem>
    </Grid>
  )
}

AddForm.propTypes = {
  note: PropTypes.object,
  titleChange: PropTypes.func,
  bodyChange: PropTypes.func
}
