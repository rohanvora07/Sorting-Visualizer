import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1>Sorting Visualizer</h1>
        </header>
    )
}
const headerStyle = {
    background: '#000000',
    color: '#FFFFFF',
    textAlign: 'center',
    padding: '50 px',
    top: '0',
}

export default Header;