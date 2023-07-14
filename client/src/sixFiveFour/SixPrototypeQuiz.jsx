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

  let property = Object.values(questionsAnswers)[randomNumber];
  //Object.entries(property)[0] = question: "fake question 1"
  //Object.entries(property)[1] = answers: ['fake answer 1', 'fake answer 2', 'fake answer 3']
  //Object.entries(property)[2] = answer: 'fake answer 2'
  console.log(Object.entries(property));

  return (
    <>
      <div>{score}</div>
      <p>{randomNumber}</p>
      <button type="button" onClick={randomFunction}>Get Random</button>
    </>
  )
}
export default SixPrototypeQuiz