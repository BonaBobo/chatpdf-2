import React from 'react'
import Cases from './../Cases/cases'
import Connect from './../Connect/connect'
import './mainseg.css'

const mainseg = () => {
  return (
    <div className='container'>
        <h1>Chat with any PDF</h1>
        <div className='pdf-container'>
            <div className='pdf-container2'>
                <span className='inside'><svg fill="#228BE6" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 7 2 L 7 48 L 43 48 L 43 14.59375 L 42.71875 14.28125 L 30.71875 2.28125 L 30.40625 2 Z M 9 4 L 29 4 L 29 16 L 41 16 L 41 46 L 9 46 Z M 31 5.4375 L 39.5625 14 L 31 14 Z"/></svg>
                    <p>Drop your PDFs here</p></span>
                <h4>OR</h4>
                <button className='btnpdf'>Browse</button>
            </div>
        </div>
        <div className='card-container'>
            <Cases/>
            <Cases/>
            <Cases/>
        </div>
        <Connect></Connect>
    </div>
  )
}

export default mainseg;