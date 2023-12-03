import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

const Login = props => {
  const {history} = props
  const onLogin = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      Cookies.set('jwt_token', data.jwt_token, {expires: 30})
      history.replace('/')
    }
  }

  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken !== undefined) {
    return <Redirect to="/" />
  }
  return (
    <div>
      <h1>Please Login</h1>
      <button type="button" onClick={onLogin}>
        Login with Sample Creds
      </button>
    </div>
  )
}

export default Login
