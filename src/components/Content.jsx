import * as React from 'react';
import './Content.css'

function Content({heading, paragraph}){
    return (
        // <h1>Hi, I am Hong.</h1>
        <>
            <div className='content'>
                <h1>{heading}</h1>
                <p>{paragraph}</p>
            </div>
        </>
    )
}

export default Content