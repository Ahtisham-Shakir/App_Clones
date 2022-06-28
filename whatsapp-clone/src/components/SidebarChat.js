import React, { useEffect, useState } from 'react'
import "./SidebarChat.css"
import { Avatar} from '@mui/material'
import {addDoc, collection, query,orderBy, onSnapshot} from 'firebase/firestore'
import db from '../firebase';
import {Link} from 'react-router-dom'

function SidebarChat({addNewChat,name,id}) {
    const collectionName = 'rooms';
    const [seed, setSeed] = useState("");
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (id) {
            const collectionRef = collection(db, 'rooms', id, 'messages');
            const q = query(collectionRef, orderBy('timestamp', 'desc'));
            onSnapshot(q, snapshot => {
                setMessages(snapshot.docs.map(doc => (doc.data())))
            })
        }
    }, [id])

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
            <p>{messages[0]?.message}</p>
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