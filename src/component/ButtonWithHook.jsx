import React, { useEffect, useState } from 'react'

function ButtonWithHook() {
    //const [button, setKey1] = useState('This is another state')

    const [buttonText, setButtonText] = useState('Hello');
    const [buttonText1, setButtonText1] = useState(0);
    const [countries, setCountries] = useState([])

    
    
    
    useEffect(
      () => {
        
        console.log('render')
        fetch('https://restcountries.com/v3.1/all')
          .then(res => res.json())
            .then(countriesData => setCountries(countriesData))

        },
        []
      )

  return (
    <><div>
      <button onClick={() => { setButtonText("You clicked me"); } }>
        {buttonText}
      </button>
      <button onClick={() => {
        setButtonText1('Once again');
      } }>
        {buttonText1}
      </button>
    </div><div className='countries'>
        {countries.map((country, index) => <div key={index}>{country.name.common}</div>)}

      </div></>

  )
}

export default ButtonWithHook