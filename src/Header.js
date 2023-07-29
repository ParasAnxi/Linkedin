import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import GroupIcon from '@mui/icons-material/Group';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/userSlice';
import { auth } from './firebase';

const Header = () => {
  const dispatch = useDispatch();
  const logoutApp =()=>{
    dispatch(logout())
    auth.signOut();
  };
  
  return (
    <div className="header">
      <div className="header_left">
        <img
          src="https://cdn.iconscout.com/icon/premium/png-512-thumb/linkedin-2752135-2284952.png?f=avif&w=256"
          alt=""
        />

        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div className="header_right">
        <HeaderOptions Icon={HomeIcon} title="Home" />
        <HeaderOptions Icon={GroupIcon} title="My network" />
        <HeaderOptions Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOptions Icon={ChatIcon} title="Messaging" />
        <HeaderOptions Icon={NotificationsIcon} title="Notification" />
        <HeaderOptions
          avatar={true}
          title="me"
          onClick={logoutApp}
        />
      </div>
    </div>
  );
}

export default Header