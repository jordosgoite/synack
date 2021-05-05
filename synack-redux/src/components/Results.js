import React from 'react';
import { useSelector } from 'react-redux';
import Result from './Result';

const Results =()=>{
    const Search = useSelector((state)=>state.Search)
    console.log(Search.results)
    return(
        <div>
            {Search.results.map(nested => nested.map((element, key) =>
            <Result key={key} title={element.htmlTitle} descrip={element.snippet} url={element.link} />))}
            {Search.loading && <div>Searching...</div>}
            {Search.error && <div>Error</div>}
        </div>
    )
}
export default Results