import React from 'react'

const AddPersonForm = (props) => {
  return (
    <form>
      <div>
        Nimi: 
        <input 
          value={props.param.state.newName} 
          onChange={props.param.handleNameChange}
        />
      </div>
      <div>
        Numero: 
        <input 
          value={props.param.state.newNumber} 
          onChange={props.param.handleNumberChange}
        />
      </div>
      <div>
        <button type="submit" onClick={props.param.addPerson}>Lisää</button>
      </div>
    </form>
  )
}

export default AddPersonForm




