import { VisibilityOff } from "@mui/icons-material";
import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";


const MuiTextField = () => {

    const [value, setValue] = useState('');

  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={2}>
            <TextField label='name' variant='outlined'/>
            <TextField label='name' variant='filled'/>
            <TextField label='name' variant='standard'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Small secondary' size='small' color='secondary'/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField label='Form input' required value={value} error={!value}
                onChange={(e) => setValue(e.target.value)}
                helperText={!value ? 'Required' : 'Guard your grill!'}
            />
            <TextField
                label='password'
                type='password'
                helperText='help this text'
            />
            <TextField label='Read Only' InputProps={{readOnly: true}}/>
        </Stack>
        <Stack direction='row' spacing={2}>
            <TextField
                label='Amount'
                InputProps={{
                    startAdornment: <InputAdornment position='start'>$</InputAdornment>
                }}
            />
            <TextField
                label='password'
                type='password'
                InputProps={{
                    endAdornment: <InputAdornment position='end'><VisibilityOff/></InputAdornment>
                }}
            />
        </Stack>
    </Stack>
  )
}
export default MuiTextField