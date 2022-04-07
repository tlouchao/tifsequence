import React from 'react'

function Component(props: {className: string}) {
    return (
        <div className={props.className}>
            <p>I am a component! Hello, Pluto!</p>
        </div>
    )
}

export default Component