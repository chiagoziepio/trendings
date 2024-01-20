import React from 'react'
import { FaUser } from "react-icons/fa";
import '../componentsCss/DashBoard.css'

const UserProfile = ({HandleAvatarChange,avatar}) => {
  return (
    <div className='dashboard'>
        <h1 className="pageTitle">Profile</h1>
        <label htmlFor="image-upload">
          <div className="userImgBx">
            {avatar &&
             <img src={URL.createObjectURL(avatar)} alt="" className='userAva' />  
            }
            {!avatar &&
              <FaUser size={300} className='userAva'/>
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
    </div>
  )
}

export default UserProfile