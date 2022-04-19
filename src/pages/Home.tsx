import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from 'layout/Layout'

function Home() {

    const [bgOpacity, setBgOpacity] = useState(.8333)

    function handleMouseEnter(){
        setBgOpacity(.625)
    }

    function handleMouseOut(){
        setBgOpacity(.8333)
    }

    return (
        <Layout>
            <div id="home">
                <div id="home-title" onMouseEnter={handleMouseEnter} onMouseOut={handleMouseOut}>
                    <Link to='/about'><p>Tiffany C</p></Link>
                </div>
                <div id="home-img-overlay">
                    <div id="home-img" style={{ opacity: bgOpacity, backgroundImage: 'url(' + process.env.PUBLIC_URL + '/guardian_grassy.png)'}}/>
                </div>
            </div>
        </Layout>
    )
}

export default Home;

