import React from 'react'

export default function Avatar({url, width, height, alt, isChecked}) {
  
  const checkedObj = {
    defaultChecked: isChecked,
    id: 'abc'
  }

  return (
    <div className='avatar'>
        <img src={url} width={width} height={height} alt={alt}/>
        <input type="checkbox" {...checkedObj}/> Chọn
    </div>
  )
}
