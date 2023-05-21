import {Stack, Button, IconButton, ButtonGroup, ToggleButtonGroup, ToggleButton } from "@mui/material";
import {Send, FormatItalic, FormatUnderlined, FormatBold } from '@mui/icons-material';
import { useState } from "react";


const MuiButton = () => {

    const [formats, setFormats] = useState(null);
    console.log(formats);
    const handleFormatChange = (e, updatedFormats) => {
        setFormats(updatedFormats)
    }

  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com' target="_blank">text</Button>
            <Button variant='contained'>contained</Button>
            <Button variant='outlined'>outlined</Button>
        </Stack>
        <Stack spacing={2} direction="row">
            <Button variant='text'color='primary'>contained</Button>
            <Button variant='outlined'color='secondary'>secondary</Button>
            <Button variant='contained'color='error'>error</Button>
            <Button variant='contained'color='warning'>warning</Button>
            <Button variant='contained'color='info'>info</Button>
            <Button variant='contained'color='success'>success</Button>
        </Stack>
        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>small</Button>
            <Button variant='contained' size='medium'>medium</Button>
            <Button variant='contained' size='large'>large</Button>
        </Stack>
        <Stack spacing={2} direction='column'>
            <ButtonGroup variant='contained' aria-label="outlined primary button group">
                <Button onClick={()=> console.log('clicked')} disableRipple variant='contained' startIcon={<Send/>}>send</Button>
                <Button disableElevation variant='contained' endIcon={<Send/>}>send</Button>
                <IconButton aria-label="send" color='success' size='medium'><Send/></IconButton>
                </ButtonGroup>    
        </Stack>
        <Stack direction='row' >
            <ToggleButtonGroup exclusive size='small' color="success" orientation="vertical" aria-label='text formatting' value={formats} onChange={handleFormatChange}>
                <ToggleButton value='bold' aria-label="bold"><FormatBold/></ToggleButton>
                <ToggleButton value='italic' aria-label="italic"><FormatItalic/></ToggleButton>
                <ToggleButton value='underlined' aria-label="underlined"><FormatUnderlined/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>    
  )
}
export default MuiButton