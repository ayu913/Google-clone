import React , {useState} from 'react';
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import "./Search.css";
import { Button } from '@material-ui/core';

function Search() {

     const [input, setInput] = useState("");
    const search = e => {
        e.preventDefault();
        console.log('You hit the search button >>', input);
    }
    return (
        <form className="search">
            <div className="search__input">
             <SearchIcon className="search__inputIcon"/>
             <input value={input} onChange={e => setInput(e.target.value)}/>
             <MicIcon/>
            </div>

            <div className="search__buttons">
                <Button type='submit' onClick={search} variant="outlined">Google Search</Button>
                <Button variant="outlined">I'm Feeling Lucky</Button>
            </div>
        </form>
    )
}

export default Search
