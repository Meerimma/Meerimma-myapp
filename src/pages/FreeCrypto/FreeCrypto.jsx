import React from 'react';
import cu from "../../images/freecrypto/Cubes.png";


const FreeCrypto = () => {
    return (
        <selection className='freecrypto'>
            <div className='free'>

                <div className="container">
                    <div className='free__sides'>

                        <div className='free__leftside'>
                            <h3 className='free__leftside-subtitle'>SAVE YOUR TIME WITH STACKS</h3>
                            <h1 className='free__leftside-title'> Earn free crypto
                                <br/>
                                with Crypter </h1>
                            <h3 className='free__leftside-subtitle2'> A creative agency that lead and inspire</h3>

                            <button className='free__leftside__btn-1'>Earn now</button>
                            <button className='free__leftside__btn-2'> Discover more </button>

                        </div>

                        <div className='free__rightside'>
                            <img src={cu} alt=''/>

                        </div>
                    </div>
                </div>



            </div>

        </selection>
    );
};

export default FreeCrypto;