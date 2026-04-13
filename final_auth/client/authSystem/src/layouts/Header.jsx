import React from 'react'

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
            <a className="navbar-brand" href="#">MyApp</a>
            <div className="collapse navbar-collapse">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
