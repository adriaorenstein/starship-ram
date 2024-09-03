import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class _02_06_Server extends React.Component {
    render() {
        return (
            <div className="tut-bg">
                <div className="tut-head">01. The Simplest Program</div>

                <div className="tut-subhead">6. Set up the Server (back-end)</div>

                <div className="tut-body">
                    Now <b>Express</b> and <b>Node.js</b> are looking like they need some love (although maybe if their parents had shown them some of that love forty moon-cycles ago they wouldn't have become creepy, basement-dwelling, back-end psycopaths.) Remember that the server deals with the unseen underbelly of the program. It will load up the pages for our website when a user requests it and interact with the database to send information to the user's computer. The main frameworks we will be working with to help build our back-end server are Express and Node.js.
                </div>

                <div className="tut-def">
                    <div className="tut-def-item">
                        <div className="tut-def-head">I. Node.js:</div>
                        <div className="tut-def-subhead">Node.js is a runtime environment that allows programmers to write a server in Javascript. This server will then fulfill client requests.</div>
                        <div className="tut-def-body">That could mean retrieving information from a database, storing information to a database, retrieving appropriate files when a route is requested, etc.</div>
                    </div>
                </div>

                <div className="tut-body">Node.js is used to write our server which is arguably one of the most important pieces of the web program puzzle. But he's... a bit hard to reach. And by that I mean he's a big, hulking Gigachad who's been left pruning in the basement too long. There's no sign of life behind his beady little eyes. No facial expressions. No whims or desires to call his own. The dude sleeps standing up with his eyes open, for Blorgon's sake. I mean, don't get me wrong, he's an absolute genius. he's the one who knows his way around the mess of winding, back-end basement hallways and can find anything you want in there. But the genius is buried deep, <i>deep</i> down and sometimes talking to him feels like talking to a Martian rock (that's like an Earth rock, but with a Ph.D.)</div>

                <div className="tut-body">So if Node.js does everything, why do we need Express? Well, we don't really. (Oh Blorgon, is that Express running at me with a laser gun?) I mean, we don't <i>need</i> him, but he's still very, very useful, especially when it comes to back-end routing!</div>

                <div className="tut-def">
                    <div className="tut-def-item">
                        <div className="tut-def-head">II. Express:</div>
                        <div className="tut-def-subhead">Express is a framework that will help us write routes.</div>
                        <div className="tut-def-body">Routes (pronounced <i>Rotes</i> after the great space war of the <i>Rowts</i> vs. the <i>Roots</i> ended in a bloody ceasefire with <i>Rotes</i> declared the only ethical pronounciation under intergalactic law), have to do with connecting paths to web page files. In a simplified sense, if you go to www.routes.com, a server side route will match that requested path with the corresponding web page file that should be delivered. Similarly, if you go to www.routes.com/rowts, the server will match that path to a different corresponding web page file. But then you will also be disintegrated. Under intergalactic law.</div>
                    </div>
                </div>

                <div className="tut-body">Think of Express as a chatty, angry, spitting, barking little alien dude with three tongues, nine mouths, and fifteen vocal cords. He rides in a baby holster strapped to Node.js's broad chest. It's almost cute, except there is still the three tongues, nine mouths, and fifteen vocal cords thing which isn't winning him any Little Miss Universe awards. But Express at least, unlike Node.js, can speak to us in simpler language. Thus, anytime we want to talk to Node.js to, say, open our server or give us information for a page, we're going to talk <i>through</i> Express and he'll pass our messages on to Node.js. Then, Node.js will go find the room we're requesting and teleport us there (i.e. deliver the web page, if you want to be lame about it.)</div>

                <div className="tut-body"><b>1. Let's start by installing Express.</b> In your Terminal, type <span className="tut-code-inline">npm install express</span> to wake our friend Express up from his creepy little hole under the floor tiles in the engine room and put him to work (before he builds another shank out of metal scraps and tentacle goo.)
                    <br></br>
                    You’ll notice when we install Express that a folder and a file are created: node_modules and package-lock.json. Node_modules is a directory that will contain the code for all of our dependencies, or the packages we install. All dependencies will be in this folder, organized into their own directories. Package-lock.json will just keep a more precise definition of which dependencies and versions were used, for accuracy.
                    <br></br>
                    If you open the package.json file, you should now see "express" listed under dependencies. This is how we know it is installed and included in our project.
                </div>

                <div className="tut-body"><b>2. Create a new index.js file.</b> This is where we will store all of our routes and server information for now. You can create a new file by right-clicking on the Explorer pane and selecting "New File".</div>

                <div className="tut-body"><b>3. Add imports/requires.</b> At the top of our file, we'll want to import any packages we'll be referencing in this specific file. For now, we'll want to require Express and Path.</div>

                <div className="tut-def">
                    <div className="tut-def-item">
                        <div className="tut-def-head">Path</div>
                        <div className="tut-def-subhead">Path is a module, or a pre-built feature, of Node.js that 'provides utilities for working with file and directory paths'.</div>
                        <div className="tut-def-body">In simpleton words, Path is a pair of special navigation goggles that we're giving Node.js so that he can easily zip around the rooms and find the one we're requesting more easily.</div>
                    </div>
                </div>

                <div className="tut-body">Add this code to the top of the index.js file to include Express and Path in this file:</div>
                <div className="tut-code">
                    const express = require('express');
                    <br></br>
                    const path = require('path');
                </div>

                <div className="tut-body"><b>4. Create an instance of Express.</b> This is where we push the big, red button and call Express up to clock in on his punch card. Yes, we still use punch cards in the future. But now, they're <i>shiny.</i> We'll give excuse the cute little nickname of 'app' because it's shorter and easier to write multiple times and he's feeling feisty fresh today.
                    <br></br>
                    Add this under the imports in your index.js file:</div>
                <div className="tut-code">
                    const app = express();
                </div>

                <div className="tut-body"><b>5. Set up local port.</b> Now we're going to set up our port. This is like setting up the channel that our website is going to broadcast on. Imagine instead of using a computer, we're using one of those old-fashioned Earth devices... oh what are they called... a television! Back in the old days, when you pressed a number (or channel) on your TV remote, the broadcast associated with that number would pop up and the corresponding show would play. Nobody else could use that channel number besides the network associated with it.
                    <br></br>
                    We'll reserve channel 8080 for us so we know that if we go to port 8080, we'll see our website. Because all of this is being done within our local computer, or <b>localhost</b>, this connection is only accessible within our computer. I'm not going to waste $9.99 a month on a domain name until you've proven yourself.
                    <br></br>
                    Add this line to your index.js file:
                </div>
                <div className="tut-code">
                    const port = process.env.PORT || 8080;
                </div>

                <div className="tut-body"><b>6. Write a route to deliver the main page.</b> Now we're going to write our first <b>route</b>. This is going to accept some path (the "here" of front-end's "My customer wants to go <i>here</i>.") and return the file associated with that address.
                    <br></br>
                    Here's the code to add:</div>
                <div className="tut-code">
                    app.get('/', function(req, res) {"{"}
                    <br></br>
                    {"\t"}res.sendFile(path.join(__dirname, '/index.html'));
                    <br></br>
                    {"}"})
                </div>
                <div className="tut-body"><i>"Um, in English, nerd?"</i>
                    <br></br>
                    So, this code is saying that if a user goes to "/" (which is the equivalent of an empty path, or just the main page), we should send the "index.html" file in response. Instead of "/" you could have something like "/how-to-cosmically-disentangle-yourself" and then if the user goes to "www.<i>whateveryoursiteis</i>.com/how-to-cosmically-disentangle-yourself", it will send the file we dictate in response. We're basically just telling our program which file corresponds to a given pathname. We'll write out 'index.html' file later.
                </div>

                <div className="tut-body"><b>7. Listen for the port.</b> Here's the problem with Express. He's hard of hearing from all the years living next to the boilers. And he also spends so much time grumbling curses and inventing swear words that require nine tongues to utter that sometimes he forgets to <b>listen</b>. So we have to give him very specific directions. We have to tell him to listen for our port number (remember that channel we chose, 8080?) and if he does hear it, do his thing. Otherwise he can take a nap or plot world domination. We don't need to serve up our web page unless someone accesses this specific route.
                    <br></br>
                    Add this code to the bottom of your file to tell Express, using his nickname "app", to listen for our port.
                </div>
                <div className="tut-code">
                    app.listen(port);
                </div>

                <div className="tut-body"><b>8. Log confirmation message.</b> And finally, we'll send a simple message to the terminal when Express has woken up, just to make sure he hasn't gone AWOL. This doesn't <i>do</i> anything besides display a message.</div>
                <div className="tut-code">
                    console.log('Server started at http://localhost:' + port);
                </div>
                <div className="tut-body">"http://localhost:" is the equivalent of <i>www.whateveryoursiteis.com</i> for our local computer.</div>

                <div className="tut-summary-head">In summary...</div>
                <div className="tut-summary-body">
                    So once we build our front-end, when we go to "http://localhost:8080/", Express will be woken up, hear our request for "/", tell Node.js that we want to go to "/", then Node.js will check his map for the corresponding room and teleport the front-end customer to that room.
                </div>

                <div className="tut-hint">Go to the next page to see the index.js server code in full.</div>

                <div className="next-prev-btns">
                    <Link to="/tutorial/simplest-pro/05" className="prev-btn">Previous</Link>
                    <Link to="/tutorial/simplest-pro/06C" className="next-btn">Next</Link>
                </div>
            </div>
        )
    }
}

export default _02_06_Server;



