import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import { questionsAnswers } from "./numbersObject"
//console.log(Object.values(questionsAnswers));

const SixPrototypeQuiz = ({score}) => {
  
  const [randomNumber, setRandomNumber] = useState(0);
  const [value, setValue] = useState('');

  const randomFunction = () => {
    const random = Math.floor(Math.random() * Object.keys(questionsAnswers).length);
    setRandomNumber(random);
    //let property = Object.values(questionsAnswers)[random];
    //console.log(random);
  };

  let property = Object.values(questionsAnswers)[randomNumber];
  let question, answerChoices, answer;
  [,question] = Object.entries(property)[0];
  [,answerChoices] = Object.entries(property)[1];
  [,answer] = Object.entries(property)[2];

  answerChoices = answerChoices.map((item, i) => {
    return <FormControlLabel key={i} control={<Radio/>} label={item} value={item} />
  })

  // <FormControlLabel control={<Radio/>} label='0-2' value='0-2' />
  // <FormControlLabel control={<Radio/>} label='3-5' value='3-5' />
  // <FormControlLabel control={<Radio/>} label='6-10' value='6-10' />

  return (
    <>
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
          //onChange={handleChange}
        >
          {answerChoices}
        </RadioGroup>
      </FormControl>
      </Box>
      <p>{answer}</p>
      <button type="button" onClick={randomFunction}>Get Random</button>
    </>
  )
}
export default SixPrototypeQuiz