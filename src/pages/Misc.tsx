import React from 'react'
import Layout from 'layout/Layout'

const Misc = () => {
    const art : string[] = ['akira', 'vivo', 'cardinals', 'bugatti', 'sargent', 'surfaces']
    return (
        <Layout>
            <div id="misc">
                <div id="misc-wrapper">
                    <p>Renders, and artwork completed for a workshop located in Pasadena, California.</p>
                    <div className="img-container">
                    {art.map((elem, idx) => 
                        <img key={elem + '-' + idx}
                            src={process.env.PUBLIC_URL + '/art/' + elem + '.png'}
                            alt={elem + 'png'}/>)}
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Misc;