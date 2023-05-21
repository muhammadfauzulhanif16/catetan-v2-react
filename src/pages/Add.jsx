import React from 'react'
import { AddForm } from '../components/AddForm'
import { NavBar } from '../components/NavBar'

export const Add = (props) => {
  return (
    <>
      <AddForm {...props} />

      <NavBar />
    </>
  )
}
