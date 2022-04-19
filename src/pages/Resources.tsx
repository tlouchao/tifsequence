import React from 'react'
import Layout from 'layout/Layout'

const Resources = () => {
    const initBmps : string[] = ['write', 'initdiffuse']
    const initContent : string[] = ['Write the image array to a bitmap image file / BMP, in order to check proper RGB values and row/column alignment.', 
                                    'Initial diffuse lighting pass.']
    const bmps : string[] = ['flat', 'diffuse', 'specular', 'shadows', 'reflect']
    const bmpContent : string[] = ['Display final image as separate lighting passes. Example of flat coloration.',
                                   'Diffuse pass for final image',
                                   'Specular highlights pass for final image',
                                   'Shadow pass for final image',
                                   'Reflections for final image. Increase the number of light ray bounces, for a more accurate result.']
    return (
        <Layout>
            <div id="resources">
                <div id="resources-wrapper">
                    {initBmps.map((elem, idx) => {
                        return (
                            <div key={elem + '-' + idx} className='bmp-card'>
                                <img src={process.env.PUBLIC_URL + '/bmp/' + elem + '.bmp'}
                                     alt={elem + 'png'}
                                />
                                <p>{initContent[idx]}</p>
                            </div>
                    )})}
                    {bmps.map((elem, idx) => {
                        return (
                            <div key={elem + '-' + idx} className='bmp-card'>
                                <img src={process.env.PUBLIC_URL + '/bmp/' + elem + '.bmp'}
                                     alt={elem + 'png'}
                                />
                                <p>{bmpContent[idx]}</p>
                            </div>
                    )})}
                </div>
            </div>
        </Layout>
    )
}

export default Resources;