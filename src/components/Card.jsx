import React from 'react'

function Card({name, icon, number}) {
  return (
    <div>
            <div className='card'>
            <div className='card-inner'>
                <h3>{name}</h3>
                <span className='card-icon'>{icon}</span>
            </div>
            <h1>{number}</h1>
            </div>
    </div>
  )
}

export default Card
