import React from 'react'
import Image from 'next/image'

function Card({ heading, src}) {
  return (
    <div className='flex flex-col'>
        <img src={src} alt="" />        
        <p className=''>{heading}</p>
    </div>
  )
}

export default Card