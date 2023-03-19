import React from 'react';
import im from "../../images/upload/upload.png";
import im2 from "../../images/upload/img2.png";

const About = () => {
    return (
        <div className='container1234'>
            <div className='upload'>
                <div className='upload__header'>
                    <a href='/' className='upload__header-up'>
                        <button className='upload__header-btn'> Back to home</button>
                    </a>
                    <p className='upload__header-text1'> Home </p>
                    <p className='upload__header-text'> Upload Item </p>
                </div>


                <div className='upload__header-down'>

                    <h1 className='upload__title'> Upload item </h1>

                    <p className='upload__text'> Choose “Single” if you want your collectible to be one of a kind or “Multiple” if you want to sell one
                        <br/>
                        collectible multiple times</p>

                    <div className='upload__pictures'>
                        <div className='upload__picture'>
                            <img  className='upload__photo' src={im} alt=''/>
                            <button className='upload__header-btn'> Create single</button>
                        </div>

                        <div className='upload__picture'>
                            <img  className='upload__photo' src={im2} alt=''/>
                            <button className='upload__header-btn2'> Create Multiple</button>
                        </div>
                    </div>

                    <p className='upload__text2'> We do not own your private keys and cannot access your funds without your confirmation.</p>

                </div>




            </div>




        </div>
    );
};

export default About;