import React from 'react'
import headerimg from '../../../images/headerimg.png';
import './Header.css'


function AppHeader() {
    return (
        <header className="App-header">
            <img src={headerimg} alt='Animal Crossing logo'></img>
        </header>
    )
}

export default AppHeader;
