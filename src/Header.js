import React from "react"
function Header() {
    return (
        <header>
            <nav className="nav">
                <img src="../logo.png" className="img" />
                <ul className="Nav-items">
                    <li>Home</li>
                    <li>Pricing</li>
                    <li>About us</li>
                    <li>Contact us</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header