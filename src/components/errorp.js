import React from "react";
import { NavLink } from "react-router-dom";

const errorp =() =>{
    return(
        <div id="notfound">
            <div className="notfound">
                <div className="notfound-404">
                    <h1>404</h1>

                </div>
                <h2>we are sorry , page not found !</h2>
                    <div className="nude">
                                    <p className="mb-5">The page you are trying to reach is either removed ,
                                    or is unreachable at the moment! please contact admin.</p>
                    </div>
                <NavLink to="/">"Back to Home"</NavLink>
            </div>
        </div>
    )}
export default errorp  