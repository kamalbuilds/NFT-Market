import React from 'react';
import { Link } from '@reach/router';

const Wallet= () => (
  <div className="row">
    <Link to="https://www.bnbchain.org/en">
        <div className="col-lg-3 mb30">
            <span className="box-url">
                <span className="box-url-label">Most Popular</span>
                <img src="./img/coins/bnb.png" alt="" className="mb20"/>
                <h4>BNB</h4>
    
            </span>
        </div>
    </Link>

    <div className="col-lg-3 mb30">
        <Link to="https://www.bnbchain.org/en">
            <span className="box-url">
                <img src="./img/coins/doge.png" alt="" className="mb20"/>
                <h4>DOGE</h4>
            </span>
        </Link>
    </div>       

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <img src="./img/coins/ada.png" alt="" className="mb20" height={200} width={200} />
                <h4>ADA</h4>
            </span>
        </Link>
    </div>    

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <img src="./img/coins/tron.png" alt="" className="mb20" height={200} width={200} />
                <h4>TRON</h4>
            </span>
        </Link>
    </div>

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <img src="./img/coins/btc.png" alt="" className="mb20"/>
                <h4>BTCB</h4>
                
            </span>
        </Link>
    </div>

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <img src="./img/coins/dot.png" alt="" className="mb20"/>
                <h4>DOT</h4>
            </span>
        </Link>
    </div>       

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                <img src="./img/coins/bnb.png" alt="" className="mb20"/>
                <h4>WBNB</h4>
        
            </span>
        </Link>
    </div>    

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                
                <img src="./img/coins/bat.png" alt="" className="mb20" height={200} width={200} />
                <h4>BAT</h4>
            </span>
        </Link>
    </div>      

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                
                <img src="./img/coins/sushi.png" alt="" className="mb20"/>
                <h4>SUSHI</h4>    
            </span>
        </Link>
    </div>  

    <div className="col-lg-3 mb30">
        <Link to="" >
            <span className="box-url">
                
                <img src="./img/coins/cakee.png" alt="" className="mb20" height={200} width={200} />
                <h4>CAKE</h4>
            </span>
        </Link>
    </div>                              
</div>
);
export default Wallet;