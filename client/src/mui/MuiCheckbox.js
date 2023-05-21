import { BookmarkBorder, Bookmark } from "@mui/icons-material";
import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup } from "@mui/material";
import { useState } from "react";


const MuiCheckbox = () => {

  const [acceptTnC, setAcceptTnC] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log(skills);
  const handleChange = e => setAcceptTnC(e.target.checked);
  const handleSkillChange = e => {
    const skill = skills.indexOf(e.target.value)
    if(skill === -1){
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter(skill => skill !== e.target.value));
    }
  }
  //console.log(acceptTnC);
  return (
    <Box>
      <Box>
        <FormControlLabel
          label='I accept terms and conditions'
          control={<Checkbox  checked={acceptTnC} onChange={handleChange} />}
        />
      </Box>
      <Box>
        <Checkbox icon={<BookmarkBorder/>} checkedIcon={<Bookmark/>} checked={acceptTnC} onChange={handleChange} />
      </Box>
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row >
            <FormControlLabel
            label='HTML'
            control={<Checkbox color='success' value='html'  checked={skills.includes('html')} onChange={handleSkillChange} />}
            />
            <FormControlLabel
            label='CSS'
            control={<Checkbox value='css'  checked={skills.includes('css')} onChange={handleSkillChange} />}
            />
            <FormControlLabel
            label='Javascript'
            control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleSkillChange} />}
            />
          </FormGroup>  
        </FormControl>
      </Box>
    </Box>
  )
}
export default MuiCheckbox;