import React, { ReactElement, useState } from 'react'
import { Link } from 'react-router-dom'
// svg import
import { ReactComponent as InIcon } from 'static/imgs/linkedin-brands.svg'
import { ReactComponent as GhIcon } from 'static/imgs/github-brands.svg'
import { ReactComponent as MailIcon } from 'static/imgs/envelope-solid.svg'

function Sidebar() {

    const [brandImg, setBrandImg] = useState<string>('/cube.png')
    const handleBrandMouseEnter = (e : MouseEvent) => {setBrandImg('/cubem.png')}
    const handleBrandMouseLeave = (e : MouseEvent) => {setBrandImg('/cube.png')}

    // sidebar navigation
    const links: string[] = ["about", "resources", "misc"]
    const linksItems: ReactElement[] = links.map(elem => {
        const linkTo: string = '/' + elem
        const linkTitle: string = (elem === "misc") ? 
                                  'miscellaneous'.toUpperCase() : 
                                  elem.toUpperCase()
        return <li key={elem}><Link to={linkTo}>{linkTitle}</Link></li> })

    // sidebar icons
    const hrefs: string[] = ['https://www.linkedin.com/in/tlouchao/','https://github.com/tlouchao','mailto:tiffanylouchao@gmail.com']                     
    const icons: ReactComponent[] = [<InIcon />,<GhIcon />,<MailIcon />]
    const iconsItems: ReactElement[] = hrefs.map((elem, idx) => {
        return (<div key={'si-' + idx} className="sidebar-icon">
                    <a href={hrefs[idx]}>
                        <div><svg>{icons[idx]}</svg></div>
                    </a>
                </div>
        )
    })

    // render JSX
    return (
        <div id="sidebar">
            <div id="sidebar-sticky">
                <div id="sidebar-brand">
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + brandImg} alt={brandImg}
                            onMouseEnter={handleBrandMouseEnter} onMouseLeave={handleBrandMouseLeave}/>
                    </Link>
                </div>
                <div id="sidebar-nav">
                    <ul>{linksItems}</ul>
                </div>
                <div id="sidebar-icons">
                    {iconsItems}
                </div>
                <div id="sidebar-copyright">
                    <p>&copy; 2022. All Rights Reserved</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar