import React from 'react'

export default function Nav() {


    return (
        <nav id={`main-navigation`}>
            <ul>
                <li><a href="discover">Discover</a></li>
                <li><a href="projects">Projects</a></li>
                <li><a href="project">Project</a></li>
                <li><a href="contacts">Contacts</a></li>
                <li><a href="from-others">From Others</a></li>
                <li><a href="from-you">From You</a></li>
            </ul>
        </nav>
    );
}
