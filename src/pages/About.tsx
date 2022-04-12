import React from 'react'
import Layout from 'layout/Layout';

function About() {

    const langs: string[] = ['React JS', 'React Router', 'Sass','Typescript']
    const hrefLangs: string[] = ['https://reactjs.org/', 'https://reactrouter.com/', 'https://sass-lang.com/', 'https://www.typescriptlang.org/']
    const colorLangs: string[] = ['#FF28FF', '#BB5BFF', '#5588FF', '#40C0FF' ]
    const colorText: string = '#EEEEEE'

    const summaryIntent: string = 'My name is Tiffany. This site houses personal work completed within the domains of computer science and media arts. '
    const summaryAssetsPrefix: string = 'Site assets were built with help from '
    const summaryLanding: string[] = ['The landing page image features a 3D model, textured and rendered within the ', ' software package.']
    const c4d: HTMLAnchorElement = <a href="https://www.maxon.net/en/cinema-4d" style={{color: '#FF4000'}}>Cinema 4D</a>

    // return JSX
    return (
        <Layout>
            <div id="about">
                <div className="card">
                    <img src={process.env.PUBLIC_URL + 'fprofile.jpg'} alt='profile.jpg'/>
                    <div className="card-content">
                        <p>Welcome!</p><br/>
                        <p>{summaryIntent}{summaryAssetsPrefix}
                        {langs.map((lang, idx) => {
                            const andDelim: HTMLSpanElement | string = (idx === langs.length - 1) ? <span style={{color: colorText}}>and </span> : ''
                            const delim: string = (idx === langs.length - 1) ? '. ' : ', '
                            return (<span key={lang}>
                                        {andDelim}
                                        <a href={hrefLangs[idx]} style={{color: colorLangs[idx]}}>
                                            {lang}
                                        </a>
                                        <span>{delim}</span>
                                    </span>
                            )}
                        )}
                        {summaryLanding[0]}{c4d}{summaryLanding[1]}
                        </p><br/>
                        <p>Please contact <a href="mailto:tiffanylouchao@gmail.com"style={{color: colorText}}>tiffanylouchao@gmail.com</a> for further inquiries.</p><br/>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;