import React, { useState } from 'react';
import { FaHeart } from "react-icons/fa";
import { FaRegSmileBeam } from "react-icons/fa";

export function Card() {
const [heart, setHeart] = useState(false);
const [count, setCount] = useState(0);

    const handleHeart = () => {
        if (!heart) {
            setHeart(true);
            setCount(count => count + 1);
        } else {
            setHeart(false);
            setCount(count => count - 1);
        }
    }


    return (
        <div className='card'>
            <span>Patiktukai: {count}</span>
            <div className='card-header' style={{display:"flex", justifyContent:"center", alignItems:"center", gap:50}}>
                <FaRegSmileBeam />
                <p style={{marginTop:15}}>Like my dog</p>
            </div>
            <img src="https://assets3.thrillist.com/v1/image/3016449/792x758/flatten;scale;webp=auto;jpeg_quality=60.jpg" alt="Dog Photo" style={{width:300}} onDoubleClick={handleHeart}/>
            <div className='card-footer'>
              {heart ? <FaHeart style={{fontSize:30, color: 'red'}} onClick={handleHeart}/> : <FaHeart style={{fontSize:30}} onClick={handleHeart}/>}
            </div>
        </div>
    );
}