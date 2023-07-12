import { Box, Stack } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const SixPrototypeBoard = () => {

  //const arrayOfNumbers = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];
  //const objectOfNumbers = {'ONE': 'ONE', 'TWO': 'TWO', 'THREE': 'THREE', 'FOUR': 'FOUR', 'FIVE': 'FIVE', 'SIX': 'SIX'};
  //console.log(objectOfNumbers);
  //const [numbersArray, setNumbersArray] = useState(Object.keys(objectOfNumbers));

  const [reset, setReset] = useState('')
  const [score, setScore] = useState(0);
  const navigate = useNavigate();
  
  useEffect(()=>{
    if(reset){
      navigate(0);
    }
  }, [reset, navigate])

  const [numbersArray, setNumbersArray] = useState({'ONE': 'ONE', 'TWO': 'TWO', 'THREE': 'THREE', 'FOUR': 'FOUR', 'FIVE': 'FIVE', 'SIX': 'SIX'});
  console.log(numbersArray);
  const randomNumber = num => {
    const random = Math.floor(Math.random() * Object.keys(numbersArray).length);
    if(num === Object.keys(numbersArray)[random]){
      return true;
    } else {
      return false;
    }
  }
  
  
  const [colorOne, setColorOne] = useState('gray');
  const handleSetColorOne = (number) => {
    if(randomNumber(number) === true){
      setColorOne('green');
      delete numbersArray[number];
      setNumbersArray(numbersArray);
    } else {
      setColorOne('black');
      delete numbersArray[number];
      setNumbersArray(numbersArray);
    }
  }

  const [colorTwo, setColorTwo] = useState('gray');
  const handleSetColorTwo = (number) => {
    if(randomNumber(number) === true){
      //setColorTwo('green');
      setColorTwo('green');
      delete numbersArray[number];
      setNumbersArray(numbersArray);      
    } else {
      setColorTwo('black');
      delete numbersArray[number];
      setNumbersArray(numbersArray);
    }
  }

  const [colorThree, setColorThree] = useState('gray');
  const handleSetColorThree = (number) => {
    if(randomNumber(number) === true){
      setColorThree('green');
      delete numbersArray[number];
      setNumbersArray(numbersArray);      
    } else {
      setColorThree('black');
      delete numbersArray[number];
      setNumbersArray(numbersArray);
    }
  }

  const [colorFour, setColorFour] = useState('gray');
  const handleSetColorFour = (number) => {
    if(randomNumber(number) === true){
      setColorFour('green');
      delete numbersArray[number];
      setNumbersArray(numbersArray);      
    } else {
      setColorFour('black');
      delete numbersArray[number];
      setNumbersArray(numbersArray);
    }
  }

  const [colorFive, setColorFive] = useState('gray');
  const handleSetColorFive = (number) => {
    if(randomNumber(number) === true){
      setColorFive('green');
      delete numbersArray[number];
      setNumbersArray(numbersArray);      
    } else {
      setColorFive('black');
      delete numbersArray[number];
      setNumbersArray(numbersArray);
    }
  }
  const [colorSix, setColorSix] = useState('gray');
  const handleSetColorSix = (number) => {
    if(randomNumber(number) === true){
      setColorSix('green');
      delete numbersArray[number];
      setNumbersArray(numbersArray);      
    } else {
      setColorSix('black');
      delete numbersArray[number];
      setNumbersArray(numbersArray);
    }
  }

  return (
    <>
      <p>{score}</p>
      <Stack direction={'row'}>
        <Box onClick={() => handleSetColorOne('ONE')} color={'white'} bgcolor={colorOne} height={'245px'} width={'80px'} sx={{border: '1px solid blue' }}>ONE</Box>
        <Box onClick={() => handleSetColorTwo('TWO')} color={'white'} bgcolor={colorTwo} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>TWO</Box>
        <Box onClick={() => handleSetColorThree('THREE')} color={'white'} bgcolor={colorThree} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>THREE</Box>
        <Box onClick={() => handleSetColorFour('FOUR')} color={'white'} bgcolor={colorFour} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>FOUR</Box>
        <Box onClick={() => handleSetColorFive('FIVE')} color={'white'} bgcolor={colorFive} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>FIVE</Box>
        <Box onClick={() => handleSetColorSix('SIX')} color={'white'} bgcolor={colorSix} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>SIX</Box>
      </Stack>
      <button type="button" onClick={()=>setReset('reset')}>Restart</button>
    </>
  )
}
export default SixPrototypeBoard