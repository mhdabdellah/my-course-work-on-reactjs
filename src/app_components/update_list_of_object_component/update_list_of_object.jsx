import React , {useState} from "react";

function ListObjects(){
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");

    function handleAddCar(){
        const newCar = {
            year: carYear, make: carMake, model:carModel
        };
        setCars(cars => [...cars, newCar]);
        setCarYear("")
        setCarMake("")
        setCarModel("")
    }
    function handleRemoveCar(index){
        setCars(cars.filter((_, i) => i !== index));
    }

    function onYearChanged(event){
        setCarYear(event.target.value)
    }
    function onMakeChanged(event){
        setCarMake(event.target.value)
    }
    function onModelChanged(event){
        setCarModel(event.target.value)
    }

    return (
        <div>
            <h2>List of Car Objects</h2>
            <ol>
                { cars.map((car, index) => <li key={index} onClick={() => handleRemoveCar(index)}> {car.year} {car.make} {car.model} </li>) }
            </ol>
            <hr/>
            <input value={carYear} onChange={onYearChanged} type="number" placeholder="Enter Year"/>
            <input value={carMake} onChange={onMakeChanged} type="text" placeholder="Enter Make"/>
            <input value={carModel} onChange={onModelChanged} type="text" placeholder="Enter Model"/>
            <button onClick={handleAddCar}> Add Car</button>
        </div>
    );
}

export default ListObjects