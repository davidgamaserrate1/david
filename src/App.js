import React from "react";
import Header from "./components/Header/Index";
import './styles.css'
import Description from "./components/Description";
import Skills from "./components/Skills";
import Body from "./components/Body";
 

const App = () =>{
  return(
    <div className="App">
      <Header/>
      <Description />
      <Skills/>
      <Body/>
    </div>
  )
}

export default App