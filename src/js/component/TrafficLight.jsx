import React from "react";
import { useState } from "react";

const TrafficLight = () => {
    const [light, setLight] = useState(['red', 'yellow', 'green'])
    const [selectedColor, setSelectedColor] = useState('red')
    return (
        <div className="container">
            <div className='support-trafic-light'></div>
            <div className="trafic-light">
                {light.map((color) => <div onClick={() => setSelectedColor(color)}
                    className={color + " light " + (selectedColor === color ? 'glow' : '')}>
                </div>)}
            </div >
        </div >
    )
}

export default TrafficLight;