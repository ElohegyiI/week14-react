import React, { useState } from 'react'

function ButtonWithHook() {
    //const [button, setKey1] = useState('This is another state')

    const [buttonText, setButtonText] = useState('Click me');
    const [buttonText1, setButtonText1] = useState(0);

  return (
    <div>
        <button type='submit' onClick={() => {setButtonText("You clicked me")}}>
        {buttonText} 
        </button> 
        <button type='submit' onClick={() => {setButtonText1('Once again')}}>
        {buttonText1}
        </button> 
    </div>
  )
}

export default ButtonWithHook