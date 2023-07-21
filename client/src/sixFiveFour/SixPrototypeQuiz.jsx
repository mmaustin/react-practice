import { Box, Typography, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Button } from "@mui/material";
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
    return <FormControlLabel sx={{color: 'info.dark'}} key={i} control={<Radio/>} label={item} value={item} />
  })

  const submitAnswer = () => {
    if(value === answer){
      setScore(score + amount);
      colorProp('tan');
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
          <Button type="button" onClick={randomFunction}>Get Random Question</Button>
        </>
      : 
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column'
      }}>
        <Typography ml='25px' mr='25px' mb='25px' variant="h5">{question}</Typography>
        <Box>
          <FormControl>
            <FormLabel  sx={{color: 'green', mb: '15px'}} id='answer-choices-group-label'>
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
        {/* <p>{answer}</p> */}
        <Button type="button" variant="contained" sx={{mt: '10px', mb: '10px'}} onClick={randomFunction}>Different Question</Button>
        <Button type="button" onClick={submitAnswer} disabled={!value}>Submit Answer</Button>
      </Box>
      }
    </>
  )
}
export default SixPrototypeQuiz