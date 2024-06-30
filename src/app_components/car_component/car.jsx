import React, {useState} from "react";

function Car(){
    
    const [car, setCar] = useState({year:2024, make:"Toyota", model:"Colrolla"});

    function onYearChanged(event){
        setCar({...car, year:event.target.value})
    }
    function onMakeChanged(event){
        setCar({...car, make:event.target.value})
    }
    function onModelChanged(event){
        setCar({...car, model:event.target.value})
    }

    return(
        <div>
            <p> Your favorite car is: {car.year} {car.make} {car.model} </p>
            <hr/>
            <input value={car.year} onChange={onYearChanged} type="number" placeholder="Enter Year"/>
            <input value={car.make} onChange={onMakeChanged} type="text" placeholder="Enter Make"/>
            <input value={car.model} onChange={onModelChanged} type="text" placeholder="Enter Model"/>
        </div>
    );
}

export default Car