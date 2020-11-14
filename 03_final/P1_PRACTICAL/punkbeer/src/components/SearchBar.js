import React from 'react'

import { Form, FormControl, Button } from 'react-bootstrap'

function SearchBar(props) {
  return (
    <Form onSubmit={props.handleSubmit} className='col-lg-6 offset-lg-3 mt-3'>
      <FormControl
        type='text'
        placeholder='Search'
        autoComplete='off'
        name='search'
        onChange={props.handleChange}
        value={props.search}
      />
      <Button type='submit' variant='outline-primary'>
        Search
      </Button>
    </Form>
  )
}

export default SearchBar
