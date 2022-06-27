import React, { useState, useEffect } from 'react'
import './Chat.css'
import { Avatar, IconButton } from '@mui/material'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import MicIcon from '@mui/icons-material/Mic';
import { useParams } from 'react-router-dom'
import { doc, getDoc } from 'firebase/firestore'
import db from '../firebase';

function Chat() {
    const [input, setInput] = useState("");
    const [seed, setSeed] = useState("");

    const roomId = useParams();
    const [roomName, setRoomName] = useState('');

    useEffect(() => {
        if (roomId) {
            const docRef = doc(db, 'rooms', roomId.roomId);
            getDoc(docRef).then((doc) => {
                setRoomName(doc.data().name);
                console.log(doc.data.name)
            })
        }
    }, [roomId])

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId])

    const sendMessage = (e) => {
        e.preventDefault();
        console.log(input);

        setInput("");
    }


    return (
        <div className='chat'>
            <div className='chat__header'>
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className='chat__headerInfo'>
                    <h3>{roomName}</h3>
                    <p>Last seen...</p>
                </div>
                <div className='chat__headerRight'>
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon />
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon />
                    </IconButton>
                </div>
            </div>
            <div className='chat__body'>
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className='chat__name'>
                        Ahtisham
                    </span>
                    Hey Guyzz!
                    <span className='chat__timestamp'>7:52pm</span>
                </p>
            </div>
            <div className='chat__footer'>
                <InsertEmoticonIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text" placeholder='Type a message' />
                    <button onClick={sendMessage} type='submit'>Send Message</button>
                </form>
                <MicIcon />
            </div>
        </div>
    )
}

export default Chat