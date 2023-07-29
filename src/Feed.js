import React from 'react'
import { useState,useEffect } from 'react';
import './Feed.css'
import InputOptions from './InputOptions';
import CreateIcon from '@mui/icons-material/Create';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarViewWeekIcon from '@mui/icons-material/CalendarViewWeek';
import Post from './Post';
import { db } from './firebase';
import firebase from "firebase/compat/app";
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import FlipMove from 'react-flip-move';

const Feed = () => {

    const [posts ,setPosts] = useState([]);
    const [input ,setInput] = useState('');
    const user = useSelector(selectUser);

    useEffect(()=>{
        db.collection("posts")
          .orderBy("timestamps", "desc")
          .onSnapshot((snapshot) => {
            setPosts(
              snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
              }))
            );
          });
    },[]);

    const sendPost = (e)=>{
        e.preventDefault();
        db.collection('posts').add({
            name:user.displayName,
            description:user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamps: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('')
    }

 
  return (
    <div className='feed'>
        <div className="feed_inputContainer">
            <div className="feed_input">
                <CreateIcon/>
                <form>
                    <input value = {input} onChange={(e)=>setInput(e.target.value)} type="text" />
                    <button
                    onClick={sendPost}
                    type="submit">Send</button>
                </form>
            </div>
            <div className="feed_inputOptions">
                <InputOptions
                    Icon = {ImageIcon}
                    title = 'Photo'
                    color="#70b5f9"
                />
                <InputOptions
                    Icon = {SubscriptionsIcon}
                    title = 'Video'
                    color = '#e7a33e'
                />
                <InputOptions
                    Icon = {EventNoteIcon}
                    title = 'Event'
                    color = '#c0cbcd'
                />
                <InputOptions
                    Icon = {CalendarViewWeekIcon}
                    title = 'Write Article'
                    color = '#7fc15e'
                />
            </div>
        </div>
        <FlipMove>
        {
            posts.map(({id ,data:{name,description,message,photoUrl}})=>(
                <Post key = {id} name={name} description={description} message={message} photoUrl={photoUrl}/>
                ))
            }
        </FlipMove>
    </div>
  )
}

export default Feed