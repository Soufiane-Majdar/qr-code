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
                        <article className="day-forecast">
                          <h2>How to use</h2>
                          <p>To scan this code, you can use a QR code reading application on your phone..</p>
                        </article>

                </div>


              <footer className="pv4 ph3 ph5-m ph6-l mid-gray">
                <small className="f6 db tc">© 2021 -
                  Owner of the Idea <b className="ttu"><a href="https://instagram.com/salah_eddine_badir?igshid=t9l3a3vacj6p" title="insta" className="f6 dib ph2 link black dim">Salah</a>
                  </b>, Made by <b className="ttu"><a href="https://github.com/Soufiane-Majdar" title="github" className="f6 dib ph2 link black dim">Soufiane</a></b> </small>
                <div className="tc mt3">
                  <p title="Email" className="f6 dib ph2 link mid-gray dim">majdar.soufiane@gmail.com</p>
                </div>
              </footer>



                
      </div>
    );
  }
}

export default App;
