import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class _02_03_Create_Project extends React.Component {
    render() {
        return (
            <div className="tut-bg">
                <div className="tut-head">01. The Simplest Program</div>

                <div className="tut-subhead">2. Create Your Project</div>

                <div className="tut-body">Still with me? Great! You're already doing better than Intern Dan (Blorgon rest his soul.)</div>

                <div className="tut-body">
                    Now we'll create a folder to store our project in. Because we want our deskmate to think we're a cool and mysterious hacker-type (naturally) we're going to use the Terminal (or shell) to create this folder.
                </div>

                <div className="tut-body">
                    <b>1. Open the Terminal application</b> that comes with your computer. Once open, you should see a small black or white window that looks like the "mainframe" the nerd furiously types into whilst hacking into security systems in action movies.
                </div>


                <div className="tut-asset-wrapper">
                    <img src="/assets/02_Simplest_Program/terminal_icon.png" className="tut-asset"></img>
                    <div className="tut-caption">Icon for the Terminal Application</div>
                </div>

                <div className="tut-asset-wrapper">
                    <img src="/assets/02_Simplest_Program/terminal_page.png" className="tut-asset"></img>
                    <div className="tut-caption">This is what your terminal window should look like when the application opens.</div>
                </div>

                <div className="tut-body"><b>2. Figure out where you want to save the website</b> we're about to build on your computer. I'm not going to tell you where to do your business, that's kind of like following you into the toilets and HR already had that disciplinary meeting, but you might want to store it in a place where you store other coding projects. Like a folder called 'Coding_Projects'. Or just toss it into the 'Videos' folder if you're feeling rebellious. Here are some useful commands for navigating through your folders on Terminal:</div>

                <div className="tut-code">
                    cd my_folder
                    <br></br>
                    <span className="tut-code-comment">// enters a folder called 'my_folder'</span>
                    <br></br>
                    cd ..
                    <br></br>
                    <span className="tut-code-comment">// goes back a step (so if you entered 'folder_1' then 'folder_2' and then entered 'cd ..', it would go back up into 'folder_1')</span>
                    <br></br>
                    ls my_folder
                    <br></br>
                    <span className="tut-code-comment">// displays all the folders and files in 'my_folder'</span>
                </div>

                <div className="tut-body">You can keep 'cd'-ing into folders until you find the perfect spot!</div>

                <div className="tut-hint">* Note that instead of typing 'cd' over and over, once you've typed some of your folder name you can hit <b>Tab</b> to 'autofill' the rest of your folder name and <b>Tab</b> again to see the contents of that folder. But since the <b>Tab</b> key is right next to the Self-Destruct key, I figured we'd keep it simple with cd and ls.</div>

                <div className="tut-body"><b>3. Create a new folder called StarshipRAM and enter it.</b> You can use these commands in your Terminal to accomplish this:</div>

                <div className="tut-code">
                    mkdir StarshipRAM
                    <br></br>
                    <span className="tut-code-comment">// make a folder called 'StarshipRAM'</span>
                    <br></br>
                    cd StarshipRAM
                    <br></br>
                    <span className='tut-code-comment'>// enter the folder</span>
                </div>

                <div className="tut-body"><b>4. Finally, we will open the new folder in VS Code.</b> Assuming you followed the steps to set up 'Launching from the Command Line' while downloading VS Code, you should be able to just type <span className="tut-code-inline">code .</span> into your Terminal to open a new project in VS Code from the folder you're currently in.</div>

                <div className="tut-body"><b>5. Check your work.</b> The VS Code application should be opened now. In VS Code, look at the Explorer pane on the left of the application. At the upper left corner, you should see the text 'EXPLORER' with your folder's name underneath it. And because VS Code has capitalized all the letters it looks a bit like 'Starship Pram', which coincidentally is the name of a notorious pirating ship full of British babies who pillage and plunder their way through the universe. Savage murderers. Do not attempt contact.</div>

                <div className="tut-body">Now's the time when you can turn to your stoic, technologically-challenged heist partner and say "I'm in."</div>


                <div className="next-prev-btns">
                    <Link to="/tutorial/simplest-pro/02" className="prev-btn">Previous</Link>
                    <Link to="/tutorial/simplest-pro/04" className="next-btn">Next</Link>
                </div>

            </div>
        )
    }
}

export default _02_03_Create_Project;