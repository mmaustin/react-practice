import { Box, TextField, MenuItem } from "@mui/material";
import { useState } from "react";


const MuiSelect = () => {

    const [country, setCountry] = useState([]);
    const handleChange = e => {
        const value = e.target.value;
        setCountry(typeof value === 'string' ? value.split(',') : value);
    };

  return (
    <Box width='250px' mt='100px'>
        <TextField
            fullWidth
            label='Select Countries'
            select
            value={country}
            onChange={handleChange}
            SelectProps={{
                multiple: true,
            }}
            size='medium'
            color="primary"
            helperText='select countries'
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>America</MenuItem>
            <MenuItem value='CA'>Canada</MenuItem>
        </TextField>
    </Box>
  )
}
export default MuiSelect