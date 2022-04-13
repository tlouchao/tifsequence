import React from 'react'
import Layout from 'layout/Layout';
import { ReactComponent as AeIcon } from 'static/imgs/AfterEffects.svg'
import { ReactComponent as AiIcon } from 'static/imgs/Illustrator.svg'
import { ReactComponent as PsIcon } from 'static/imgs/Photoshop.svg'
import { ReactComponent as AnIcon } from 'static/imgs/AnimateCopy.svg'
import { ReactComponent as BlendIcon } from 'static/imgs/Blender_logo.svg'
import { ReactComponent as C4DIcon } from 'static/imgs/cinema-4d-logo.svg'
import { ReactComponent as RedshiftIcon } from 'static/imgs/redshift-seeklogo.svg'
import { ReactComponent as SketchupIcon } from 'static/imgs/SketchUp_logo.svg'

function About() {

    const langs: string[] = ['React JS', 'React Router', 'Sass','Typescript']
    const hrefLangs: string[] = ['https://reactjs.org/', 'https://reactrouter.com/', 'https://sass-lang.com/', 'https://www.typescriptlang.org/']
    const colorLangs: string[] = ['#FF28FF', '#BB5BFF', '#5588FF', '#40C0FF' ]
    const colorText: string = '#EEEEEE'

    const summaryIntent: string = 'My name is Tiffany. This site houses personal work completed within the domains of computer science and media arts. '
    const summaryAssetsPrefix: string = 'Site assets were built with help from '
    const summaryLanding: string[] = ['The landing page model is textured and rendered within the ', ' software package.']
    const c4d: HTMLAnchorElement = <a href="https://www.maxon.net/en/cinema-4d" style={{color: '#FF4000'}}>Cinema 4D</a>

    const icons: ReactComponent[][] = [[<AeIcon />, <AiIcon />, <PsIcon />, <AnIcon />], [<BlendIcon />, <C4DIcon />, <RedshiftIcon />, <SketchupIcon />]]
    const iconsLabels: string[][] = [["After Effects", "Illustrator", "Photoshop", "Animate"], ["Blender", "Cinema 4D", "RedShift", "Sketchup"], ["React JS", "TypeScript", "Python 3", "C++"]]

    // return JSX
    return (
        <Layout>
            <div id="about">
                <div className="card">
                    <img src={process.env.PUBLIC_URL + 'fprofile.jpg'} alt='profile.jpg'/>
                    <div className="card-content">
                        <div>
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
                            <p>Please contact <a href="mailto:tiffanylouchao@gmail.com"style={{color: colorText}}>tiffanylouchao@gmail.com</a> for further inquiries.</p>
                        </div>
                    </div>
                </div>
                <div className='card card-header'>
                    <div className='icons'>
                        {icons.map((iconsCol, idxCol) =>
                            <div key={'iconcol' + idxCol} className='icon-col'>
                                {iconsCol.map((iconsRow, idxRow) => {
                                    return(
                                        <div key={'iconrow' + idxRow} className= 'icon-row'>
                                            {iconsRow}
                                            <p>{iconsLabels[idxCol][idxRow]}</p>
                                        </div>
                                    )}
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About;