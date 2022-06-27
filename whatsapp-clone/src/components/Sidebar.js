import React, { useEffect, useState } from 'react'
import './Sidebar.css'
import { Avatar, IconButton } from '@mui/material'
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import SidebarChat from './SidebarChat';
import { collection, onSnapshot } from "firebase/firestore";
import db from '../firebase';
import { useStateValue } from '../StateProvider';


function Sidebar() {
    const collectionName = 'rooms';
    const [rooms, setRooms] = useState([]);
    const [{user}] = useStateValue();

    // Getting Rooms from firestore
    useEffect(() => {
        const collectionRef = collection(db, collectionName);
        onSnapshot(collectionRef, (snapshot) => {
            setRooms( snapshot.docs.map((doc) => {
               return { ...doc.data(), id: doc.id };
            })
            )
        })
    }, [])


    return (
        <div className='sidebar'>
            <div className='sidebar__header'>
                <Avatar src={user.photoURL} />
                <div className='sidebar__headerRight'>
                    <IconButton>
                        <DonutLargeIcon />
                    </IconButton>
                    <IconButton>
                        <ChatIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='sidebar__search'>
                <div className='sidebar__searchContainer'>
                    <SearchOutlinedIcon />
                    <input type="text" placeholder='search or start new chat' />
                </div>
            </div>
            <div className='sidebar__chats'>
                <SidebarChat addNewChat />
                {rooms.map(room => (
                    <SidebarChat key={room.id} id={room.id} name={room.name} />
                ))}
            </div>
        </div>
    )
}

export default Sidebar