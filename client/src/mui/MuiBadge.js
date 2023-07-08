import {Stack, Badge, Button, Box} from '@mui/material';
import {Mail} from '@mui/icons-material';
import { useState } from 'react';

const MuiBadge = () => {

  let [content, setContent] = useState(0);

  return (
    <>
      <Stack mt={'50px'} spacing={2} direction={'row'} >
        <Badge badgeContent={content} color='primary' showZero={true}>
          <Mail />
        </Badge>
      </Stack>
      <Box mt={'10px'} spacing={5} direction={'row'} >
        <Button onClick={() => setContent(content + 1)} >Increase</Button>
        <Button onClick={() => setContent(content - 1)} >Decrease</Button>
      </Box>
    </>
  )
}
export default MuiBadge