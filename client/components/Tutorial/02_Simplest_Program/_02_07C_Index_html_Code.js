import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class _02_07C_Index_html_Code extends React.Component {
    render() {
        return (
            <div className="tut-bg">
                <div className="tut-head">01. The Simplest Program</div>

                <div className="tut-subhead">index.html Code</div>

                <div className="tut-code">
                    {"<!DOCTYPE html>"}
                    <br></br>
                    <div className="tut-code-comment">// opening our "html" element</div>
                    {'<html lang="en">'}
                    <br></br>
                    <br></br>
                    <div className="tut-code-comment">// head will store the meta-data</div>
                    {"<head>"}
                    <br></br>
                    <div className="tut-code-comment">{"\t"}// the library of characters you'll be using</div>
                    {"\t"}{'<meta charset="UTF-8">'}
                    <br></br>
                    <div className="tut-code-comment">{"\t"}// the name of your site (appears in the browser tab)</div>
                    {"\t"}{"<title>Starship RAM</title>"}
                    <br></br>
                    {"</head>"}
                    <br></br>
                    <br></br>
                    <div className="tut-code-comment">// body will display the things we want visible on the screen</div>
                    {"<body>"}
                    <br></br>
                    <div className="tut-code-comment">{"\t"}// use header tags ({"<h1>, <h2>, <h3>, etc"}) to display text; the numbers denote text size with {"<h1>"} as the biggest</div>
                    {"\t"}{"<h1>Welcome to the Starship RAM!</h1>"}
                    <br></br>
                    {"</body>"}
                    <br></br>
                    <br></br>
                    <div className="tut-code-comment">// closing our "html" element</div>
                    {'</html>'}

                </div>

                <div className="next-prev-btns">
                    <Link to="/tutorial/simplest-pro/07" className="prev-btn">Previous</Link>
                    {/* <Link to="/tutorial/simplest-pro/07" className="next-btn">Next</Link> */}
                </div>
            </div>
        )
    }
}

export default _02_07C_Index_html_Code;



