import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class _02_01_Intro extends React.Component {
    render() {
        return (
            <div className="tut-bg">
                <div className="tut-head-main">01. The Simplest Program</div>

                <div className="tut-body">For this section, we will go through the most basic steps necessary to get a site up and running locally on your computer. That means that when we are done you will have a very simple page that is visible in your web browser.</div>

                <div className="section-list">
                    <div className="section-head">In this section...</div>
                        <ul>
                            <li className="section-item">Download your IDE</li>
                        </ul>
                </div>

                <div className="next-prev-btns">
                    <Link to="/tutorial/introduction" className="prev-btn">Previous</Link>
                    <Link to="/tutorial/simplest-pro/02" className="next-btn">Next</Link>
                </div>

            </div>
        )
    }
}

export default _02_01_Intro;