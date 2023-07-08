import { Box, Stack } from "@mui/material";
import { useState } from "react";

const SixPrototypeBoard = () => {

  const [colorOne, setColorOne] = useState('orange');
  console.log(colorOne);
  const handleSetColorOne = () => setColorOne('black');
  const [colorTwo, setColorTwo] = useState('pink');
  const handleSetColorTwo = () => setColorTwo('black');
  const [colorThree, setColorThree] = useState('red');
  const handleSetColorThree = () => setColorThree('black');
  const [colorFour, setColorFour] = useState('blue');
  const handleSetColorFour = () => setColorFour('black');
  const [colorFive, setColorFive] = useState('gray');
  const handleSetColorFive = () => setColorFive('black');
  const [colorSix, setColorSix] = useState('green');
  const handleSetColorSix = () => setColorSix('black');

  return (
    <Stack direction={'row'}>
      <Box onClick={handleSetColorOne} color={'white'} bgcolor={colorOne} height={'245px'} width={'80px'} sx={{border: '1px solid blue' }}>ONE</Box>
      <Box onClick={handleSetColorTwo} color={'white'} bgcolor={colorTwo} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>TWO</Box>
      <Box onClick={handleSetColorThree} color={'white'} bgcolor={colorThree} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>THREE</Box>
      <Box onClick={handleSetColorFour} color={'white'} bgcolor={colorFour} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>FOUR</Box>
      <Box onClick={handleSetColorFive} color={'white'} bgcolor={colorFive} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>FIVE</Box>
      <Box onClick={handleSetColorSix} color={'white'} bgcolor={colorSix} height={'245px'} width={'80px'} sx={{border: '1px solid blue'}}>SIX</Box>
    </Stack>
  )
}
export default SixPrototypeBoard