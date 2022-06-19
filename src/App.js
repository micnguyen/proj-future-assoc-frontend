import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/Button';
import { Label } from './components/Label/Label';
import { useState } from 'react'

function App() {
  const [counter, setCounter] = useState(10)

  const counterDescription = (counter) => {
    if (counter % 2 === 0) {
      return "EVEN"
    } else {
      return "ODD"
    }
  }

  const canCounterChange = (counter) => {
    if (counter < 0 || counter > 20) {
      return false
    } else {
      return true
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Button onClick={()=> {
          const newNumber = counter-1
          if(canCounterChange(newNumber)) {
            setCounter(newNumber)
          }
        }} title={'-'}/>

        <Label text={counter}/>

        <Label text={counterDescription(counter)}/>

        <Button onClick={()=> {
          const newNumber = counter+1
          if(canCounterChange(newNumber)) {
            setCounter(newNumber)
          }
        }} title={'+'}/>

      </header>
    </div>
  );
}

export default App;
