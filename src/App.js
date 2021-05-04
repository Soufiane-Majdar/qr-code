import React, { Component } from 'react';
import './App.css';
import Qr from  './QR/Qr'
import 'tachyons';

class App extends Component {
  render() {
    return (
      <div >
                <header className="pv3 navy bg-moon-gray ph2 relative bb">
                  <div id="container" className="flex justify-between items-center">
                      <div id="logo" className=" center pa1 overflow-hidden">
                      <a href="#"  className="link tshadow-2 color-inherit f2 mw4">&nbsp;&nbsp;&nbsp;&nbsp;Get QR Code</a>
                      </div>
                  </div>
                </header>
                <br/>

                <div className="shadow-1 w-90 bg-near-white  transform-self pa3 center mv3 ">
                    <br/>
                   <h3 className="underline tc navy">fill out the following form</h3>
                    
                    <Qr />
                   
                </div>

                
      </div>
    );
  }
}

export default App;
