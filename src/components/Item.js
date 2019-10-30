import React from 'react'

const Item = ({animatedGif, onShowModal}) => {
  const animatedGifInfo = animatedGif.images.fixed_height_small
  return (
    <div className="item">
      <img data-animatesrc={animatedGifInfo.url} src={animatedGif.images.fixed_width_still.url} alt={animatedGifInfo.slug} height={animatedGifInfo.height}  onClick={onShowModal}></img>
    </div>
  )
}

export default Item
