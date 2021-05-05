import React from 'react';

const Result =({title, descrip, url})=>{
    return(
        <div className="result-container">
            <a href={url} target="_blank"><span className="result-url">{url}</span><span>{title}</span></a>
            <p>{descrip}</p>
        </div>
    )
}
export default Result