/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import "./header.css"

export default props =>
        <header>
                <img src={require('./labetube.png')}/>
                <input type="text" placeholder="Busque por um video" />
        </header >