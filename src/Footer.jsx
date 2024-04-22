import React from 'react'
import "./App.css"

export const Footer = () => {
  return (
    <div className='Footer justify'>
        <p className='baseline'>Designed by <b>Paul Buchwald </b></p>
        <br />
        <p>Visit my <a className='link' href='https://paulokh.de' target="_blank" rel="noreferrer">Homepage</a> {" & "}
         <a className='link' href='https://github.com/KioshiOkh' target="_blank" rel="noreferrer">Github</a></p>
    </div>
  )
}
