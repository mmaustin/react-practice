import { Box, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import { useState } from "react";
import bama from '../images/alabama.jpg';
import usa from '../images/us-flag.jpeg';
import unitedStates from "../statesFolder/states";



const MuiRadioButton = () => {

  const [value, setValue] = useState('');

  const handleChange = e => {
    setValue(e.target.value);
  }
  console.log(value);

  // const states = unitedStates.map(state => {
  //   return <FormControlLabel key={state._id} control={<Radio/>} label={state.name} value={state._id} />
  // })

  return (
    <Box mt='150px'>
      <FormControl>
        <FormLabel id='job-experience-group-label'>
          Years of experience
        </FormLabel>
        <RadioGroup
          name='job-experience-group'
          aria-labelledby="job-experience-group-label"
          value={value}
          onChange={handleChange}
        >
          {/* {states} */}
          <FormControlLabel control={<Radio/>} label='0-2' value='0-2' />
          <FormControlLabel control={<Radio/>} label='3-5' value='3-5' />
          <FormControlLabel control={<Radio/>} label='6-10' value='6-10' />
        </RadioGroup>
      </FormControl>
      {/* <Box >
        <img alt='usa' src={usa} height='50px' width='80px'/>
      </Box> */}
    </Box>
  )
}
export default MuiRadioButton

