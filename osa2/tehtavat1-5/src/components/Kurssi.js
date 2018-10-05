import React from 'react'

const Kurssi = ({kurssi}) => {
  
  const Otsikko = (props) => {
    return (
      <h2>{props.kurssi}</h2>
    )
  }
  const Sisalto = ({osat}) => {
    return (
      <div>
        <ul>
          {osat.map(osa=> <Osa key={osa.id} osa={osa} />)}
        </ul>
      </div> 
    )
  }

  const Yhteensa = ({osat}) => {
    const maarat = osat.map( osa => osa.tehtavia) 
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (
      <p>yhteensä {maarat.reduce(reducer)} tehtävää</p>
    )
  }

  const Osa = (props) => {
    console.log(props)
    return (
      <li>{props.osa.nimi} {props.osa.tehtavia}</li>
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


export default Kurssi