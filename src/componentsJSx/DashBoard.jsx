import React from 'react'
import { FaUser } from "react-icons/fa";
import '../componentsCss/DashBoard.css'
import { Link } from 'react-router-dom';

const UserProfile = ({HandleAvatarChange,avatar,user,name,email,password}) => {
  return (
    <div className='dashboard'>
        <h1 className="pageTitle">{user? user: "Profile"}</h1>
        <label htmlFor="image-upload">
          <div className="userImgBx">
            {avatar &&
             <img src={URL.createObjectURL(avatar)} alt="" className='userAva' />  
            }
            {!avatar &&
              <FaUser size={310} className='userAva'/>
            }
          
        </div>
        </label>
        
        <input 
          type="file" 
          name="" 
          id="image-upload" 
          accept='imgage/jpeg, image/png, image/jpg' 
          onChange={HandleAvatarChange}
          style={{display:"none"}}
        />
        <div className="userDetails">
          {!user &&
           <div className='signsLink'>
            <Link to = '/login' className='signLink '><button>Sign-In</button></Link>
            <p>OR</p>
            <Link to = '/register' className='signLink'><button>Sign-Up</button></Link>
           </div>
          }
          {user &&
          <div className="detailsBx">
            <div className="details">
            <span>Name</span>
              <input 
              type="text"
              readOnly 
              className='userinfo'
              value={name}
              />
            </div>
            <div className="details">
              <span>Email</span>
              <input 
              type="text"
              readOnly 
              value={email}
              className='userinfo'
              />
            </div>
            <div className="details">
              <span>Password</span>
              <input 
              type="password"
              readOnly 
              value={password}
              className='userinfo'
              />
            </div>
            
          </div>
          }
        </div>
    </div>
  )
}

export default UserProfile