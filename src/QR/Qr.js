import React, { Component,useState } from 'react';
import 'qrcode.react';
var QRCode = require('qrcode.react');

var name="";
var snap="";
var num="";
var inst="";
var face="";
var other="";
var all="";

const Qr=() => {
    
   
        const[data,setData]= useState("My name is:[ Soufiane ],My snap:[ soufiane5017 ], Facebook:[ https://www.facebook.com/soufiane.dmj ],  Enjoy using this website ")
        function getData(val)
        {
            all="My name is:[ "+name+" ], Number:[ "+num+" ], snap:[ "+snap+" ], insta:[ "+inst+" ], Facebook:[ "+face+" ], Other:[ "+other+" ]";
            setData(all)
        }
        function getName(val)
        {
            name= val.target.value;
            getData();

        }
        function getNumber(val)
        {
            num= val.target.value;
            getData();
        }
        function getSnap(val)
        {
            snap= val.target.value;
            getData();
        }
        function getInsta(val)
        {
            inst= val.target.value;
            getData();
        }
        function getFace(val)
        {
            face= val.target.value;
            getData();
        }
        function getOther(val)
        {
            other= val.target.value;
            getData();
        }

        
        return (
           
            <div className="tc center pa3 ma4">
               <p>You can fill in whatever you want</p>
               <input 
                style={{width: '100%'}}
                className="f6 mv1 f5-l  bg-light-gray pa2 lh-solid  br2-ns br-ns" 
                Placeholder="write your name and lastname.."
                type="text" 
                name="search"  
                id="search" 
                onChange={getName}
                />

                <input 
                style={{width: '100%'}}
                className="f6 mv1 f5-l  bg-light-gray pa2 lh-solid  br2-ns br-ns" 
                Placeholder="write your Number.."
                type="text" 
                name="search"  
                id="search" 
                onChange={getNumber}
                />
                
                <input 
                style={{width: '100%'}}
                className="f6 mv1 f5-l  bg-light-gray pa2 lh-solid  br2-ns br-ns" 
                Placeholder="write snap username.."
                type="text" 
                name="search"  
                id="search" 
                onChange={getSnap}
                />
                
                <input 
                style={{width: '100%'}}
                className="f6 mv1 f5-l  bg-light-gray pa2 lh-solid  br2-ns br-ns" 
                Placeholder="write insta username.."
                type="text" 
                name="search"  
                id="search" 
                onChange={getInsta}
                />
                
                <input 
                style={{width: '100%'}}
                className="f6 mv1 f5-l  bg-light-gray pa2 lh-solid  br2-ns br-ns" 
                Placeholder="write facebook username.."
                type="text" 
                name="search"  
                id="search" 
                onChange={getFace}
                />

                <input 
                style={{width: '100%'}}
                className="f6 mv1 f5-l  bg-light-gray pa2 lh-solid  br2-ns br-ns" 
                Placeholder="write other things.."
                type="text" 
                name="search"  
                id="search" 
                onChange={getOther}
                />

                
                <div id="qrcode" />
                <QRCode id="myCanvas" value={data} 
                size={240}
                />
                

            </div>
            
        );
    
}

export default Qr;
