import React, { useRef, useState } from 'react';
import Phone from "../../Images/phone.png";
import Email from "../../Images/email.png";
import Address from "../../Images/address.png";
import facebook from "../../Images/facebook.png";
import emailjs from "emailjs-com";
import './Contact.css'

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {

        emailjs
            .sendForm(
                "service_qsgk2yj",
                "template_dw1d88t",
                formRef.current,
                "user_YZxgAnvWPSP3RQWRtOSwT"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setDone(true)


                },
                (error) => {
                    console.log(error.text);
                }
            );
        e.preventDefault();
    };
    return (
        <div className="c">
            <h2><u><b>Contact Me</b></u></h2>
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h5 className="c-title">Let's discuss your project</h5>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img src={Phone} alt="" className="c-icon" />
                            01627324362
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Email} alt="" />
                            Sajibs056@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img className="c-icon" src={Address} alt="" />
                            Nitaiganj,Narayanganj,Bangladesh
                        </div>
                        <div className="c-info-item">
                            <a href="https://www.facebook.com/sajib.shaha.5209/" target="_blank"> <img className="c-icon" src={facebook} alt=" " /></a>
                            https://www.facebook.com/sajib.shaha.5209/
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <h4 className="c-desc">
                        <b>What’s your story?</b> Get in touch.
                    </h4>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type="text" placeholder="Name" name="user_name" />
                        <input type="text" placeholder="Subject" name="user_subject" />
                        <input type="text" placeholder="Email" name="user_email" />
                        <textarea rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                        {done && "Thank you..."}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;