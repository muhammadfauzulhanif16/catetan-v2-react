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

export const AddForm = () => {
  return (
    <Grid h='full' templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}>
      <GridItem colSpan={[0, 2]} colStart={[0, 2]}>
        <FormControl mb={[4, 8, 12]}>
          <FormLabel>Title</FormLabel>
          <Input />
          <FormHelperText>Max 50 chars left.</FormHelperText>
        </FormControl>

        <FormControl>
          <FormLabel>Content</FormLabel>
          <Textarea placeholder='Type anything' />
          <FormHelperText>{"Can't be empty."}</FormHelperText>
        </FormControl>
      </GridItem>
    </Grid>
  )
}
