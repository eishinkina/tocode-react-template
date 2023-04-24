import React from 'react'

const Tags = ({ onItemsClick, tags }) => {
  return (
    <>
      <div className='ui-button-group mb-5'>
        {tags.map((tag, index) => {
          return (
            <span
              className='ui-tag'
              key={tag.alias}
              onClick={() => onItemsClick(index)}
              style={{ color: tag.selected ? 'red' : '' }}
            >
              {tag.title}
            </span>
          )
        })}
      </div>
    </>
  )
}

export default Tags
