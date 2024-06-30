import React, {useState} from "react"

function Counter(){

    const [name, setName] = useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Mohamed Abdellahi Sidi Mohamed Blal");
    }

    // without updater function
    // const incrementAge = () => {
    //     setAge(age + 1);
    // }
    // const resetAge = () => {
    //     setAge(0);
    // }
    // const decrementAge = () => {
    //     setAge(age - 1);
    // }

    // with updater function
    // const incrementAge = () => {
    //     setAge(a => a + 1);
    //     setAge(a => a + 1);
    //     setAge(a => a + 1);
    // }


    // const decrementAge = () => {
    //     setAge(a => a - 1);
    //     setAge(a => a - 1);
    //     setAge(a => a - 1);
    // }

    const incrementAge = () => {
        setAge(age => age + 1);
        setAge(age => age + 1);
        setAge(age => age + 1);
    }
    const resetAge = () => {
        setAge(0);
    }
    const decrementAge = () => {
        setAge(age => age - 1);
        setAge(age => age - 1);
        setAge(age => age - 1);
    }

    const toggleIsEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <div>
            <p>
                Name: {name}
            </p>
            <button onClick={updateName}>
                Set Name
            </button>
            <p>
                Age: {age}
            </p>
            <p>
                <button onClick={decrementAge}>
                    Decrement Age
                </button>
                <button onClick={resetAge}>
                    Reset Age
                </button>
                <button onClick={incrementAge}>
                    Increment Age
                </button>
            </p>
            <p>
                Is Employed: {isEmployed ? "Yes" : "No" }
            </p>
            <button onClick={toggleIsEmployedStatus}>
                Toggle Status
            </button>
        </div>
    )

}

export default Counter