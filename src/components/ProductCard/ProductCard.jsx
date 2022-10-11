import React from 'react'

export const ProductCard = (props) => {
  return (
    <div className={'ProductCard'}>
        <img src={props.img} alt=""></h1>
        <h1>{props.name}</h1>
        <p>{props.description}</p>
    </div>
  )
}
