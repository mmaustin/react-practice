// import { Box, TextField, MenuItem } from "@mui/material";
import { InputLabel, MenuItem, FormHelperText, FormControl, Select} from "@mui/material";
import { useState } from "react";
import unitedStates from "../statesFolder/states";


const MuiSelect = () => {

    const [state, setState] = useState('');
    const handleChange = e => {
        setState(e.target.value)
        // const value = e.target.value;
        // setCountry(typeof value === 'string' ? value.split(',') : value);
    };
console.log(state);
  return (
    <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="demo-simple-select-helper-label">State</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={state}
          label="State"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {unitedStates.map(state => {
            return <MenuItem key={state._id} value={state.name}>{state.name}</MenuItem>
          })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
        <FormHelperText>Choose Your State, Mate</FormHelperText>
      </FormControl>
    // <Box width='250px' mt='100px'>
    //     <TextField
    //         fullWidth
    //         label='Select Countries'
    //         select
    //         value={country}
    //         onChange={handleChange}
    //         SelectProps={{
    //             multiple: true,
    //         }}
    //         size='medium'
    //         color="primary"
    //         helperText='select countries'
    //     >
    //         {/* {country.map(c => {
    //             return <MenuItem key={c._id} value={c._id}>{c.name}</MenuItem>
    //         })} */}
    //         <MenuItem value='IN'>India</MenuItem>
    //         <MenuItem value='US'>America</MenuItem>
    //         <MenuItem value='CA'>Canada</MenuItem>
    //     </TextField>
    // </Box>
  )
}
export default MuiSelect