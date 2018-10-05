import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      hyva: 0,
      neutraali: 0,
      huono: 0, 
      maara: 0
    }
  }

  addHyva = () => {
    this.setState({
      hyva: this.state.hyva + 1,
      maara: this.state.maara + 1
    })
  }
  addNeutraali = () => {
    this.setState({
      neutraali: this.state.neutraali + 1,
      maara: this.state.maara + 1
    })
  }
  addHuono= () => {
    this.setState({
      huono: this.state.huono + 1,
      maara: this.state.maara + 1
    })
  }

  countAverage() {
    let ka = (this.state.hyva - this.state.huono) / this.state.maara
    if (!isNaN(ka))
      return ka
    else return "" 
  }
  countPositives() {
    let positive = (this.state.hyva) / this.state.maara * 100 
    if (!isNaN(positive))
      return positive  + "%"
    else return ""
  }
  
  render () {
    return (
      <div>
        <h1>UniCafe</h1>
        <h2>Anna palautetta</h2>
        <Button name="hyvä" klik={this.addHyva}/>
        <Button name="neutraali" klik={this.addNeutraali}/>
        <Button name="huono" klik={this.addHuono}/>
        <h2>Statistiikka</h2>
        <Statistics amounts={this}/>
      </div>
    )
  }
}

const Button = (props) => {
  return (
    <button onClick={props.klik}>{props.name}</button>
  )
}

const Statistics = (props) => {
  if (props.amounts.state.maara === 0) {
    return <p>Ei näytettävää statistiikkaa</p>
  }

  else {
    return (
      <div>
        <table>
          <Statistic name="hyvä" amount={props.amounts.state.hyva} />
          <Statistic name="neutraali" amount={props.amounts.state.neutraali}/>
          <Statistic name="huono"amount={props.amounts.state.huono}/>
          <Statistic name="keskiarvo" amount={props.amounts.countAverage()}/>
          <Statistic name="positiivisia" amount={props.amounts.countPositives()}/>
        </table>
      </div>
    )
   }  
}

const Statistic  = (props) => { 
  return (
    <tr>
    <td>{props.name}</td><td>{props.amount}</td>
    </tr>
  )
}

ReactDOM.render( <App />, document.getElementById('root'))
