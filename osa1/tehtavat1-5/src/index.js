import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {

  const kurssi = {
    nimi: 'Half Stack -sovelluskehitys',
    osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },
      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 7
      },
      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }

  const Otsikko = (props) => {
    return (
      <h1>{props.kurssi}</h1>
    )
  }
  const Sisalto = (props) => {
    console.log(props.osat[1]);
    return (
      <div>
        <Osa osa= {props.osat[0]}/>
        <Osa osa= {props.osat[1]}/>
        <Osa osa= {props.osat[2]}/>
      </div> 
    )
  }
  const Yhteensa = (props) => {
    return (
      <p>yhteensä {props.osat[0].tehtavia + props.osat[1].tehtavia + props.osat[2].tehtavia} tehtävää</p>
    )
  }
  const Osa = (props) => {
    console.log(props)
    return (
      <p>{props.osa.nimi} {props.osa.tehtavia}</p>
    )

  }
   
  return (
    <div>
      <Otsikko kurssi={kurssi.nimi} />
      <Sisalto osat={kurssi.osat} />
      <Yhteensa osat={kurssi.osat} />
  </div>
  )
}

ReactDOM.render( <App />, document.getElementById('root'))