import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class _02_07_Index_html extends React.Component {
    render() {
        return (
            <div className="tut-bg">
                <div className="tut-head">01. The Simplest Program</div>

                <div className="tut-subhead">7. Set up index.html (front-end)</div>

                <div className="tut-body">
                    And now we leave the stinky boiler rooms and go above ground to the top of our ship, where wide corridors are lined with sparkling gray tiles and grand, arched windows look out to the glittering stars of the universe. This is the part of the ship that all of our passengers see. Our front-end employees are the freshly-polished folks standing at information booths, giving tours of the vibrant Martian Plant atrium or the new Blaster Wing at the Museum of the Modern Alien. They're also the folks that will give you a big, cherry-lipped grin then go to the break room and gossip about your steel-plated boots which were <i>so</i> last sun-cycle.
                </div>

                <div className="tut-body">
                    We start with the most basic of our front-end team, "index.html". She's as old as time itself. And it shows. She hasn't updated her uniform since our first go around the sun (and unfortunately at the time, we only had the budget for sheets with arm holes.) Her voice is so monotone it could put an insomniac to sleep. She doesn't know how to work a Norgon pistol or active the ship's warp-drive saunas, but somehow she's the glue that holds this entire ship together and we couldn't do it without her.
                </div>

                <div className="tut-body">
                    This index.html file will be written in, surprise, HTML. HTML is a very simple language used for web programming. We will be specifying what text we want to display on the screen- unformatted, unstyled. In the future we'll want a website that does more than just display plain text, but for setting up a simple server attached to a client, an HTML page is good enough.
                </div>

                <div className="tut-body">Index.html likes to keep things organized and simple. She likes to know when something is starting and when it is ending. For that reason, we write HTML using <b>elements</b>. Elements are used to label different aspects of our code. There are elements to specify font sizes, links, page breaks, and more. But for now, we'll keep it very simple. And since I'm literally falling asleep counting HTML elements jumping over a fence, let's start on the steps.</div>

                <div className="tut-body">
                    <b>1. Create a new file called "index.html"</b> in your project folder in VS Code. As a reminder, you can do this by right-clicking on the Explorer pane on the left-hand side of VS Code, then selecting "New File".
                </div>

                <div className="tut-body">
                    <b>2. Set up your opening elements.</b> Remember the elements I mentioned earlier? Let's write some. We'll start by specifying that the following is an HTML document and it will be written in English. Add this code to the top of your file.
                </div>

                <div className="tut-code">
                    {"<!DOCTYPE html>"}
                    <br></br>
                    <br></br>
                    <div className="tut-code-comment">// opening our "html" element</div>
                    {'<html lang="en">'}
                    <br></br>
                    <br></br>
                    <div className="tut-code-comment">// closing our "html" element</div>
                    {'</html>'}
                </div>

                <div className="tut-body">For most of our elements, we will need an <b>opening tag</b> and a <b>closing tag</b> As you can see from the code above, tags are stored between the left carrot ({"<"}) and the right carrot ({">"}) and a closing tag is designated using a backslash (/). So {'<html lang="en">'} is an opening tag, {'</html>'} is its corresponding closing tag, and the contents go between the opening and closing tag. Opening tag, contents, and closing tag together make an <b>element</b>.</div>

                <div className="tut-hint">If you're interested in learning more about HTML elements, you little psycho, check out "HTML Elements Reference Guide" in the "References" section at the end of this document for an extensive list of elements and their purposes.</div>

                <div className="tut-body"><b>3. Set up the head element.</b>The head of an HTML file will store the page's <b>meta-data</b>, or the things we don't want visible on the screen but we still want to be a part of the site's available information. Here we'll specify the type of HTML characters our text will be written in (UTF-8 is standard around these parts for representing English characters) and the title of our page (which will be displayed in the browser tab.) Add this code <b>after</b> your opening html tag but <b>before</b> your closing html tag because we want this to be part of the HTML element's contents.</div>

                <div className="tut-code">
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
                </div>

                <div className="tut-body"><b>4. Set up the body element.</b> As an incorporeal being, this is a very sensitive subject so bear with me. Bodies are meant to be seen! Here, our body element will hold all the things we want to visible on the screen. (Stupid shallow, narcissitic body-havers...) We will use header tags to write text that we want to appear on our site. Header tags come with built-in font sizes and weights depending on which one you use. The text within the header tags will be displayed with its designated font size and weight. Add this code after our whole head element but before the closing html tag (so again, the body element can be within the html element.)</div>

                <div className="tut-code">
                    <div className="tut-code-comment">// body will display the things we want visible on the screen</div>
                    {"<body>"}
                    <br></br>
                    <div className="tut-code-comment">{"\t"}// use header tags ({"<h1>, <h2>, <h3>, etc"}) to display text; the numbers denote text size with {"<h1>"} as the biggest</div>
                    {"\t"}{"<h1>Welcome to the Starship RAM!</h1>"}
                    <br></br>
                    {"</body>"}
                </div>

                <div className="tut-body">
                    Now we're cooking with fire! Seriously. One of the consoles just caught on fire. Put it out! Put it out! Quick, before any Aquanaticans catch a whiff of the smoke and dissolve into puddles like it's the Starship RAM Company BBQ all over again!
                </div>

                <div className="tut-summary-head">In summary...</div>
                <div className="tut-summary-body">
                    Our index.html is the frontline of the front-end and will display the text "Welcome to the Starship RAM!" on the screen when we navigate to our site.
                </div>

                <div className="tut-hint">Go to the next page to see the index.html client code in full.</div>

                <div className="next-prev-btns">
                    <Link to="/tutorial/simplest-pro/06C" className="prev-btn">Previous</Link>
                    <Link to="/tutorial/simplest-pro/07C" className="next-btn">Next</Link>
                </div>
            </div>
        )
    }
}

export default _02_07_Index_html;



