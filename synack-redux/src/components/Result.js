import React from 'react';

const Result =({title, descrip, url})=>{
    return(
        <div className="result-container">
            <a href={url} target="_blank" rel="noopener noreferrer">
                <span className="result-url" >{url}</span><span>{title}</span>
            </a>
            <p>{descrip}</p>
        </div>
    )
}
export default Result