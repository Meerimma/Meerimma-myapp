import React from 'react';
import {CustomContext} from "../../utils/context";
import Begin from "../Begin/Begin";
import Network from "../Network/Network";
import Future from "../Future/Future";
import Sellers from "../Sellers/Sellers";
import Hotbid from "../Hotbid/Hotbid";
import HotCollections from "../HotCollections/HotCollections";
import Discover from "../Discover/Discover";
import FreeCrypto from "../FreeCrypto/FreeCrypto";

const Home = () => {
    return (
        <main>
            <Begin/>
            <Network/>
            <Future/>
            <Sellers/>
            <Hotbid/>
            <HotCollections/>
            <Discover/>
            <FreeCrypto/>

        </main>
    );
};

export default Home;