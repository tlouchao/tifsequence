import React from 'react'
import { Link } from 'react-router-dom'
import Layout from 'layout/Layout';

function About() {

    const langs: string[] = ['React JS', 'React Router', 'Sass','Typescript']
    const hrefLangs: string[] = ['https://reactjs.org/', 'https://reactrouter.com/', 'https://sass-lang.com/', 'https://www.typescriptlang.org/']
    const colorLangs: string[] = ['#FF28FF', '#CC4CFF', '#8888FF', '#40C0FF' ]
    const colorText: string = '#EEEEEE'

    const summaryAssetsPrefix: string = 'Site assets are built with '
    const summaryLanding: string[] = ['the landing page model is textured and rendered with the ', ' software package. ']
    const summaryProjects: string[] = ['Below is a list of projects, accompanied by demos/additional details:']
    const c4d: HTMLAnchorElement = <a href="https://www.maxon.net/en/cinema-4d" style={{color: '#FF4000'}}>Cinema 4D</a>

    // return JSX
    return (
        <Layout>
            <div id="about">
                <div id="about-wrapper">
                    <div className="card card-first">
                        <img src={process.env.PUBLIC_URL + '/fprofile.jpg'} alt='profile.jpg'/>
                        <div className="card-content">
                            <div>
                                <p>Welcome,</p><br/>
                                <p className='p-content'>{summaryAssetsPrefix}
                                {langs.map((lang, idx) => {
                                    const andDelim: HTMLSpanElement | string = (idx === langs.length - 1) ? <span style={{color: colorText}}>and </span> : ''
                                    const delim: string = (idx === langs.length - 1) ? ' - ' : ', '
                                    return (<span key={lang}>
                                                {andDelim}
                                                <a href={hrefLangs[idx]} style={{color: colorLangs[idx]}}>
                                                    {lang}
                                                </a>
                                                <span>{delim}</span>
                                            </span>
                                    )}
                                )}
                                {summaryLanding[0]}{c4d}{summaryLanding[1]}{summaryProjects}</p>
                            </div>
                        </div>
                    </div>
                    <div key={'proj0'} className='card card-project'>
                        <div className='card-thumbnail' 
                            style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/thumbnail/colorpicker_thumbnail.png)'}}>
                        </div>
                        <div className='card-overlay'>
                            <p>Color picker component modeled after Chrome's default color picker tool.</p><br/>
                            <p><a href="https://tlouchao.github.io/simple-color-picker/">---&gt; Demo</a></p>
                        </div>
                    </div>
                    <div key={'proj1'} className='card card-project'>
                        <div className='card-thumbnail' 
                            style={{backgroundImage: 'url(' + process.env.PUBLIC_URL + '/bmp/check.bmp)'}}>
                        </div>
                        <div className='card-overlay'>
                            <p>Image generated as a result of <a href="https://github.com/ssloy">Dmitry Sokolov's</a> computer graphics / rendering course.</p><br/>
                            <p><Link to="/resources">---&gt; Images</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;