import Header from "./Components/Header"
import UserInput from "./Components/UserInput"
import Result from "./Components/Result"
import { useState } from "react"

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10,
});
const inputIsValid=(userInput.duration>=1)
function handleChange(inputIdentifier, newValue){
 
  setUserInput(prevUserInput=>
    {return{
        ...prevUserInput,
        [inputIdentifier]: +newValue,    
    }});     
}
  return (
    <main id="">
      <Header></Header>
      <UserInput onChange={handleChange} userInput={userInput}></UserInput>
      {!inputIsValid && <p className="center">Please enter duration greater than zero.</p>}
      {inputIsValid && <Result userInput={userInput}></Result>}
    </main>
    
  )
}

export default App
