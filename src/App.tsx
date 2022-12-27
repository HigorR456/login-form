import { useState } from 'react'
import './App.css'

function App() {



  return (
    <div className='wrapper'>
      <div className='loginForm'>

        <h1>Login Form</h1>

        {/* Show div below only if there is error message */}
        <div className='errorMessage'></div>

        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' />
        </div>

        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} />
        </div>

        <div className='button'>
          <button>Login</button>
        </div>

      </div>
    </div>
  )
}

export default App
