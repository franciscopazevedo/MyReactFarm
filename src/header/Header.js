import React, { useState } from 'react';
import {Finder} from './Finder';
import Contacts from './Contacts';
import './Header.css';

export function Header(){

    const headerColors = {
        green: 'green',
        myBlue: '#25358b',
        myTestGrey : 'rgb(32, 29, 29)'
    }

    const [color, setColor] = useState(headerColors.myBlue); 
    const [changSetColor, setChangSetColor] = useState(headerColors.green);
    const [buttonColorName, setButtonColorName] = useState('Verde')
    
    function ChangeColor(){
        
         if(color === headerColors.myBlue){
            setColor(changSetColor);
            setChangSetColor(color);
            setButtonColorName('Azul');

         }else{
            setColor(changSetColor);
            setChangSetColor(color);
            setButtonColorName('Verde');            
         }
    }

       return(
        <div className= 'header'style={{backgroundColor:color}} >
        <Contacts />
        <Finder />
        <button onClick= {ChangeColor} >
            {buttonColorName}
        </button>
        </div>
    );
}


