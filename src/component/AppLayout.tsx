import Component from './Component'

function AppLayout(props: {id: string}) {
    return (
        <div id={props.id}>
            <div><Component className='component' /></div>
            <div><Component className='component' /></div>
        </div>
    );
}

export default AppLayout;