import React from 'react'

function Card({ title, data }) {
  return (
    <div className='card'>
      <h2 className='card-title'>{title}</h2>
      <div className="item">
        {data.map((item, index) => (
          <div className="item-card" key={index}>
            
            <p className='item-description'>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Card
