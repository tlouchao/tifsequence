import { ReactChild } from 'react'
import Sidebar from '../component/Sidebar'

interface LayoutProps {
    children: ReactChild | ReactChild[];
  }

function Layout(props: LayoutProps) {
    return (
        <div id='wrapper'>
            <nav><Sidebar /></nav>
            <main>{props.children}</main>
        </div>
    );
}

export default Layout;