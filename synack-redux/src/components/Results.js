import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Result from './Result';

const Results =()=>{
    const Search = useSelector((state)=>state.Search)
    const searchEngine = Search.searchEngine;
    return(
        <div>
            {Search.loading && <div className="searching-msj">Searching...</div>}
            {searchEngine==='google' ?
                Search.results.map(nested => nested.map((element, key) =>
                <Result key={key} title={element.title} descrip={element.snippet} url={element.link} />))
                :
                null
            }
            {searchEngine==='bing' ?
                Search.results.map(nested => nested.map((element, key) =>
                <Result key={key} title={element.title} descrip={element.description} url={element.url} />))
                :
                null
            }
            {searchEngine==='both' ?
                <>
                {Search.results[0][0].data.items.map((element, key) =>
                <Result key={key} title={element.title} descrip={element.snippet} url={element.link} />)}
                {Search.results[0][1].data.data.results.organic.map((element, key) =>
                <Result key={key} title={element.title} descrip={element.description} url={element.url} />)}
                </>
                :
                null
            }
            {Search.error && <div>{Search.error}</div>}
        </div>
    )
}
export default Results

