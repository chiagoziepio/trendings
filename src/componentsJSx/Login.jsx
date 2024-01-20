import '../componentsCss/Form.css'
import { Link } from 'react-router-dom'

const Login = ({userName,password,setUserName,setPassword}) => {
  return (
    <form className='loginForm'>
      
      <div className="inputContainerBx">
      <h2 className="pageTitle">Login</h2>
          <div className="inputContainer">
            
            <input 
              type="text"
              placeholder='Username'
              value={userName}
              onChange={(e)=> setUserName(e.target.value)}
              className='inputBx'
              required
          />
          </div>
          <div className="inputContainer">
            
            <input 
              type="password"
              placeholder='password'
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              className='inputBx'
              required
          />
          </div>
          <div>
            <p>No account yet? <Link to= '/register'>Register</Link></p>
            <button className="btn" type='submit'>Sign In</button>
        </div>
      </div>
      
      

    </form>
  )
}

export default Login