import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import './Search.css'
import { Button } from "@mui/material/"
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


function Search({ hideButtons = false }) {
    const [,dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const navigate = useNavigate();

    // Function to search
    const search = e => {
        e.preventDefault();
        console.log("You hit search>> ", input)

        dispatch({
            type: actionTypes.SET_SEARCH_TERMS,
            term : input
        })

        // This will take you to the search page
        navigate('/search');
    }


    return (
        <form className='search'>
            <div className='search__input'>
                <SearchIcon className='search__inputIcon' />
                <input value={input} onChange={e => setInput(e.target.value)} />
                <MicIcon />
            </div>
            {
                !hideButtons ?
                    (
                        <div className='search_buttons'>
                            <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
                            <Button variant='outlined'>I'm Feeling Lucky</Button>
                        </div>
                    )
                    :
                    (
                        <div className='search_buttons'>
                            <Button className='search__buttonsHidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
                            <Button className='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
                        </div>
                    )
            }

        </form>
    )
}

export default Search