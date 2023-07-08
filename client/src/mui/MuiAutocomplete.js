import { Stack, Autocomplete, TextField } from "@mui/material"
import { useState } from "react"

const skills = ['HTML', 'CSS', 'Javascript', 'Typescript', 'React']

const MuiAutocomplete = () => {
  const [value, setValue] = useState();
  console.log(value);
  return (
    <Stack spacing={2} width='250px' mt='100px'>
      <Autocomplete
        options={skills}
        renderInput={(params)=> <TextField {...params} label='Skills' />}
        value={value}
        onChange={(e, newValue) => setValue(newValue)}
        />
    </Stack>
  )
}
export default MuiAutocomplete