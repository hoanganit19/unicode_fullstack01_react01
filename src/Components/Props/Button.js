import React from 'react'

export default function Button({onReceiveData}) {

  const data = 'Unicode Academy';  

  //event handler
  const handleClickBtn = () => {
    onReceiveData(data);
  }

  return (
    <div>
        <button type='button' onClick={handleClickBtn}>
            Click me
        </button>
    </div>
  )
}
