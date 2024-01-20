import '../componentsCss/Form.css'
import { Link } from 'react-router-dom'

const Register = ({userName,password,setUserName,setPassword,name,setName,email,setEmail}) => {
  return (
    <form className='registerForm'>
      
      <div className="inputContainerBx">
      <h2 className="pageTitle">Register</h2>
          <div className="inputContainer">
            
            <input 
              type="text"
              placeholder='Fullname'
              value={name}
              onChange={(e)=> setName(e.target.value)}
              className='inputBx'
              required
          />
          </div>
          <div className="inputContainer">
            
            <input 
              type="email"
              placeholder='Email'
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className='inputBx'
              required
          />
          </div>
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
            <p>Has an account? <Link to= '/login'>Sign In</Link></p>
            <button className="btn" type='submit'>Sign Up</button>
        </div>
      </div>
      
      

    </form>
  )
}

export default Register