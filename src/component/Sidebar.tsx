import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {

    const links: string[] = ["home", "about", "art", "code", "other"]
    const linksItems: React.ReactElement[] = links.map(elem => {
        const linkTo: string = (elem === "home") ? '/' : '/' + elem
        const linkTitle: string = elem.charAt(0).toUpperCase() + elem.slice(1)
        return <li key={elem}><Link to={linkTo}>{linkTitle}</Link></li> })

    return (
        <div id="sidebar">
            <ul>{linksItems}</ul>
        </div>
    )
}

export default Sidebar