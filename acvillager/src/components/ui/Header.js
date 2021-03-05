import React from 'react'
import headerimg from '../../images/headerimg.png';


function AppHeader() {
    return (
        <header className="app-header">
            <img src={headerimg} alt='Animal Crossing logo'></img>
        </header>
    )
}

export default AppHeader;
