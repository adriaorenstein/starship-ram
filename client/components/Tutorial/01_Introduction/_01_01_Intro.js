import React from 'react';
import { Link, Outlet } from 'react-router-dom';

class _01_01_Intro extends React.Component {
    render() {
        return (
            <div className="tut-bg">
                <div className="tut-head-main">Welcome aboard the luxurious spaceliner, the Starship RAM.</div>

                <div className="tut-body">Our one-of-a-kind, award-winning vessel allows guests to travel the cosmos in style. We offer a whole host of breath-taking accomodations (for species who draw breath), once-in-a-lifeforce excursions, and world-class dining options. And, before you ask, no, we are not legally obligated to specify which world!</div>

                <div className="tut-body">The only problem is that the ship isn't quite... how do I put this... built yet...?</div>

                <div className="tut-body">But don't worry! Time is a manmade construct so if we build it now it's also kind of like we built it 30 minutes ago before we started welcoming all of our well-paying customers aboard.</div>

                <div className="tut-body">As it turns out, scientists have recently concluded that building a spaceship is exactly akin to building a website. And lucky for us, I already know all there is to know about website building! In fact, I could just whip up this website all by myself but, alas, I am an incorporeal cosmic being and do not have hands.</div>

                <div className="tut-body">That's where you come in, new recruit. We heard you were the best in the website building business, and by that I mean you have little to no website building experience but you were the only applicant who checked "yes" on the "Are you willing to take full responsibility for any lawsuits the Starship RAM may incur?" box.</div>

                {/* <div className="tut-body tut-body-highlight">With the help of some good friends and coworkers, I'll walk you through getting a website up and running from scratch. We'll create a backend server and a frontend client in the coding language of Javascript. We'll use Express for routing and PostgreSQL for our database. React and Redux will step in to assist with our frontend components. And when it's all typed and debugged, we'll make it look all pretty with CSS! Don't know what any of those words mean? That's okay! I'll explain as we go along.</div> */}

                <div className="section-list">
                    <div className="section-head">With the help of some good friends and coworkers, I'll walk you through getting a website up and running from scratch. We'll...</div>
                    <ul>
                        <li className="section-item">Create a backend server and a frontend client in the coding language of Javascript</li>
                        <li className="section-item">Set up routes to deliver our pages using Express</li>
                        <li className="section-item">Use PostgreSQL and Sequelize to create a database</li>
                        <li className="section-item">Organize our pages into components and manage our website's state with React and Redux</li>
                        <li className="section-item">Make it all pretty with CSS</li>
                    </ul>
                </div>

                <div className="tut-body">Don't know what any of those words mean? That's okay! I'll explain as we go along. Let's just get things up and running before people start walking off the unfinished pool deck into the infinite depths of space. That would be a lot of paperwork!</div>

                <div className="next-prev-btns">
                    <Link to="/tutorial/simplest-pro" className="next-btn">Next</Link>
                </div>

            </div>
        )
    }
}

export default _01_01_Intro;