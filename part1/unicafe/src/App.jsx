import { useState } from "react";
import './App.css'
const Header = ({ title }) => <h2>{title}</h2>;

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    console.log('Good clicked');
    setGood(good+1)
  }
  const handleNeutralClick = () => {
    console.log("Neutral clicked");
    setNeutral(neutral+1)
  };
  const handleBadClick = () => {
    console.log("Bad clicked");
    setBad(bad+1)
  };

  return (
    <div>
      <div>
        <Header title={"give feedback"} />
        <button onClick={handleGoodClick}>good</button>
        <button onClick={handleNeutralClick}>neutral</button>
        <button onClick={handleBadClick}>bad</button>
      </div>
      <div>
        <Header title={"statistics"} />
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
      </div>
    </div>
  );
}


export default App;
