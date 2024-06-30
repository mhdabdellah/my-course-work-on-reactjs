import style from "./user_greeting.module.css"
import PropTypes from "prop-types"

function UserGreeting(props){
    // methode 1
    // if(props.isLoggedIn){
    //     return <h2> Welcome {props.userName}</h2>
    // }
    // return <h2> Please log in to continue </h2>

    // method 2
    const welcomeMessage = <h2 className={style.welcome_message}> Welcome {props.userName}</h2>;
    const loginPrompt = <h2 className={style.login_prompt}> Please log in to continue </h2>;
    return (
        props.isLoggedIn ? welcomeMessage : loginPrompt  
    )

}

UserGreeting.prototypes = {
    isLoggedIn:PropTypes.bool,
    userName:PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn:false,
    userName:"Guest",
}

export default UserGreeting