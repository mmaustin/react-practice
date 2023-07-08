import { Box, Stack, Divider, Grid, Paper } from "@mui/material"


const MuiBox = () => {
  return (
    <Paper elevation='12' sx={{padding: '32px'}}>
      <Stack  sx={{border: `1px solid red`}} direction='row' spacing={2}
        divider={<Divider orientation='vertical' flexItem/>}
      >
        <Box
          component='section'
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            marginTop: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'primary.light',
            }
          }}
        >
          What Up With Box?
        </Box>
        <Box
          component='section'
          sx={{
            backgroundColor: 'primary.main',
            color: 'white',
            height: '100px',
            width: '100px',
            marginTop: '100px',
            padding: '16px',
            '&:hover': {
              backgroundColor: 'primary.light',
            }
          }}
        >
          What Up With Box?
        </Box>
      </Stack>
      <Grid container my={4} spacing={2}>
        <Grid xs item><Box bgcolor='primary.light' padding={2}>Item 1</Box></Grid>
        <Grid xs item><Box bgcolor='primary.light' padding={2}>Item 2</Box></Grid>
        <Grid xs item><Box bgcolor='primary.light' padding={2}>Item 3</Box></Grid>
        <Grid xs item><Box bgcolor='primary.light' padding={2}>Item 4</Box></Grid>
      </Grid>
    </Paper>  
  )
}
export default MuiBox