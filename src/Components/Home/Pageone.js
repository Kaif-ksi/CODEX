

import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import arrow from '../../Assests/arrow.png';
import './Pageone.css';

export default function Pageone() {
    const typedRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedRef.current,  {
            strings: [
                "MACHINE LEARNING",
                "BACKEND ",
                "FRONTEND",
                "DSA" , 
                "PROGRAMMING LANGUAGES"
            ],
            typeSpeed: 100,
            backSpeed: 50,
            loop: true
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div className="pageone-vertical">
            <div className="one">
                <p className="pagetitle"><b>Welcome to CodeX</b></p>
            </div>
            <div className="titleone">
                <h2 className="title">Learn <span ref={typedRef} className="typed-text"></span></h2>
            </div>
            <div className="paragraph">
                <p className="para">
                    <b>

                    “Study less, learn more — with the best notes,<br />
                    programming lessons, and personalized college support.”
                    </b>
                </p>
                <button className="explore">
                    Explore <img src={arrow} className="arrow" alt="..." />
                </button>
            </div>
        </div>
    );
}

