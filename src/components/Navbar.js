import React from 'react';
import PropTypes from 'prop-types';
export default function Navbar(props){
    const darkcolor={color:'white'};
    
    return(
        <>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="form">{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/about">{props.about}</a>
                        </li>
                        
                    </ul>
                    </div>
                <label className="mx-3" style={darkcolor}><b>{props.cmode}</b></label>
                <div className="form-check form-switch">
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.darkmode}/>
                </div>
                </div>
                </nav>
            
        </>
    );
}
Navbar.propTypes = { title:PropTypes.string};
Navbar.defaultProps = { title:'Only Home Page'};