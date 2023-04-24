import React from 'react'


const List = ({ items, onChangeItem, onRemoveItem }) => {
  return (
    <div className='view-sm flex-col item-center' style={{ width: '100%' }}>
      {items && items.length > 0
        ? items.map((item) => (
            <div
              key={item.id}
              className='flex justify-between items-center mb-2'
            >
              <div className='ui-checkbox'>
                <input
                  id={item.id}
                  type='checkbox'
                  checked={item.isChecked}
                  onChange={() => onChangeItem(item.id)}
                />
                <label className='mr-auto' htmlFor={item.id}>{item.title}</label>
                <span>{item.tags?.map((tag)=><span className='ml-4 ui-tag' key={tag.alias}>{tag.title}</span>)}</span>
              </div>
              <span
                className='ui-link text-sm pl-2'
                onClick={() => onRemoveItem(item.id)}
              >
                Remove
              </span>
            </div>
          ))
        : 'item not found'}
    </div>
  )
}

export default List
