import React, { useEffect, useState } from 'react'
import { Form, List } from 'components/Todo'
import Container from 'layouts/Container'

const HomePage = () => {
  const [items, setItems] = useState([])
  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }
  useEffect(() => {
    console.log(items)
  }, [items])

  const handleChangeItem = (id) => {
    // console.log(id)
    const nextItems = items.map((el) =>
      el.id === id ? { ...el, isChecked: !el.isChecked } : el
    )
    setItems(nextItems)
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} />
      <List items={items} onChangeItem={handleChangeItem} />
    </Container>
  )
}

export default HomePage
