import React from 'react'
import './Sidebar.css'
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux'
import { selectUser } from './features/userSlice'
const Sidebar = () => {
    const user = useSelector(selectUser);
    const recentItems = (topic)=>(
        <div className="sidebar_recentItem">
            <span className='sidebar_hash'>#</span>
            <p>{topic}</p>
        </div>
    )

  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhifbBGk1ixSJGnIGeFL7kDZYzAw4zkilM0g&usqp=CAU"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar_avatar" >
            {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>

      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who Viewed You</p>
          <p className="sidebar_statNumber">6900</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on Post</p>
          <p className="sidebar_statNumber">9800</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItems("Google")}
        {recentItems("Microsoft")}
        {recentItems("Software Engineer")}
        {recentItems("Design")}
      </div>
    </div>
  );
}

export default Sidebar