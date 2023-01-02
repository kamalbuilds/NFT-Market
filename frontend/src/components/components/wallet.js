import React from 'react';
import { Link } from '@reach/router';

const Wallet= () => (
  <div className="row">
    <Link to="https://www.bnbchain.org/en">
        <div className="col-lg-3 mb30">
            <span className="box-url">
                <span className="box-url-label">Most Popular</span>
                <img src="./img/wallet/1.png" alt="" className="mb20"/>
                <h4>BNB</h4>
                <p>Start exploring blockchain applications in seconds.  Trusted by over 1 million users worldwide.</p>
            </span>
        </div>
    </Link>

    <div className="col-lg-3 mb30">
        <Link to="https://www.bnbchain.org/en">
            <span className="box-url">
                <img src="./img/wallet/2.png" alt="" className="mb20"/>
                <h4>DOGE</h4>
                <p>Bitski connects communities, creators and brands through unique, ownable digital content.</p>
            </span>
        </Link>
    </div>       

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <img src="./img/wallet/3.png" alt="" className="mb20"/>
                <h4>ADA</h4>
                <p>Let users access your Ethereum app from anywhere. No more browser extensions.</p>
            </span>
        </Link>
    </div>    

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <img src="./img/wallet/4.png" alt="" className="mb20"/>
                <h4>TRON</h4>
                <p>Open source protocol for connecting decentralised applications to mobile wallets.</p>
            </span>
        </Link>
    </div>

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <img src="./img/wallet/5.png" alt="" className="mb20"/>
                <h4>BTCB</h4>
                <p>The easiest and most secure crypto wallet. ... No Coinbase account required.</p>
            </span>
        </Link>
    </div>

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <img src="./img/wallet/6.png" alt="" className="mb20"/>
                <h4>DOT</h4>
                <p>Make it easy to create blockchain applications with secure wallets solutions.</p>
            </span>
        </Link>
    </div>       

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <img src="./img/wallet/7.png" alt="" className="mb20"/>
                <h4>WBNB</h4>
                <p>Your wallet where you want it. Log into your favorite dapps with Authereum.</p>
            </span>
        </Link>
    </div>    

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <span className="box-url-label">Most Simple</span>
                <img src="./img/wallet/8.png" alt="" className="mb20"/>
                <h4>BAT</h4>
            </span>
        </Link>
    </div>      

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <span className="box-url-label">Most Simple</span>
                <img src="./img/wallet/8.png" alt="" className="mb20"/>
                <h4>SUSHI</h4>    
            </span>
        </Link>
    </div>  

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <span className="box-url-label">Most Simple</span>
                <img src="./img/wallet/8.png" alt="" className="mb20"/>
                <h4>CAKE</h4>
            </span>
        </Link>
    </div>                              
</div>
);
export default Wallet;