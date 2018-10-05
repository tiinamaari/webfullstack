import React from 'react'
import ReactDOM from 'react-dom'
import Kurssi from './components/Kurssi'

const App = () => {
  const kurssit = [
    
    {
      nimi: 'Half Stack -sovelluskehitys',
      osat: [
        {
          nimi: 'Reactin perusteet',
          tehtavia: 10,
          id: 1
        },
        {
          nimi: 'Tiedonvälitys propseilla',
          tehtavia: 7,
          id: 2
        },
        {
          nimi: 'Komponenttien tila',
          tehtavia: 14,
          id: 3
        },
        {
          nimi: 'Turhanpäiväinen ihmettelyharjoitus',
          tehtavia: 12,
          id: 4
        }
      ]
    },
    {
      nimi: 'Node.js',
      id: 2,
      osat: [
        {
          nimi: 'Routing',
          tehtavia: 3,
          id: 1
        },
        {
          nimi: 'Middlewaret',
          tehtavia: 7,
          id: 2
        }
      ]
    },
    {
      nimi: 'Näin teet et mitään töissä kokopäivän',
      id: 3,
      osat: [
        {
          nimi: 'Kahvinkeittimen välttämätön puhdistaminen',
          tehtavia: 5,
          id: 1
        },
        {
          nimi: 'Koodaa kouluhommia',
          tehtavia: 10000,
          id: 2
        }
      ]
    }    
  ]
  return (
    <div>
      <h1>OPETUSOHJELMA</h1>
      {kurssit.map(kurssi=> <Kurssi kurssi={kurssi} />)}
    </div>
  )
}

ReactDOM.render( <App />, document.getElementById('root'))