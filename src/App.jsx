
// import Header from "./header"
// import Footer from "./footer"
// import Food from "./food"
// import Card from "./app_components/card_component/card"
// import AppButton from "./app_components/button_component/button"
import Student from "./app_components/student_component/student"

function App() {
  return(
    // <>
    //   <Header/>
    //   <Food/>
    //   <Card/>
    //   <Footer/>
    // </>
    // <>
    //   <AppButton/>
    // </>
    <>
      <Student name="Mohamed Abdellahi Sidi Mohamed Blal" age={25} isStudent={true} />
      <Student name="Mohamed Sidi Mohamed Blal" age={20} isStudent={false} />
      <Student name="Mohamed Sidi Mohamed Blal" age={20} isStudent={true} />
      <Student />
    </>


  )
}

export default App
