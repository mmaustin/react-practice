import { Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { objectOfNumbers } from "./numbersObject";
import SixPrototypeQuiz from "./SixPrototypeQuiz";


const SixPrototypeBoard = () => {

  //const arrayOfNumbers = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];
  //const objectOfNumbers = {'ONE': 'ONE', 'TWO': 'TWO', 'THREE': 'THREE', 'FOUR': 'FOUR', 'FIVE': 'FIVE', 'SIX': 'SIX'};
  //console.log(objectOfNumbers);
  //const [numbersObject, setnumbersObject] = useState(Object.keys(objectOfNumbers));

  const [reset, setReset] = useState('')
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState('');
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
  
  
  const [colorOne, setColorOne] = useState('gray');
  const handleSetColorOne = (number, digit) => {
    if(randomNumber(number) === true){
      setColorOne('green');
      setScore(score + digit);
      delete numbersObject[number];
      setnumbersObject(numbersObject);
    } else {
      setColorOne('black');
      setScore(score - digit);
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }

  const [colorTwo, setColorTwo] = useState('gray');
  const handleSetColorTwo = (number, digit) => {
    if(randomNumber(number) === true){
      setColorTwo('green');
      setScore(score + digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);      
    } else {
      setColorTwo('black');
      setScore(score - digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }

  const [colorThree, setColorThree] = useState('gray');
  const handleSetColorThree = (number, digit) => {
    if(randomNumber(number) === true){
      setColorThree('green');
      setScore(score + digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);      
    } else {
      setColorThree('black');
      setScore(score - digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }

  const [colorFour, setColorFour] = useState('gray');
  const handleSetColorFour = (number, digit) => {
    if(randomNumber(number) === true){
      setColorFour('green');
      setScore(score + digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);      
    } else {
      setColorFour('black');
      setScore(score - digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }

  const [colorFive, setColorFive] = useState('gray');
  const handleSetColorFive = (number, digit) => {
    if(randomNumber(number) === true){
      setColorFive('green');
      setScore(score + digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);      
    } else {
      setColorFive('black');
      setScore(score - digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);
      setShowQuiz('quiz');
    }
  }
  const [colorSix, setColorSix] = useState('gray');
  const handleSetColorSix = (number, digit) => {
    if(randomNumber(number) === true){
      setColorSix('green');
      setScore(score + digit)
      delete numbersObject[number];
      setnumbersObject(numbersObject);      
    } else {
      setColorSix('black');
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
        <SixPrototypeQuiz score={score} setShowQuiz={setShowQuiz} setScore={setScore}/>
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
    </>
  )
}
export default SixPrototypeBoard