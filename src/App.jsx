import { useContext, useEffect } from "react";
import "./App.css";
// // import ComponentA from "./ComponentA.jsx";
// import ComponentB from "./ComponentB.jsx";
import "./index.css";
import Routing from "./Router.jsx";
import { DataContext } from "./Components/DtaProvider/DtaProvider.jsx";
import { Type } from "./Utility/ActionType.jsx";
import { auth } from "./Utility/Firebase.js";
// // import { ThemeProvider } from "./ContextProvider.jsx";

function App() {
  const [user, dispatch]
  =useContext(DataContext)
  useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{

    if(authUser){
      // console.log(authUser)
      dispatch({
        type:Type.SET_USER,
        user:authUser
      })
    }else{
      dispatch({
        type: Type.SET_USER,
        user:null,
      });
    }
  }
)

  },[])
  
  return (
  <Routing /> 
 
  );
}

export default App;
