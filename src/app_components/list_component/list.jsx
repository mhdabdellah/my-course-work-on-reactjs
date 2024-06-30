function List(props){
    // const fruitsStringList = ["apple","bananas","orange","coconut","pineaple"]
    // const fruitsMapList = [{id:1, name: "apple", quantity:89},{id:2, name: "bananas", quantity:899},{id:3, name: "orange", quantity:779},{id:4, name: "coconut", quantity:39},{id:5, name: "pineaple", quantity:1977}]

    // fruitsStringList.sort((a,b)=> a.localeCompare(b))// alphabetical
    // const listItemsString = fruitsStringList.map((fruit) => <li> {fruit} </li>)

    // fruitsMapList.sort((a,b)=> b.name.localeCompare(a.name))// reverse alphabetical
    // const listItemsMap = fruitsMapList.map((fruit) => <li key={fruit.id}>{fruit.name} : {fruit.quantity} </li>)
    // const highQuantity = fruitsMapList.filter((fruit) => fruit.quantity>100)
    // const highlistItemsMap = highQuantity.map((fruit) => <li key={fruit.id}>{fruit.name} : {fruit.quantity} </li>)
    // const lowQuantity = fruitsMapList.filter((fruit) => fruit.quantity<100)
    // const lowlistItemsMap = lowQuantity.map((fruit) => <li key={fruit.id}>{fruit.name} : {fruit.quantity} </li>)
    // return (
    //     <>
    //         <div>
    //             <h2> Fruits </h2>
    //             <ul>
    //                 {listItemsString}
    //             </ul>
    //         </div>
    //         <div>
    //             <h2> Fruits </h2>
    //             <ol>
    //                 {listItemsMap}
    //             </ol>
    //         </div>
    //         <div>
    //             <h2> Fruits grater then 100</h2>
    //             <ol>
    //                 {highlistItemsMap}
    //             </ol>
    //         </div>
    //         <div>
    //             <h2> Fruits less then 100</h2>
    //             <ol>
    //                 {lowlistItemsMap}
    //             </ol>
    //         </div>
    //     </>
    // );

    const fruits = props.fruits.map((fruit) => <li key={fruit.id}>{fruit.name} : {fruit.quantity} </li>)

    return (
        <>
            <div>
                <h2> Fruits </h2>
                <ul>
                    {fruits}
                </ul>
            </div>
        </>
    )

    
}

export default List