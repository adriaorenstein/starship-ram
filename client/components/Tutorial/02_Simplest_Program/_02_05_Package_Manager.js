import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class _02_05_Package_Manager extends React.Component {
    render() {
        return (
            <div className="tut-bg">
                <div className="tut-head">01. The Simplest Program</div>

                <div className="tut-subhead">5. Set Up Your Package Manager</div>

                <div className="tut-body">We'll be using a library called <b>Node Package Manager</b> (or NPM for short.) This is a package managing software that is dowloaded alongside Node.js. It includes a ton of libraries such as the aforementioned React.js and Express. We'll then be able to use the npm command to install these packages easily from our Terminal and start using them in our program.</div>

                <div className="tut-body"><b>1. Open a new Terminal shell in your VS Code Project.</b> You can do this by going to the top menu of the VS Code application, click 'Terminal' and then click 'New Terminal'. We will be able to write commands in a language called Shell Script, just like we did when creating a new project folder and opening our project. We will be downloading our packages and libraries in the Terminal.</div>

                <div className="tut-body"><b>2. In the terminal, type </b><span className="tut-code-inline">npm init</span> to begin setting up the Node Package Manager. It will ask you questions about your name and project name. If you have trouble figuring out your name, I will assume you are brain slugged and be forced to obliterate you. You can use the <b>Enter</b> key to move through the prompts. You don’t have to fill in anything you’re unsure about. You can and probably will change all of this later.</div>

                <div className="tut-hint"><b>Having trouble using npm?</b> Getting an error like 'command not found'? Node.js may not be installed. See the <Link to="/tutorial/references">References</Link> page for the Node.js installation doc then return here. Or maybe you spelled 'npm' wrong. I don't know. We didn't get a lot of job applicants this year.</div>

                <div className="tut-def">
                    <div className="tut-def-item">
                        <div className="tut-def-head">Package.json</div>
                        When the package manager has finished downloading, you should see a new file pop up in the file directory on the left-side panel of VS Code called <b>package.json</b>. Who is this Jason fellow and why has he popped up in our program uninvited???
                        <br></br>
                        <br></br>
                        Before you reach for your baseball bat, this file is actually a crucial part of our package managing! If anybody else wants to clone our program code on their own computer (Blorgon help them), they'll need to install the same libraries we have on our computer. But how will they know what we've installed? That's where Jason's creepy stalker micromanaging will come in handy. As we install packages, this file will automatically update to include them. <div className="tut-def-subhead">Essentially, package.json acts as a list of all the frameworks and libraries we're using in our program.</div> That way, if anyone else wants to work on our program, they just have to run a simple command to download all the same libraries from the file.
                    </div>
                </div>

                <div className="tut-body"><b>3. Open the package.json file.</b> It should look something like this:</div>
                <div className="tut-code">
                    {"{"}
                    <br></br>

                    {"\t"}name": "starship_ram",
                    <br></br>
                    {"\t"}"version": "1.0.0",
                    <br></br>
                    {"\t"}"description": "Welcome aboard our glorious spaceliner, the Starship RAM, which definitely does not employ space rats to manage waste and definitely does not pay them an unfair wage, I absolutely cannot stress this enough.",
                    <br></br>
                    {"\t"}"main": "index.js",
                    <br></br>
                    {"\t"}"scripts": {"{"}
                    <br></br>
                    {"\t"}{"\t"}"test": "echo \"Error: no test specified\" && exit 1"
                    <br></br>
                    {"\t"}{"}"},
                    <br></br>
                    {"\t"}"author": "Recruitius Newiest",
                    <br></br>
                    {"\t"}"license": "ISC"
                    <br></br>
                    {"}"}
                </div>

                <div className="tut-body"><b>4. Now we'll set up a start command</b> in our package.json file to make running our program easier. In the package.json file, in the "scripts" block, add the following line (which has been <b>bolded</b> for your optimal optical comfort):</div>


                <div className="tut-code">
                    {"{"}
                    <br></br>
                    {"\t"}...
                    <br></br>
                    {"\t"}"scripts": {"{"}
                    <br></br>
                    {"\t"}{"\t"}<b>"start": "node index.js",</b>
                    <br></br>
                    {"\t"}{"\t"}"test": "echo \"Error: no test specified\" && exit 1"
                    <br></br>
                    {"\t"}{"\t"}{"}"},
                    <br></br>
                    {"\t"}...
                    <br></br>
                    {"}"}
                </div>

                <div className="tut-summary-head">In summary...</div>
                <div className="tut-summary-body">We have created a file that sets up a command for running our program and will list all of the packages included in our program.</div>

                <div className="next-prev-btns">
                    <Link to="/tutorial/simplest-pro/04" className="prev-btn">Previous</Link>
                    <Link to="/tutorial/simplest-pro/06" className="next-btn">Next</Link>
                </div>
            </div>
        )
    }
}

export default _02_05_Package_Manager;