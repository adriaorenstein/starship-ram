import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class _02_02_Download_IDE extends React.Component {
    render() {
        return (
            <div className="tut-bg">
                <div className="tut-head">01. The Simplest Program</div>

                <div className="tut-subhead">1. Download Your IDE</div>
                
                <div className="tut-body">I've heard legends of Earthlings tearing down forests to create the precious commodity of 'paper', stripping their world of its vital oxygen supply in the process. Now we are much more sustainable, using hundreds of thousands of energy-gulping servers to write our code in IDEs!</div>

                <div className="tut-body">IDE stands for Integrated Design Environment. Basically, it's an application that you can write and run your code in. We'll be using Visual Studio Code (or VS Code) on a Mac. If you're a Windows user you can check in next door (under the big sign that says 'Garbage Chute'.)</div>

                <div className="tut-body">Here's a link you can follow to download VS Code. Follow the steps for Installation and Launching from the Command Line. Don't worry. It won't take too long. You'll be back to hearing my dulcet tones soon enough.</div>
                <a href="https://code.visualstudio.com/docs/setup/mac" className="tut-body">Click here to download VS Code.</a>

                <div className="next-prev-btns">
                    <Link to="/tutorial/simplest-pro" className="prev-btn">Previous</Link>
                    <Link to="/tutorial/simplest-pro/03" className="next-btn">Next</Link>
                </div>

            </div>
        )
    }
}

export default _02_02_Download_IDE;