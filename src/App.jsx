import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import NavBar from "./NavBar";
import TextForm from "./TextForm";
import AboutUs from "./AboutUs";
import Alerts from "./Alerts";
import SearchBar from "./SearchBar";
import Form from "./Form";

import CurrencyConverter from "./CurrencyConverter";
import StopWatch from "./StopWatch";

import ForwardRef2 from "./FrowardRef2";

// childToParent

import Parent from "./ChildToParent";
//forwardRef
import ChildComp from "./ChildComp";

function App() {
  // const countries=["India","America","Japan"]

  // const [value,setValue]=useState('')

  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {

    setAlert({
      msg: message,
      type: type
    });

    //after 2 second alert disappers
       setTimeout(()=>{
        setAlert(null)

        },2000)
  };

  const toggleMode = () => {

    if (mode === "light") {

      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been set", "success");
      document.title="Dark"
      
      setInterval(()=>{
        document.title="Install TextUtils now.."
      },2000)
    }
     else { 

      setMode("light");
      document.body.style.backgroundColor = "lightgray";
      showAlert("Light mode has been set", "success");
      document.title="Light"
    }
  };

  //let alertMsg = "Hello";
  return (
    <div>
      <NavBar title="TextUtilities" mode={mode} toggleMode={toggleMode} />

      <Alerts alert={alert} />
    
      <div className="container my-3">
        <TextForm heading="Enter your text here"  showAlert={showAlert}/>
        {/* <AboutUs/> */}
      </div>
      {/* <input type='text' value={value} onChange={(e)=>setValue(e.target.value)}/> */}
      <h3>Search a Country</h3>
      <SearchBar/>

      <Form/>
      <hr/>
      <StopWatch/>
        <div>
        <CurrencyConverter/>
        </div>
       <hr/> 
        <Parent />

        {/* forwardRef */}
        <hr/>
        <ChildComp/>
      <hr/>
        <ForwardRef2/>
    </div>
  );
}

export default App;
