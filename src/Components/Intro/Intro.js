import React from 'react';
import Me from "../../Images/About-1.png"
import './Intro.css'

const Intro = () => {
    return (
        <div className="i">
            <div className="i-left">
                <div className="i-left-wrapper">

                    <h2 className="i-intro">Hello, My name is</h2>
                    <h1 className="i-name">Sajib Shaha</h1>

                    <div className="i-title">
                        <div className="i-title-wrapper">
                            <div className="i-title-item">Web Developer</div>
                            <div className="i-title-item">Junior React Developer</div>
                            <div className="i-title-item">Junior Accountant</div>
                        </div>
                    </div>
                    <button className="i-btn"><a className="i-hre" href="https://drive.google.com/file/d/1x80KHu4mWcqEW899dGGoKk4WKkYclMDe/view?usp=sharing" target='_blank'>
                        Download Resume
                    </a></button>
                </div>

            </div>
            <div className="i-right">
                <div className="i-bg"></div>
                <img src={Me} alt="" className="i-img" />
            </div>
        </div>
    );
};

export default Intro;