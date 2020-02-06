import React from 'react'

// Line below standard, moved to bottom of code also works...
// export default function Navbar() {
function Navbar(props) {
    return (
        <nav>
            <h1>My Website</h1>
            <ul>
                <li>Home</li>
                <li>{props.mainPage}</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;