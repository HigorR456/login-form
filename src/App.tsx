import { useState } from 'react'
import { login } from './login'
import './App.css'

// Instructions:
// * You have an INCOMPLETE login form
// * Adding new HTML elements is not allowed
// * It is not allowed to use refs
//
// Tasks:
// to do - The login button must trigger the login() function, imported at the top of this file, and pass the necessary data.
// to do - Disable the Login button if the email is blank OR the password is less than 6 digits.
// to do - Disable the Login button while you are performing login.
// to do - Display a login() error message if Login fails. The message must be cleared at each new Login attempt.
// to do - Show an alert if login is successful (javascript alert). Investigate the login() function to understand how to succeed the request.

function App() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [isRequesting, setIsRequesting] = useState(false)

  const handleChange = (event: any) => {
    const value = event.target.value;
    console.log(value);
    setEmail(value);
  }

  const handlePassword = (event: any) => {
    const value = event.target.value;
    console.log(value);
    setPassword(value);
  }

  const submitBtn = () => {
    console.log('submitted');

    setError(null);
    setIsRequesting(true);

    let values = {email: email, password: password};
    login(values)
      .then(() => alert('Login Sucessful'))
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => setIsRequesting(false));
  }

  return (
    <div className='wrapper'>
      <div className='loginForm'>

        <h1>Login Form</h1>

        {/* Show div below only if there is error message */}
        {error && <div className='errorMessage'>{error.message}</div>}

        <div className='row'>
          <label htmlFor={'email'}>Email</label>
          <input id={'email'} type={'email'} autoComplete='off' value={email} onChange={handleChange} />
        </div>

        <div className='row'>
          <label htmlFor={'password'}>Password</label>
          <input id={'password'} type={'password'} value={password} onChange={handlePassword} />
        </div>

        <div className='button'>
          <button 
            disabled={email === '' || password.length < 6 || isRequesting} 
            onClick={submitBtn}>Login</button>
        </div>

      </div>
    </div>
  )
}

export default App
