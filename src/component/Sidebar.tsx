import React, { ReactElement } from 'react'
import { Link } from 'react-router-dom'
// svg import
import { ReactComponent as GhIcon } from 'static/imgs/github-square-brands.svg'
import { ReactComponent as MailIcon } from 'static/imgs/envelope-solid.svg'

function Sidebar() {

    // sidebar navigation
    const links: string[] = ["about", "art", "code", "misc"]
    const linksItems: ReactElement[] = links.map(elem => {
        const linkTo: string = '/' + elem
        const linkTitle: string = (elem === "misc") ? 'miscellaneous'.toUpperCase() : elem.toUpperCase()
        return <li key={elem}><Link to={linkTo}>{linkTitle}</Link></li> })

    // sidebar icons
    return (
        <div id="sidebar">
            <div id="sidebar-brand">
                <Link to='/'>
                    <img src={process.env.PUBLIC_URL + '/gyrfalcon.jpg'} alt='gyrfalcon.jpg'/>
                </Link>
            </div>
            <div id="sidebar-nav">
                <ul>{linksItems}</ul>
            </div>
            <div id="sidebar-icons">
                <div className="sidebar-icon">
                    <a href="https://github.com/tlouchao">
                        <svg><GhIcon /></svg>
                    </a>
                </div>
                <div className="sidebar-icon">
                    <a href='ma&#105;lto&#58;&#37;&#55;4if%6&#49;&#37;63ha%6&#70;&#64;&#103;%6&#68;&#97;il&#37;2Ec%6&#70;m'>
                        <svg><MailIcon /></svg>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidebar