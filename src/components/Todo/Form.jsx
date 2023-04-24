import React from 'react'
import { v4 as fakeId } from 'uuid'
import { useState } from 'react'
import { Tags } from '.'

const Form = ({ onSubmit }) => {
  const tagsList = [
    {
      title: 'vue',
      alias: 'vue',
      selected: false,
    },
    {
      title: 'react',
      alias: 'react',
      selected: false,
    },
    {
      title: 'angular',
      alias: 'angular',
      selected: false,
    },
  ]
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState([...tagsList])

  const handleItemsClick = (index) => {
    const list = [...tags]
    list[index].selected = !list[index].selected
    setTags([...tags])
    // console.log(tags)

    return
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const item = {
      id: fakeId(),
      title: title,
      isChecked: false,
      tags: [...tags.filter((tag) => tag.selected)],
    }
    onSubmit(item)
    //reset
    setTitle('')
  }
  return (
    <div className='flex flex-col'>
      <form className='view-sm flex items-end mb-4' onSubmit={handleSubmit}>
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
        <button className='ui-button isPrimary' type='submit'>
          submit
        </button>
      </form>
      <Tags onItemsClick={handleItemsClick} tags={tags} />
    </div>
  )
}

export default Form
