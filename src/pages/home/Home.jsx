import React, { useEffect, useState } from 'react'
import  {Form}  from 'components/Todo'
import Container from 'layouts/Container'

const List = ({ items }) => {
  return (
    <>
      {items && items.length > 0
        ? items.map((item) => <p key={item.id}>{item.title}</p>)
        : 'item not found'}
    </>
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
      <List items={items} />
    </Container>
  )
}

export default HomePage
