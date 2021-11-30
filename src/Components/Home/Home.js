import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div>
            <Intro></Intro>
            <About></About>
            <Projects></Projects>
            <Contact></Contact>


        </div>
    );
};

export default Home;