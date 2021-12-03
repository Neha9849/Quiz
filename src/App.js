import react, { useState } from "react";
import "./App.css";
import Home from "./components/Home/Home";
function App() {
  const [count, setCount] = useState(0);
  const [category, setCategory] = useState("9");
  const [level, setLevel] = useState("easy");
  const [questions, setQuestions] = useState({});
  return (
    <Home
      setCategory={setCategory}
      setLevel={setLevel}
      setQuestions={setQuestions}
      setCount={setCount}
      count={count}
      category={category}
      level={level}
      questions={questions}
    />
  );
}

export default App;
