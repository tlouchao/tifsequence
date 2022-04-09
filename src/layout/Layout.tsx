import React, { ReactElement } from 'react'
import Sidebar from 'component/Sidebar'

interface LayoutProps {
    children: ReactElement;
  }

function Layout(props: LayoutProps) {
    return (
        <div id='wrapper'>
            <nav><Sidebar /></nav>
            <main>{React.cloneElement(props.children, {className: "main-content"})}</main>
        </div>
    );
}

export default Layout;