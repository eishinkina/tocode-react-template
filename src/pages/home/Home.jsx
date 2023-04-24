import React, { useEffect, useState } from 'react'
import { Form, List } from 'components/Todo'
import Container from 'layouts/Container'
import todos from 'seeders/todos.json'

const HomePage = () => {
  //localstorage
  const localItems = JSON.parse(localStorage.getItem('items')) || null
  //final output
  const items_ = localItems && localItems.length > 0 ? localItems : todos
  //state
  const [items, setItems] = useState(items_ || [])
  //store
  const handleSubmit = (item) => {
    const nextItems = [...items, item]
    setItems(nextItems)
  }
  useEffect(() => {
    // console.log(items)
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])

  //destroy
  const handleRemoveItem = (id) => {
    // console.log(id)
    const nextItems = [...items]
    const indexForRemove = nextItems.findIndex((el) => el.id === id)
    nextItems.splice(indexForRemove, 1)
    setItems(nextItems)
  }
  //update
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
      <List
        items={items}
        onChangeItem={handleChangeItem}
        onRemoveItem={handleRemoveItem}
      />
    </Container>
  )
}

export default HomePage
