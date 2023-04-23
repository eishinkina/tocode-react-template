import React, { useState } from 'react'

import Container from 'layouts/Container'

const Form = () => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!title && title.length === 0) {
      return
    }
    console.log('submitted ' + title)
    //reset
    setTitle('')
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <button type='submit'>submit</button>
    </form>
  )
}

const HomePage = () => {
  return (
    <Container>
      <Form />
    </Container>
  )
}

export default HomePage
