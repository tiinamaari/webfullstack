import React from 'react'

const Filter = (props) => {
  return (
    <div>
      Rajaa hakua: 
        <input 
          value = {props.value}
          onChange = {props.onChange} />      
    </div>
  )
}

export default Filter




