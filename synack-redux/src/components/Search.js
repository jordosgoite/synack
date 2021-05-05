import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchData from './redux/actions/SearchActions';

const Search =()=>{
    const dispatch =  useDispatch();
    const [mySearch, setMySearch] = useState({
        searchData: '',
        searchEngine:''
    });
    const handleChange = (e) =>{
        setMySearch({...mySearch, [e.target.name]:e.target.value})
    }
    return(
        <div className="search-menu">
            <input className="search-input" type="text" name="searchData" placeholder="Search..." 
                onChange={handleChange}
            />
            <select className="search-select" name="searchEngine" onChange={handleChange}>
                <option selected disabled>Choose Search Engine</option>
                <option value='google'>Google</option>
                <option value='bing'>Bing</option>
                <option value='both'>Both</option>
            </select>
            <button className="search-button" onClick={()=>{dispatch(fetchData(mySearch))}}>Search</button>
        </div>
    );
}
export default Search