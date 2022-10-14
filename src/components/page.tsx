import React from 'react';
import {Link} from "react-router-dom";
import Nav from "./nav";

export default function Page({ children, pagename }) {
    return (
        <div>
            <header>
                <Nav />
            </header>
            <h1>{pagename}</h1>
            {children}

            <footer>
                <nav id={`footer-nav`}>
                    <ul>
                        <li><Link to={`/`}>&lt; Home</Link></li>
                    </ul>
                </nav>
            </footer>
        </div>
    );
}
