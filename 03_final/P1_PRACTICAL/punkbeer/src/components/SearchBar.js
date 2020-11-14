import React from 'react'

import { Form, FormControl, Button } from 'react-bootstrap'

function SearchBar() {
  return (
    <Form className='col-lg-6 offset-lg-3 mt-3'>
      <FormControl type='text' placeholder='Search' />
      <Button variant='outline-primary'>Search</Button>
    </Form>
  )
}

export default SearchBar
