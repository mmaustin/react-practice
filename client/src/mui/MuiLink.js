import {Stack, Link, Typography} from '@mui/material';

const MuiLink = () => {
  return (
    <Stack spacing={2} m={4} direction='row'>
      <Typography variant='h5'>
        <Link color='error' underline='hover' href='#'>Link</Link>
      </Typography>
    </Stack>
  )
}
export default MuiLink;