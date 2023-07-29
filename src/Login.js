import React from 'react'
import './Login.css'
import { auth } from './firebase'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {login} from './features/userSlice'
const Login = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [name, setName] = useState("");
   const [profilePic, setProfilePic] = useState("");
   const dispatch = useDispatch();

   const loginHandler = async (e) => {
     e.preventDefault();
     try {
       const userAuth = await auth.signInWithEmailAndPassword(email, password);

       dispatch(
         login({
           email: userAuth.user.email,
           uid: userAuth.user.uid,
           displayName: userAuth.user.displayName,
           photoUrl: userAuth.user.photoURL,
         })
       );
     } catch (error) {
       alert(error);
     }
   };

   const registerHandler = async () => {
     if (!name) {
       return alert("Please enter a full name!");
     }

     try {
       const userAuth = await auth.createUserWithEmailAndPassword(
         email,
         password
       );

       await userAuth.user.updateProfile({
         displayName: name,
         photoUrl: profilePic,
       });

       dispatch(
         login({
           email: userAuth.user.email,
           uid: userAuth.user.uid,
           displayName: name,
           photoUrl: profilePic,
         })
       );
     } catch (error) {
       console.log(error);
       alert(error);
     }
   };
  return (
    <div className="login">
        <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />

        <form>
            <input value={name} onChange={(e)=>setName(e.target.value)}  type="text" placeholder='FullName' />
            <input value={profilePic} onChange={(e)=>setProfilePic(e.target.value)}   type="text" placeholder='Profile Pic' />
            <input value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Email' />
            <input value={password} onChange={(e)=>setPassword(e.target.value)}  type="password" placeholder='Password' />

            <button type='submit' onClick={loginHandler}>Sign In</button>
        </form>
        <p>not a member?{" "}<span className='login_register' onClick={registerHandler}>Register Now</span></p>
    </div>
  )
}

export default Login