import React from 'react'
import Item from './Item'

const ItemList = ({animatedGif, showModal}) => {
  const animatedGifList = animatedGif.map((gifImg, i) =>
        <Item animatedGif={gifImg} key={gifImg.id} onShowModal={showModal}/>
  )

  return (
    <div className="items">
      {animatedGifList}
    </div>
  )
}

export default ItemList
