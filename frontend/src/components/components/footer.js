import React from 'react';
import { Link } from '@reach/router';

const footer= () => (
  <footer className="footer-light">
            <div className="subfooter">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="de-flex">
                                <div className="de-flex-col">
                                    <span onClick={()=> window.open("", "_self")}>
                                        <img alt="" className="f-logo d-1" src="./img/snazzy.png" />
                                        <img alt="" className="f-logo d-3" src="./img/snazzy.png" />
                                        <img alt="" className="f-logo d-4" src="./img/snazzy.png" />
                                        <span className="copy">&copy; Copyright 2023 - SnazzyZoo is a <span onClick={() => {window.location.href = 'https://linkitupdev.com';
}}>linkitup service</span></span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
);
export default footer;