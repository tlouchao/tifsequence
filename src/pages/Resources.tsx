import React from 'react'
import Layout from 'layout/Layout'

const Resources = () => {
    const initBmps : string[] = ['write', 'initdiffuse']
    const bmps : string[] = ['flat', 'diffuse', 'specular','shadows', 'reflect']
    return (
        <Layout>
            <div id="resources">
                {initBmps.map((elem, idx) => 
                    <img key={idx} 
                         src={process.env.PUBLIC_URL + '/bmp/' + elem + '.bmp'}
                         alt={elem + 'png'}
                    />)}
                {bmps.map((elem, idx) => 
                    <img key={idx} 
                         src={process.env.PUBLIC_URL + '/bmp/' + elem + '.bmp'}
                         alt={elem + 'png'}
                    />)}
            </div>
        </Layout>
    )
}

export default Resources;