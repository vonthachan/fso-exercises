import { useState } from "react";
import "./App.css";
const Header = ({ title }) => <h2>{title}</h2>;

const Statistics = (props) => {
  const { good, neutral, bad } = props;
  const total = good + neutral + bad;

  if (total === 0) return <p>No feedback given</p>;

  const average = (good - bad) / total;
  const positive = (good / total) * 100;
  return (
    <div>
      <StatisticLine text="good" value={good} />
      <StatisticLine text="neutral" value={neutral} />
      <StatisticLine text="bad" value={bad} />
      <StatisticLine text="all" value={total} />
      <StatisticLine text="average" value={average} />
      <StatisticLine text="positive" value={positive} unit="%" />
    </div>
  );
};

const StatisticLine = ({ text, value, unit }) => {
  return (
    <p>
      {text} {value}
      {unit}
    </p>
  );
};
const Button = ({ text, handleClick }) => (
  <button onClick={handleClick}>{text}</button>
);

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
        <Button text="good" handleClick={handleGoodClick} />
        <Button text="neutral" handleClick={handleNeutralClick} />
        <Button text="bad" handleClick={handleBadClick} />
      </div>
      <div>
        <Header title={"statistics"} />
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>
    </div>
  );
};

export default App;
