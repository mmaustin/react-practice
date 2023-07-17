import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from "@mui/material";
import { useState } from "react";
import { questionsAnswers } from "./numbersObject"
//console.log(Object.values(questionsAnswers));

const SixPrototypeQuiz = ({score, setShowQuiz, setScore, amount, setAmount, startQuizNumber, displayNextBoard, colorProp, setColorProp}) => {
  
  const [randomNumber, setRandomNumber] = useState(startQuizNumber);
  // console.log(startQuizNumber);
  // console.log('random number:', randomNumber);
  const [value, setValue] = useState('');

  const handleChange = e => {
    e.preventDefault();
    setValue(e.target.value);
  }

  const randomFunction = () => {
    let random = Math.floor(Math.random() * Object.keys(questionsAnswers).length);
    while(random === 0 || random === randomNumber){
      random = Math.floor(Math.random() * Object.keys(questionsAnswers).length);
    }
    
    setRandomNumber(random);
    //let property = Object.values(questionsAnswers)[random];
    //console.log(random);
  };
  

  //console.log(questionsAnswers);
  let property = Object.values(questionsAnswers)[randomNumber];
  let question, answerChoices, answer;
  [,question] = Object.entries(property)[0];
  [,answerChoices] = Object.entries(property)[1];
  [,answer] = Object.entries(property)[2];

  answerChoices = answerChoices.map((item, i) => {
    return <FormControlLabel key={i} control={<Radio/>} label={item} value={item} />
  })

  const submitAnswer = () => {
    if(value === answer){
      setScore(score + amount);
      colorProp('brown');
      setColorProp(null);
      setAmount(0);
    } else {
      colorProp('black');
      setColorProp(null);
      setAmount(0);
    }
    delete questionsAnswers[Object.keys(questionsAnswers)[randomNumber]]
    displayNextBoard();
    setShowQuiz('');
  }

  return (
    <>
      { !randomNumber ?
        <>
          <p>Select Your Question</p>
          <button type="button" onClick={randomFunction}>Get Random Question</button>
        </>
      : <>
        <p>{question}</p>
        <Box>
        <FormControl>
          <FormLabel id='answer-choices-group-label'>
            Select Your Answer
          </FormLabel>
          <RadioGroup
            name='answer-choices-group'
            aria-labelledby="answer-choices-group-label"
            value={value}
            onChange={handleChange}
          >
            {answerChoices}
          </RadioGroup>
        </FormControl>
        </Box>
        <p>{answer}</p>
        <button type="button" onClick={randomFunction}>Get Random Question</button>
        <Button type="button" onClick={submitAnswer} disabled={!value}>Submit Answer</Button>
        </>
      }
    </>
  )
}
export default SixPrototypeQuiz