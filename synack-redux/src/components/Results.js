import React from 'react';
import { useSelector } from 'react-redux';
import Result from './Result';

const Results =()=>{
    const Search = useSelector((state)=>state.Search)
    console.log(Search.results)
    console.log(Search.results[0])
    const result = Search.results[0]
    //console.log(result[0])
    return(
        <div>
            {Search.results.map(nested => nested.map((element, key) =>
            <Result key={key} title={element.title} descrip={element.snippet} url={element.link} />))}
            {Search.loading && <div>Searching...</div>}
            {Search.error && <div>{Search.error}</div>}
        </div>
    )
}
export default Results