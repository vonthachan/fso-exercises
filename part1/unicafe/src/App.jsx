import { useState } from "react";
import "./App.css";
const Header = ({ title }) => <h2>{title}</h2>;

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;
  const average = total === 0 ? 0 : (good - bad) / total;
  const positive = total === 0 ? 0 : (good / total) * 100;
  if (total === 0) return <p>No feedback given</p>;
  return (
    <div>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    console.log("Good clicked");
    setGood(good + 1);
  };
  const handleNeutralClick = () => {
    console.log("Neutral clicked");
    setNeutral(neutral + 1);
  };
  const handleBadClick = () => {
    console.log("Bad clicked");
    setBad(bad + 1);
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
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  );
};

export default App;
