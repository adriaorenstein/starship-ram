import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class _02_06C_Server_Code extends React.Component {
    render() {
        return (
            <div className="tut-bg">
                <div className="tut-head">01. The Simplest Program</div>

                <div className="tut-subhead">index.js Code</div>

                <div className="tut-code">
                    <div className="tut-code-comment">// ---------- IMPORTS ---------- //</div>
                    <br></br>
                    <div className="tut-code-comment">// Express will help us communicate with Node more easily</div>
                    const express = require('express');
                    <div className="tut-code-comment">// path helps Node work with directory paths</div>
                    const path = require('path');
                    <br></br>
                    <br></br>
                    <div className="tut-code-comment">// ---------- INITIAL SET-UP ---------- //</div>
                    <br></br>
                    <div className="tut-code-comment">// create an instance of Express</div>
                    const app = express();
                    <br></br>
                    <br></br>
                    <div className="tut-code-comment">// set up local port 8080</div>
                    const port = process.env.PORT || 8080;
                    <br></br>
                    <br></br>
                    <div className="tut-code-comment">// ---------- ROUTES ---------- //</div>
                    <br></br>
                    <div className="tut-code-comment">// main page route</div>
                    app.get('/', function(req, res) {"{"}
                    <br></br>
                    {"\t"}res.sendFile(path.join(__dirname, '/index.html'));
                    <br></br>
                    {"}"})
                    <br></br>
                    <br></br>
                    <div className="tut-code-comment">// ---------- FINAL SET-UP ---------- //</div>
                    <br></br>
                    <div className="tut-code-comment">// tell Express to listen for our port</div>
                    app.listen(port);
                    <br></br>
                    <br></br>
                    <div className="tut-code-comment">// log confirmation message</div>
                    console.log('Server started at http://localhost:' + port);
                </div>

                <div className="next-prev-btns">
                    <Link to="/tutorial/simplest-pro/06" className="prev-btn">Previous</Link>
                    <Link to="/tutorial/simplest-pro/07" className="next-btn">Next</Link>
                </div>
            </div>
        )
    }
}

export default _02_06C_Server_Code;



