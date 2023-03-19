import React from 'react';
import bg from '../../images/network/network-left.png'
import bn from '../../images/network/network-right.png'

const Network = () => {
    return (
        <section className="network">
            <div className='container'>
                <div className="network__nav">

                    <div className='network__left'>
                        <img src={bg} alt="bg" className="network__left-img"/>
                    </div>


                    <div className='network__right'>
                        <h1 className='network__title'> the creator network </h1>

                        <div className='network__right-login'>
                            <div> </div>
                            <div> </div>
                        </div>

                        <img src={bn} alt="bn" className="network__right-img"/>

                        <button className='network__btn-1'> Place a bid</button>
                        <br/>
                        <br/>
                        <button className='network__btn-2'> View item </button>

                        <a> </a>

                    </div>

                </div>



            </div>


        </section>
    );
};

export default Network;