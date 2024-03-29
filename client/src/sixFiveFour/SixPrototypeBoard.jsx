import { Box, Stack, Paper, Typography, Button, useMediaQuery } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { objectOfNumbers, questionsAnswers } from "./numbersObject";
import SixPrototypeQuiz from "./SixPrototypeQuiz";
import SixPrototypeQuizTwo from "./SixPrototypeQuizTwo";
import InfoBox from "./InfoBox";


const SixPrototypeBoard = () => {
  
  const [reset, setReset] = useState('')
  const [score, setScore] = useState(0);
  const [showQuiz, setShowQuiz] = useState('');
  const [amount, setAmount] = useState(0);
  const [startQuizNumber, setStartQuizNumber] = useState(0);
  const [displayBoards, setDisplayBoards] = useState(0);
  const [colorProp, setColorProp] = useState(null);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [wrongTwice, setWrongTwice] = useState(0);

  const isNonMobileScreens = useMediaQuery("(min-width: 650px)");

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
    while(random === 0){
      random = Math.floor(Math.random() * Object.keys(questionsAnswers).length);
    }    
    setStartQuizNumber(random);
  };
  
  const [colorOne, setColorOne] = useState('gray');
  const [clickedOne, setClickedOne] = useState(false);
  //const [chosenOne, setChosenOne] = useState('');
  // const handleSetColorOne = (number, digit) => {
  //   setAmount(digit);
  //   if(randomNumber(number) === true){
  //     setColorOne('green');
  //     setScore(score + digit);
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject);
  //     setAmount(0);
  //     displayNextBoard();
  //   } else {
  //     randomFunction();
  //     setColorProp(()=>setColorOne);
  //     //setColorOne('black');
  //     setScore(score - digit);
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject);
  //     setShowQuiz('quiz');
  //   }
  // }

  const [colorTwo, setColorTwo] = useState('gray');
  const [clickedTwo, setClickedTwo] = useState(false);
  // const handleSetColorTwo = (number, digit) => {
  //   setAmount(digit);
  //   if(randomNumber(number) === true){
  //     setColorTwo('green');
  //     setScore(score + digit)
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject);
  //     setAmount(0);
  //     displayNextBoard();   
  //   } else {
  //     randomFunction();
  //     setColorProp(()=>setColorTwo);
  //     //setColorTwo('black');
  //     setScore(score - digit)
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject);
  //     setShowQuiz('quiz');
  //   }
  // }

  const [colorThree, setColorThree] = useState('gray');
  const [clickedThree, setClickedThree] = useState(false);
  // const handleSetColorThree = (number, digit) => {
  //   setAmount(digit);
  //   if(randomNumber(number) === true){
  //     setColorThree('green');
  //     setScore(score + digit)
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject);  
  //     setAmount(0);
  //     displayNextBoard();
  //   } else {
  //     randomFunction();
  //     setColorProp(()=>setColorThree);
  //     //setColorThree('black');
  //     setScore(score - digit)
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject);
  //     setShowQuiz('quiz');
  //   }
  // }

  const [colorFour, setColorFour] = useState('gray');
  const [clickedFour, setClickedFour] = useState(false);
  // const handleSetColorFour = (number, digit) => {
  //   setAmount(digit);
  //   if(randomNumber(number) === true){
  //     setColorFour('green');
  //     setScore(score + digit)
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject); 
  //     setAmount(0);
  //     displayNextBoard();     
  //   } else {
  //     randomFunction();
  //     setColorProp(()=>setColorFour);
  //     //setColorFour('black');
  //     setScore(score - digit)
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject);
  //     setShowQuiz('quiz');
  //   }
  // }

  const [colorFive, setColorFive] = useState('gray');
  const [clickedFive, setClickedFive] = useState(false);
  // const handleSetColorFive = (number, digit) => {
  //   setAmount(digit);
  //   if(randomNumber(number) === true){
  //     setColorFive('green');
  //     setScore(score + digit)
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject);
  //     setAmount(0);
  //     displayNextBoard();      
  //   } else {
  //     randomFunction();
  //     setColorProp(()=>setColorFive)
  //     //setColorFive('black');
  //     setScore(score - digit)
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject);
  //     setShowQuiz('quiz');
  //   }
  // }

  const [colorSix, setColorSix] = useState('gray');
  const [clickedSix, setClickedSix] = useState(false);
  // const handleSetColorSix = (number, digit) => {
  //   setAmount(digit);
  //   if(randomNumber(number) === true){
  //     setColorSix('green');
  //     setScore(score + digit)
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject); 
  //     setAmount(0);
  //     displayNextBoard();     
  //   } else {
  //     randomFunction();
  //     setColorProp(()=>setColorSix)
  //     //setColorSix('black');
  //     setScore(score - digit)
  //     delete numbersObject[number];
  //     setnumbersObject(numbersObject);
  //     setShowQuiz('quiz');
  //   }
  // }

  const handleCellFunctionality = (number, digit) => {
    setAmount(digit);
    switch (number) {
      case 'ONE':
        setClickedOne(true);
        if(randomNumber(number) === true){
          setColorOne('green');
          setScore(score + digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject); 
          setAmount(0);
          setCorrectGuesses(correctGuesses +1);
          displayNextBoard();     
        } else {
          randomFunction();
          setColorProp(()=>setColorOne);
          setScore(score - digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject);
          setShowQuiz('quiz');
        };
        break;
      case 'TWO':
        setClickedTwo(true);
        if(randomNumber(number) === true){
          setColorTwo('green');
          setScore(score + digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject); 
          setAmount(0);
          setCorrectGuesses(correctGuesses + 1);
          displayNextBoard();     
        } else {
          randomFunction();
          setColorProp(()=>setColorTwo);
          setScore(score - digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject);
          setShowQuiz('quiz');
        };
        break;
      case 'THREE':
        setClickedThree(true);
        if(randomNumber(number) === true){
          setColorThree('green');
          setScore(score + digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject); 
          setAmount(0);
          setCorrectGuesses(correctGuesses + 1);
          displayNextBoard();     
        } else {
          randomFunction();
          setColorProp(()=>setColorThree);
          setScore(score - digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject);
          setShowQuiz('quiz');
        };
        break;
      case 'FOUR':
        setClickedFour(true);
        if(randomNumber(number) === true){
          setColorFour('green');
          setScore(score + digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject); 
          setAmount(0);
          setCorrectGuesses(correctGuesses + 1);
          displayNextBoard();     
        } else {
          randomFunction();
          setColorProp(()=>setColorFour);
          setScore(score - digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject);
          setShowQuiz('quiz');
        };
        break;
      case 'FIVE':
        setClickedFive(true);
        if(randomNumber(number) === true){
          setColorFive('green');
          setScore(score + digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject); 
          setAmount(0);
          setCorrectGuesses(correctGuesses + 1);
          displayNextBoard();     
        } else {
          randomFunction();
          setColorProp(()=>setColorFive);
          setScore(score - digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject);
          setShowQuiz('quiz');
        };
        break;
      case 'SIX':
        setClickedSix(true);
        if(randomNumber(number) === true){
          setColorSix('green');
          setScore(score + digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject); 
          setAmount(0);
          setCorrectGuesses(correctGuesses + 1);
          displayNextBoard();     
        } else {
          randomFunction();
          setColorProp(()=>setColorSix);
          setScore(score - digit)
          delete numbersObject[number];
          setnumbersObject(numbersObject);
          setShowQuiz('quiz');
        };
        break;
        default:
          console.log('something done gone way wrong!!!');
    }
  }

  return (
    <Box sx={{
      width: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column'
    }}>
      <Box sx={{
        width: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column'        
      }}>
        <InfoBox />
        <Typography mt='50px' variant="h3" fontFamily='cursive' >Random History</Typography>
        <Typography mt='20px' variant="h5" >History Victory Is Five Points!</Typography>
      </Box>
      <Paper elevation={20} sx={{
        width: '75%',
        mt: '35px',
        ...(!isNonMobileScreens && {
          width: '75%',
          mt: '20px'
        })
        }}>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column'
        }} >
          <Typography mt='20px' mb='20px' variant="h5">Your Score: {score}</Typography>
          {displayBoards === 6 ?
            <SixPrototypeQuizTwo score={score} correctGuesses={correctGuesses} correctAnswers={correctAnswers} wrongTwice={wrongTwice} /> :
            undefined}       
          { showQuiz ?
            <>
            <SixPrototypeQuiz score={score} setShowQuiz={setShowQuiz} setScore={setScore} setAmount={setAmount} amount={amount} startQuizNumber={startQuizNumber} displayNextBoard={displayNextBoard} colorProp={colorProp} setColorProp={setColorProp} correctAnswers={correctAnswers} wrongTwice={wrongTwice} setCorrectAnswers={setCorrectAnswers} setWrongTwice={setWrongTwice}/>
            {/* <button type="button" onClick={() => setShowQuiz('')}>Show Game Board</button> */}
            </>
            :
            <Stack paddingLeft='10px' paddingRight='10px' direction={isNonMobileScreens ? 'row' : 'column'}>
              <Box onClick={clickedOne ? ()=>{} : () => handleCellFunctionality('ONE', 1)} color={'white'} bgcolor={colorOne} height={isNonMobileScreens ? '245px' : '50px'} width={isNonMobileScreens ? '80px' : '200px'} sx={{border: '1px solid blue' }}>ONE</Box>
              <Box onClick={clickedTwo ? ()=>{} : () => handleCellFunctionality('TWO', 2)} color={'white'} bgcolor={colorTwo} height={isNonMobileScreens ? '245px' : '50px'} width={isNonMobileScreens ? '80px' : '200px'} sx={{border: '1px solid blue'}}>TWO</Box>
              <Box onClick={clickedThree ? ()=>{} : () => handleCellFunctionality('THREE', 3)} color={'white'} bgcolor={colorThree} height={isNonMobileScreens ? '245px' : '50px'} width={isNonMobileScreens ? '80px' : '200px'} sx={{border: '1px solid blue'}}>THREE</Box>
              <Box onClick={clickedFour ? ()=>{} : () => handleCellFunctionality('FOUR', 4)} color={'white'} bgcolor={colorFour} height={isNonMobileScreens ? '245px' : '50px'} width={isNonMobileScreens ? '80px' : '200px'} sx={{border: '1px solid blue'}}>FOUR</Box>
              <Box onClick={clickedFive ? ()=>{} : () => handleCellFunctionality('FIVE', 5)} color={'white'} bgcolor={colorFive} height={isNonMobileScreens ? '245px' : '50px'} width={isNonMobileScreens ? '80px' : '200px'} sx={{border: '1px solid blue'}}>FIVE</Box>
              <Box onClick={clickedSix ? ()=>{} : () => handleCellFunctionality('SIX', 6)} color={'white'} bgcolor={colorSix} height={isNonMobileScreens ? '245px' : '50px'} width={isNonMobileScreens ? '80px' : '200px'} sx={{border: '1px solid blue'}}>SIX</Box>
            </Stack>
          }
          <Button sx={{mt: '15px', mb: '15px'}} variant="contained" type="button" onClick={()=>setReset('reset')}>Play Again</Button>
        </Box>
      </Paper>
    </Box>
  )
}
export default SixPrototypeBoard