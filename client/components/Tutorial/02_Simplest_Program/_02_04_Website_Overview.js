import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class _02_04_Website_Overview extends React.Component {
    render() {
        return (
            <div className="tut-bg">
                <div className="tut-head">01. The Simplest Program</div>

                <div className="tut-subhead">4. A Brief Overview of our Website</div>

                <div className="tut-body">There are a few key parts of our website that we should understand before we start implementing them.</div>

                <div className="tut-body">So what will our progam need?</div>

                <div className="tut-def">
                    <div className="tut-def-item">
                        <div className="tut-def-head">I. Server:</div>
                        <div className="tut-def-subhead">The server deals with all the back-end stuff, i.e. talking to the database, finding the appropriate files on the website-maker's computer, etc. </div>
                        <div className="tut-def-body">
                            For our purposes, we'll be calling up our good friends and frameworks <b>Express</b> and <b>Node.js</b> to help create a server environment for us. We <i>could</i> make a server without them, but we're already paying for Express and Node's health insurance so might as well use 'em.
                            <br></br>
                            We'll write code in Jacascript that tells Express and Node what to do by using pre-determined phrases that Express and Node understand. Then they can deal with the nitty gritty underpinnings of making a server. There are plenty of other frameworks besides Express for working with Node and plenty of other server environments besides Node in all kinds of languages, but like I said, the health insurance thing kind of seals the deal. Plus Express has made some vague threats about disconnecting our oxygen routes in the night if we try to fire him, so it's better not to test it.
                        </div>
                    </div>

                    <div className="tut-def-item">
                        <div className="tut-def-head">II. Client:</div>
                        <div className="tut-def-subhead">The client deals with all the pretty pictures and buttons you see on your screen. This is considered the <b>front-end</b> as it is what the website's user sees on the front-end of their computer.</div>
                        <div className="tut-def-body">
                            When a user clicks on a button to, say, load a new page, the client will send the user's desired path to the back-end and wait until the back-end returns the corresponding web page. Then it will display it. The simplest client is just an easy <b>HTML</b> page displayed on a browser, however we'll be using <b>React.js</b> and <b>Redux</b> to make website management cleaner, more interactive, and easier for us to program. These are considered <b>front-end Javascript libraries</b>.
                            <br></br>
                            Like with Express and Node.js, we'll still be writing code in Javascript but we'll use pre-determined phrases to communicate what we want these libraries to do. More on these to come.
                        </div>
                    </div>

                    <div className="tut-def-item">
                        <div className="tut-def-head">III. Middleware:</div>
                        <div className="tut-def-subhead">Middleware is anything that communicates between the front-end client and the back-end server.</div>
                        <div className="tut-def-body">
                            If the client is our state-of-the-art self-cleaning bathroom facilities and the server is our 9th century waste treatment pods, middleware is the space rats in tiny maid costumes that go back and forth between the toilets and the waste treatment pods making sure everything gets where it needs to go. Except all of that is hypothetical because our waste is definitely not managed by tiny, overworked space rats despite what articles in The New York Space Times Continuum might say.
                        </div>
                    </div>

                    <div className="tut-body">So, to summarize, here's a simplified version of the whole front-end, back-end exchange which was actually performed at our Starship RAM Christmas Pageant last year. It's quite short as we were flying around the planet Onglebongle at the time and days are only 3 minutes long there.</div>
                    <div className="tut-body">
                        <b>Front-end (Client):</b> My customer wants to go <i>here.</i> (Maybe here is www.google.com.)
                        <br></br>
                        <b>Middleware:</b> Hi, I am your HR Representative and I will be communicating between the two of you because you guys can't be trusted in a room together! Back-end, front-end wants to go <i>here.</i>
                        <br></br>
                        <b>Back-end (Server):</b> Okay.
                        <br></br>
                        [Back-end looks at its map and finds the location of the room (webpage file) front-end has asked for. This room will contain all of the information for the page front-end has requested.]
                        <br></br>
                        <b>Middleware:</b> Back-end has found your page and is going to teleport you now!
                        <br></br>
                        [Back-end teleports front-end's customer to the room.]
                        <br></br>
                        [Front-end's customer is now in the room www.google.com.]
                        <br></br>
                        <b>Front-end:</b> Yay. This is exactly what I wanted.
                        <br></br>
                        <b>Middleware:</b> Yay. This is exactly what front-end wanted.
                        <br></br>
                        <b>Back-end:</b> Yay. I'm going to murder you in your sleep.
                        <br></br>
                        <b>Middleware:</b> I'm not repeating that one.
                    </div>

                    <div className="tut-body"> It's important to keep communication between <b>front-end</b> and <b>back-end in separate files.</b> (As you can see, there's a bit of a workplace feud going on between them.)</div>
                </div>

                <div className="tut-summary-head">In summary...</div>
                <div className="tut-summary-body">
                    The server (or back-end), the client (or front-end), and middleware are the three major parts of a web program that will work together to run our website.
                </div>

                <div className="next-prev-btns">
                    <Link to="/tutorial/simplest-pro/03" className="prev-btn">Previous</Link>
                    <Link to="/tutorial/simplest-pro/05" className="next-btn">Next</Link>
                </div>

            </div>
        )
    }
}

export default _02_04_Website_Overview;