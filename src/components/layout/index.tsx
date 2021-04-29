import React from 'react'
import Navbar from '../navbar'

const Layout: React.FunctionComponent<{}> = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
        </div>
    )
}
export default Layout