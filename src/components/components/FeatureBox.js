import React from 'react';
import Reveal from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;

const featurebox= () => (
 <div className='row'>
            <div className="col-lg-5 col-md-6 mb-3">
                <div className="feature-box f-boxed style-3">
                  <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                    <i className="bg-color-2 i-boxed icon_wallet"></i>
                  </Reveal>
                    <div className="text">
                      <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                        <h4 className="">Connect your wallet</h4>
                      </Reveal>
                      <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                        <p className="">Connect your cryptocurrency wallet in the upper right corner. Remember to sign into your wallet before clicking on the Connect Wallet button and make sure it is on the BSC Network.</p>
                      </Reveal>
                    </div>
                    <i className="wm icon_wallet"></i>
                </div>
            </div>



          <div className="col-lg-5 col-md-6 mb-3">
              <div className="feature-box f-boxed style-3">
                <Reveal className='onStep' keyframes={fadeInUp} delay={0} duration={600} triggerOnce>
                  <i className=" bg-color-2 i-boxed icon_tags_alt"></i>
                </Reveal>
                  <div className="text">
                    <Reveal className='onStep' keyframes={fadeInUp} delay={100} duration={600} triggerOnce>
                      <h4 className="">Sell your NFT's</h4>
                    </Reveal>
                    <Reveal className='onStep' keyframes={fadeInUp} delay={200} duration={600} triggerOnce>
                      <p className="">Ready to turn your NFTs into cash? Our platform makes it easy to list and sell your NFTs to a wide audience of potential buyers, giving you the opportunity to profit from your digital art.</p>
                    </Reveal>
                  </div>
                  <i className="wm icon_tags_alt"></i>
              </div>
          </div>
        </div>
);
export default featurebox;