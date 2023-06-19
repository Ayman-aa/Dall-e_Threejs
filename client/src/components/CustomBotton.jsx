import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'
import { getContrastingColor } from '../config/helpers'


const CustomBotton = ({ type, title, customStyles, handleClick }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if(type === 'filled') {
      return {
        backgroundColor: snap.color,
        color:getContrastingColor(snap.color),
      }
    } else if(type === 'outline') {
      return {
              borderColor: snap.color,
              borderWidth:'1px',
              color:snap.color
            }
          } else {
   }   
  }
  return (
    <button className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
    style={generateStyle(type)} onClick={handleClick}>
      {title}
    </button>
  )
}

export default CustomBotton