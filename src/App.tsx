import { useState } from 'react'
import './App.css'

function App() {

  const Error = () => {
    setInvalidEmail()
  }


  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [invalidEmail, setInvalidEmail] = useState([])
  const [login, setLogin] = useState(true)

  const handleChange = (event) => {
    const value = event.target.value;
    console.log(value);
    setEmail(value);
  }

  const handlePassword = (event) => {
    const value = event.target.value;
    console.log(value);
    setPassword(value);
  }

  const submitBtn = () => {
    let emailText = document.querySelector('#email').value;
    console.log(emailText);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailText)) { 
      alert('Login Sucessful')
      setInvalidEmail(() => {return (
        <div className='errorMessage'></div>
      )})
      //setInvalidEmail(() => console.log('hey'))
      return (true)
    } alert("You have entered an invalid email address!")
      setEmail('Invalid email')
      return (false)
  }

  


  return (
    <div className='wrapper'>
      <div className='loginForm'>

        <h1>Login Form</h1>

        {/* Show div below only if there is error message */}
        

        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={handleChange} />
        </div>

        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={handlePassword} />
        </div>

        <div className='button'>
          <button disabled={email === '' || password.length < 6} onClick={submitBtn}>Login</button>
        </div>

      </div>
    </div>
  )
}

export default App
