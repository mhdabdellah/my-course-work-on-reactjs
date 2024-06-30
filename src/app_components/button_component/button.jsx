import style from "./button.module.css"

function AppButton(){

    const inlineStyle = {
        
        backgroundColor: "hsl(200,100%,50%)",
        color:"white",
        padding: "10px 20px",
        margin: "20px",
        borderRadius: "5px",
        border:"none",
        cursor: "pointer",
        
    }

    // const handleClick1 = () => alert("Using External Style")
    // const handleClick2 = () => alert("Using Modular Style")
    // const handleClick3 = () => alert("Using Inline Style Method")

    // let countExternal = 0;
    // let countModular = 0;
    // let countInline = 0;
    // const handleClick = (name) => {
    //     switch(name){
    //         case "External" : countExternal ++ ; alert(`You clicked on a Button that styled Using ${name} ${countExternal} time/s`);break;
    //         case "Modular" : countModular ++ ; alert(`You clicked on a Button that styled Using ${name} ${countModular} time/s`);break;
    //         case "Inline" : countInline ++ ; alert(`You clicked on a Button that styled Using ${name} ${countInline} time/s`);break;
    //     }
    //     // if(count < 3){
    //     //     count ++;
    //     //     alert(`You clicked on a Button that styled Using ${name} ${count} time/s`)
    //     // } 
    // }
    let clickedExternal = false;
    let clickedModular = false;
    let clickedInline = false;
    const handleClickExternal = (e) => {
        if(clickedExternal){
            e.target.textContent = "Click me";
            clickedExternal = false;
        }else{
            e.target.textContent = "Using External Style";
            clickedExternal = true;
        }
       
    }
    const handleClickModular = (e) => {
        if(clickedModular){
            e.target.textContent = "Click me";
            clickedModular = false;
        }else{
            e.target.textContent = "Using Modular Style";
            clickedModular = true;
        }
       
    }
    const handleClickInline = (e) => {
        if(clickedInline){
            e.target.textContent = "Click me";
            clickedInline = false;
        }else{
            e.target.textContent = "Using Inline Style";
            clickedInline = true;
        }
        
    }

    return (
        <>
            {/* External style that defined in the index.css ==> the .button style is defined in the index.css */}
            {/* <button onClick={handleClick1} className="button"> */}
            {/* <button onClick={() => handleClick("External")} className="button">
                Click me
            </button> */}
            <button onClick={(e) => handleClickExternal(e)} className="button">
                Click me
            </button>


            {/* modular style */}
            {/* <button onClick={handleClick2} className={style.button}> */}
            {/* <button onClick={() => handleClick("Modular")} className={style.button}>
                Click me 
            </button> */}
            <button onClick={(e) => handleClickModular(e)} className={style.button}>
                Click me 
            </button>

            {/* inline Styles */}

            {/* <button onClick={handleClick3} style={inlineStyle}> */}
            {/* <button onClick={() => handleClick("Inline")} style={inlineStyle}>
                Click me 
            </button> */}
            <button onClick={(e) => handleClickInline(e)} style={inlineStyle}>
                Click me 
            </button>
        </>
    );
}

export default AppButton