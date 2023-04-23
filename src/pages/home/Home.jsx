import React, { useEffect, useState } from 'react'
import { v4 as fakeId } from 'uuid'
import Container from 'layouts/Container'

const Form = ({ onSubmit }) => {
  const [title, setTitle] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const item = {
      id: fakeId(),
      title: title,
    }
    onSubmit(item)
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
  const [items, setItems] = useState([])
  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }
  useEffect(() => {
    console.log(items)
  }, [items])

  return (
    <Container>
      <Form onSubmit={handleSubmit} />
    </Container>
  )
}

export default HomePage
