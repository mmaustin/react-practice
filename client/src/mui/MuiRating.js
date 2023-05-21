import { Stack, Rating } from "@mui/material";
import { useState } from "react";


const MuiRating = () => {

  const [value, setValue] = useState(null);
  console.log(Rating);
  const handleChange = (e, newValue) => {
    setValue(newValue);
  }

  return (
    <Stack spacing={2}>
      <Rating value={value} onChange={handleChange}/>
    </Stack>
  )
}
export default MuiRating