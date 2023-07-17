import { Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { objectOfNumbers, questionsAnswers } from "./numbersObject";
import SixPrototypeQuiz from "./SixPrototypeQuiz";
import SixPrototypeQuizTwo from "./SixPrototypeQuizTwo";



const SixPrototypeBoard = () => {
  
  //const arrayOfNumbers = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];
  //const objectOfNumbers = {'ONE': 'ONE', 'TWO': 'TWO', 'THREE': 'THREE', 'FOUR': 'FOUR', 'FIVE': 'FIVE', 'SIX': 'SIX'};
  //console.log(objectOfNumbers);
  //const [numbersObject, setnumbersObject] = useState(Object.keys(objectOfNumbers));
  
  const [reset, setReset] = useState('')
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState('');
  const [amount, setAmount] = useState(0);
  const [startQuizNumber, setStartQuizNumber] = useState(0);
  const [displayBoards, setDisplayBoards] = useState(0);
  const [colorProp, setColorProp] = useState(null)

  // const handleSetColorProp = (number) => {
  //   const colorFunctionObject = {'ONE': setColorOne};
  //   setColorProp(colorFunctionObject);
  // }

  const displayNextBoard = () => {
    setDisplayBoards(displayBoards + 1);
  };

  const navigate = useNavigate();
  
  useEffect(()=>{
    if(reset){
      navigate(0);
    }
  }, [reset, navigate])
  
  const [numbersObject, setnumbersObject] = useState(objectOfNumbers);
  //console.log(numbersObject);
  const randomNumber = num => {
    const random = Math.floor(Math.random() * Object.keys(numbersObject).length);
    if(num === Object.keys(numbersObject)[random]){
      return true;
    } else {
      return false;
    }
  }
  
  const randomFunction = () => {
    let random = Math.floor(Math.random() * Object.keys(questionsAnswers).length);
    //console.log('another log!', Object.keys(questionsAnswers).length);
    while(random === 0){
      random = Math.floor(Math.random() * Object.keys(questionsAnswers).length);
    }
    
    setStartQuizNumber(random);
    //let property = Object.values(questionsAnswers)[random];
    //console.log(random);
  };
  
  const [colorOne, setColorOne] = useState('gray');
  //const [chosenOne, setChosenOne] = useState('');
  const handleSetColorOne = (number, digit) => {
    setAmount(digit);
    if(randomNumber(number) === true){
      setColorOne('green');
      setScore(score + digit);
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setAmount(0);
      displayNextBoard();
    } else {
      randomFunction();
      setColorProp(()=>setColorOne);
      //setColorOne('black');
      setScore(score - digit);
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }

  const [colorTwo, setColorTwo] = useState('gray');
  const handleSetColorTwo = (number, digit) => {
    setAmount(digit);
    if(randomNumber(number) === true){
      setColorTwo('green');
      setScore(score + digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setAmount(0);
      displayNextBoard();   
    } else {
      randomFunction();
      setColorProp(()=>setColorTwo);
      //setColorTwo('black');
      setScore(score - digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }

  const [colorThree, setColorThree] = useState('gray');
  const handleSetColorThree = (number, digit) => {
    setAmount(digit);
    if(randomNumber(number) === true){
      setColorThree('green');
      setScore(score + digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);  
      setAmount(0);
      displayNextBoard();
    } else {
      randomFunction();
      setColorProp(()=>setColorThree);
      //setColorThree('black');
      setScore(score - digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }

  const [colorFour, setColorFour] = useState('gray');
  const handleSetColorFour = (number, digit) => {
    setAmount(digit);
    if(randomNumber(number) === true){
      setColorFour('green');
      setScore(score + digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject); 
      setAmount(0);
      displayNextBoard();     
    } else {
      randomFunction();
      setColorProp(()=>setColorFour);
      //setColorFour('black');
      setScore(score - digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }

  const [colorFive, setColorFive] = useState('gray');
  const handleSetColorFive = (number, digit) => {
    setAmount(digit);
    if(randomNumber(number) === true){
      setColorFive('green');
      setScore(score + digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setAmount(0);
      displayNextBoard();      
    } else {
      randomFunction();
      setColorProp(()=>setColorFive)
      //setColorFive('black');
      setScore(score - digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }

  const [colorSix, setColorSix] = useState('gray');
  const handleSetColorSix = (number, digit) => {
    setAmount(digit);
    if(randomNumber(number) === true){
      setColorSix('green');
      setScore(score + digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject); 
      setAmount(0);
      displayNextBoard();     
    } else {
      randomFunction();
      setColorProp(()=>setColorSix)
      //setColorSix('black');
      setScore(score - digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }

  return (
    <>
      <p>{score}</p>
      { showQuiz ?
        <>
        <SixPrototypeQuiz score={score} setShowQuiz={setShowQuiz} setScore={setScore} setAmount={setAmount} amount={amount} startQuizNumber={startQuizNumber} displayNextBoard={displayNextBoard} colorProp={colorProp} setColorProp={setColorProp}/>
        {/* <button type="button" onClick={() => setShowQuiz('')}>Show Game Board</button> */}
        </>
        :
        <Stack direction={'row'}>
          <Box onClick={() => handleSetColorOne('ONE', 1)} color={'white'} bgcolor={colorOne} height={'245px'} width={'80px'} sx={{border: '1px solid blue' }}>ONE</Box>
          <Box onClick={() => handleSetColorTwo('TWO', 2)} color={'white'} bgcolor={colorTwo} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>TWO</Box>
          <Box onClick={() => handleSetColorThree('THREE', 3)} color={'white'} bgcolor={colorThree} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>THREE</Box>
          <Box onClick={() => handleSetColorFour('FOUR', 4)} color={'white'} bgcolor={colorFour} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>FOUR</Box>
          <Box onClick={() => handleSetColorFive('FIVE', 5)} color={'white'} bgcolor={colorFive} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>FIVE</Box>
          <Box onClick={() => handleSetColorSix('SIX', 6)} color={'white'} bgcolor={colorSix} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>SIX</Box>
        </Stack>
      }
      <button type="button" onClick={()=>setReset('reset')}>Restart</button>
      {score >= 0 && displayBoards === 6 ?
        <SixPrototypeQuizTwo/> :
        undefined}
    </>
  )
}
export default SixPrototypeBoard