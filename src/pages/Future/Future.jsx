import React from 'react';
import fu from '../../images/future/future1.png'
import gi from '../../images/future/future2.png'
import li from '../../images/little/littlepic.png'
import gi2 from '../../images/future/image2.png'
import gi3 from '../../images/future/future3.png'



const Future = () => {
    return (
        <section className="future">
            <div className="container">

                <ul className='future__list'>

                    <li className='future__left'>
                        <img className='future__left-img' alt='' src={fu}/>
                        <div className='future__person'>
                            <img src={li} alt='' className='future__person-photo'/>
                            <h1 className='future__person-title'>The future of ETH® </h1>
                            <p className='future__person-text'> 18 in stock</p>
                        </div>
                    </li>


                    <li className='future__middle'>
                        <div className='future__middle-card'>
                            <img src={gi} alt='' className='future__middle-card-img'/>

                            <div className='future__person'>
                                <a className='future__person-img'> </a>
                                <h1 className='future__person-title'>ETH never die </h1>
                                <p className='future__person-text'> 1 of 12</p>
                                <button className='header__btn-2'>Place a bid </button>
                            </div>
                        </div>
                        <br/>
                        <div className='future__middle-card'>
                            <img src={gi2} alt='' className='future__middle-card-img'/>

                            <div className='future__person'>
                                <a className='future__person-img'> </a>
                                <h1 className='future__person-title'>Future coming soon </h1>
                                <p className='future__person-text'> 1 of 12</p>
                                <button className='header__btn-2'>Place a bid </button>
                            </div>
                        </div>
                        <br/>
                        <div className='future__middle-card'>
                            <img src={gi3} alt='' className='future__middle-card-img'/>

                            <div className='future__person'>
                                <a className='future__person-img'> </a>
                                <h1 className='future__person-title'>Elon Musk silver coin <br/>
                                    3d print </h1>
                                <p className='future__person-text'> 1 of 12</p>
                                <button className='header__btn-2'>Place a bid </button>
                            </div>
                        </div>
                    </li>


                    <li className='future__right'>
                        <p className='future__right-title'> Latest upload from creators🔥</p>


                            <div className='future__person-1'>
                                <img src={li} alt='' className='future__person-photo'/>
                                <h1 className='future__person-title'>Payton Haris </h1>
                                <p className='future__person-text'> 2456 ETH </p>
                            </div>

                            <div className='future__person-1'>
                                <img src={li} alt='' className='future__person-photo'/>
                                <h1 className='future__person-title'>Anita Bins </h1>
                                <p className='future__person-text'> 2456 ETH </p>
                            </div>



                        <div className='future__person-1'>
                            <img src={li} alt='' className='future__person-photo'/>
                            <h1 className='future__person-title'>Joana Wuckert </h1>
                            <p className='future__person-text'> 2456 ETH </p>
                        </div>

                        <div className='future__person-1'>
                            <img src={li} alt='' className='future__person-photo'/>
                            <h1 className='future__person-title'>Lorena Ledner </h1>
                            <p className='future__person-text'> 2456 ETH </p>
                        </div>

                        <button className='header__btn-2'>Discover more </button>

                        <div>


                        </div>

                    </li>



                </ul>



            </div>






        </section>
    );
};

export default Future;