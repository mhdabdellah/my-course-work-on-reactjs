import style from "./button.module.css"

function AppButton(){

    const inlineStyle = {
        
        backgroundColor: "hsl(200,100%,50%)",
        color:"white",
        padding: "10px 20px",
        borderRadius: "5px",
        border:"none",
        cursor: "pointer",
        
    }

    return (
        <>
            {/* External style that defined in the index.css ==> the .button style is defined in the index.css */}
            <button className="button">
                Click me using External Style
            </button>


            {/* modular style */}
            <button className={style.button}>
                Click me using modular Style
            </button>

            {/* inline Styles */}

            <button style={inlineStyle}>
                Click me Button using inline Style Method
            </button>
        </>
    );
}

export default AppButton