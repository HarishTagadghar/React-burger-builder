import React from 'react';
import Auxiliary from '../../assets/hoc/Auxiliary';
const Layout = (props) => {
    return (
        <Auxiliary>
            <div>toolbar , sidebar , </div>
            <main>
                {props.children}
            </main>
        </Auxiliary>
    )
}

export default Layout