import { useState } from "react";
import { questionsAnswers } from "./numbersObject"
//console.log(Object.values(questionsAnswers));

const SixPrototypeQuiz = ({score}) => {
  
  const [randomNumber, setRandomNumber] = useState(0);

  const randomFunction = () => {
    const random = Math.floor(Math.random() * Object.keys(questionsAnswers).length);
    setRandomNumber(random);
    //let property = Object.values(questionsAnswers)[random];
    //console.log(random);
  };

  console.log(randomNumber);

  return (
    <>
      <div>{score}</div>
      <button type="button" onClick={randomFunction}>Get Random</button>
    </>
  )
}
export default SixPrototypeQuiz