import React from 'react';

const Head = () => {
    return(
        <div style = {{backgroundColor : "black"}}>
        <header id="registration-header" className="registration-header" role="banner">
            <nav role="navigation" className="nav-bar">
            <div className="row">
                <div className="large-11 large-centered columns">
                <ul className="inline-items">
                    <li className="site-logo">
                        <img src="https://images.fandango.com/r1.0.431/redesign/static/img/fandango-logo.svg" alt="Fandango Logo" className="brand-img"/>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </header>
    </div>
    )
}

export default Head;