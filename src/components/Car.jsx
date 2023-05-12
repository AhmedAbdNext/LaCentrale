import React from 'react'
import Header from "./Header";
import Feature from "./Feature";


const Car = ({currentCar}) => { 
    return(
        <div>
            <Header currentCarId={currentCar.id}/>
            <Feature currentCar={currentCar}/>
        </div>
    )
 }

export default Car;