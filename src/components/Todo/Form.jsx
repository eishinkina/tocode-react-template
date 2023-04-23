import React from 'react'
import { v4 as fakeId } from 'uuid'
import { useState } from 'react'

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
    <form className='view-sm flex items-end' onSubmit={handleSubmit}>
      <div className='ui-input' style={{ width: '100%' }}>
        <label htmlFor='input-DqS1'>Enter Todo</label>
        <input
          id='input-DqS1'
          type='text'
          value={title}
          placeholder='Enter todo here'
          onChange={(e) => setTitle(e.target.value)}
          required

        />
      </div>
      <button className='ui-button isPrimary' type='submit'>submit</button>
    </form>
  )
}

export default Form
