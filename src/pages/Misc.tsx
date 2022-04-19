import React from 'react'
import Layout from 'layout/Layout'

const Misc = () => {
    const art : string[] = ['vivo', 'cardinals', 'bugatti', 'sargent', 'surfaces']
    return (
        <Layout>
            <div id="misc">
                {art.map((elem, idx) => 
                    <img key={idx} 
                         src={process.env.PUBLIC_URL + '/art/' + elem + '.png'}
                         alt={elem + 'png'}/>)}
            </div>
        </Layout>
    )
}

export default Misc;