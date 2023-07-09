import { Box, Stack } from "@mui/material";
import { useState } from "react";

const SixPrototypeBoard = () => {

  //const arrayOfNumbers = ['ONE', 'TWO', 'THREE', 'FOUR', 'FIVE', 'SIX'];
  const objectOfNumbers = {'ONE': 'ONE', 'TWO': 'TWO', 'THREE': 'THREE', 'FOUR': 'FOUR', 'FIVE': 'FIVE', 'SIX': 'SIX'};

  const [numbersArray, setNumbersArray] = useState(Object.keys(objectOfNumbers))
  
  const randomNumber = num => {
    const random = Math.floor(Math.random() * numbersArray.length);
    if(num === numbersArray[random]){
      return true;
    } else {
      return false;
    }
  }
  
  
  const [colorOne, setColorOne] = useState('gray');
  const handleSetColorOne = (number) => {
    if(randomNumber(number) === true){
      console.log('yes');
      setColorOne('green');
    } else {
      console.log('no');
      setColorOne('black')
    }
  }

  const [colorTwo, setColorTwo] = useState('gray');
  const handleSetColorTwo = (number) => {
    if(randomNumber(number) === true){
      console.log('yes');
      setColorTwo('green');
    } else {
      console.log('no');
      setColorTwo('black')
    }
  }

  const [colorThree, setColorThree] = useState('gray');
  const handleSetColorThree = (number) => {
    if(randomNumber(number) === true){
      console.log('yes');
      setColorThree('green');
    } else {
      console.log('no');
      setColorThree('black')
    }
  }

  const [colorFour, setColorFour] = useState('gray');
  const handleSetColorFour = (number) => {
    if(randomNumber(number) === true){
      console.log('yes');
      setColorFour('green');
    } else {
      console.log('no');
      setColorFour('black')
    }
  }

  const [colorFive, setColorFive] = useState('gray');
  const handleSetColorFive = (number) => {
    if(randomNumber(number) === true){
      console.log('yes');
      setColorFive('green');
    } else {
      console.log('no');
      setColorFive('black')
    }
  }
  const [colorSix, setColorSix] = useState('gray');
  const handleSetColorSix = (number) => {
    if(randomNumber(number) === true){
      console.log('yes');
      setColorSix('green');
    } else {
      console.log('no');
      setColorSix('black')
    }
  }

  return (
    <Stack direction={'row'}>
      <Box onClick={() => handleSetColorOne('ONE')} color={'white'} bgcolor={colorOne} height={'245px'} width={'80px'} sx={{border: '1px solid blue' }}>ONE</Box>
      <Box onClick={() => handleSetColorTwo('TWO')} color={'white'} bgcolor={colorTwo} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>TWO</Box>
      <Box onClick={() => handleSetColorThree('THREE')} color={'white'} bgcolor={colorThree} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>THREE</Box>
      <Box onClick={() => handleSetColorFour('FOUR')} color={'white'} bgcolor={colorFour} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>FOUR</Box>
      <Box onClick={() => handleSetColorFive('FIVE')} color={'white'} bgcolor={colorFive} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>FIVE</Box>
      <Box onClick={() => handleSetColorSix('SIX')} color={'white'} bgcolor={colorSix} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>SIX</Box>
    </Stack>
  )
}
export default SixPrototypeBoard