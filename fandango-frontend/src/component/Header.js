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
                    <a href="/" title="Click to go to Fandango homepage">
                        <img src="https://images.fandango.com/r1.0.431/redesign/static/img/fandango-logo.svg" alt="Fandango Logo" className="brand-img"/>
                      Fandango Home</a>
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