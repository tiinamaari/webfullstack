import React from 'react'
import Filter from './components/Filter'
import AddPersonForm from './components/AddPersonForm'
import personService from './services/persons'
import Notification from './components/Notification'


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      persons: [],
      newName: '',
      newNumber: '',
      filter: '',
      notification: null
    }
  }
  componentDidMount() {
    console.log('did mount')
    personService
      .getAll()
      .then(response => {
        this.setState({persons: response})
      })
  }

  handleNameChange = (event) => {
    this.setState({ newName: event.target.value })
  }
  handleNumberChange = (event) => {
    this.setState({ newNumber: event.target.value })
  }
  handleFilter = (event) => {
    this.setState({ filter: event.target.value })
  }

  addPerson = (event) => {
    event.preventDefault()
    const newPerson = {
      name: this.state.newName,
      number: this.state.newNumber
    }

    const personNames =  this.state.persons.map(person => person.name)

    if(!personNames.includes(newPerson.name)){
      personService
        .create(newPerson)
        .then(newPerson => {
      
        const persons = this.state.persons.concat(newPerson)
        this.setState({
          persons: persons,
          newName: '',
          newNumber: '',
          notification: `${newPerson.name} lisättiin onnistuneesti!`
        })
        this.notificationTimeOut()
      })
    }
    else {
      const thisPerson = this.state.persons.find(n => n.name === newPerson.name)
      const personWithNewNumber = {... thisPerson, number: newPerson.number}
      console.log(personWithNewNumber)
      if (window.confirm(`${thisPerson.name} on jo luettelossa, korvataanko vanha numero uudella?`)) { 
        console.log("korvataan")
        personService
          .update(personWithNewNumber.id, personWithNewNumber)
          .then(personWithNewNumber => {
            const persons = this.state.persons.filter(n => n.id !== personWithNewNumber.id)
            this.setState({
              persons: persons.concat(personWithNewNumber),
              newName: '',
              newNumber: '',
              notification: `Henkilön ${personWithNewNumber.name} puhelinnumero päivitettiin onnistuneesti!`
            })
            this.notificationTimeOut()
        })
      }
    } 
  }

  removePerson = (personToRemove) => {
    return () => {
      if (window.confirm(`Poistetaanko ${personToRemove.name}?`)) { 
        console.log("poistetaan", personToRemove.id )
        personService
          .remove(personToRemove.id, personToRemove)
          .then(response => {
            const personsAfterRemove = this.state.persons.filter(n => n !== personToRemove)
            this.setState({
              persons : personsAfterRemove,
              notification: `${personToRemove.name} on poistettu!`
            })
            this.notificationTimeOut()
          })
      }
    }  
  }

  notificationTimeOut = () => {
    setTimeout(() => {
      this.setState({notification: null})
    }, 3000)
  }

  render() {
    console.log("render")
    const personsToShow =
      this.state.filter === '' ?
        this.state.persons :
        this.state.persons.filter(person => (person.name.indexOf(this.state.filter) > -1))
    return (
      <div>
        <h2>Puhelinluettelo</h2>
        <AddPersonForm param={this} />
        <Notification message={this.state.notification}/>
        <h2>Numerot</h2>
        <Filter value={this.state.filter} onChange={this.handleFilter} />    
        <table>
          {personsToShow.map(person => 
            <tr>
              <td>{person.name}</td>
              <td>{person.number}</td>
              <td><button onClick={this.removePerson(person)}>Poista</button></td>
            </tr>
          )}
        </table>
      </div>
    )
  }
}

export default App