import React, { useEffect, useState } from 'react'
import "./SidebarChat.css"
import { Avatar} from '@mui/material'
import {addDoc, collection} from 'firebase/firestore'
import db from '../firebase';
import {Link} from 'react-router-dom'

function SidebarChat({addNewChat,name,id}) {
    const collectionName = 'rooms';
    const [seed, setSeed] = useState("");

    useEffect(()=>{
        setSeed(Math.floor(Math.random() * 5000));
    },[])

    const createChat = ()=>{
        const roomName = prompt("Please enter name for chat");
        if(roomName){
            const collectionRef = collection(db,collectionName);
            addDoc(collectionRef, {name: roomName})
        }
    };


  return !addNewChat? (
    <Link to={`/rooms/${id}`}>
    <div className='sidebarChat'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`}/>
        <div className='sidebarChat__info'>
            <h2>{name}</h2>
            <p>Last message...</p>
        </div>
    </div>
    </Link>
  ) 
  : (
    <div className='sidebarChat' onClick={createChat}>
        <h2>Add New Chat</h2>
    </div>
  )
}

export default SidebarChat