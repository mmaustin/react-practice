import { CardMedia, Card, Box, CardContent, Typography, CardActions, Button } from '@mui/material';

//console.dir(CardMedia);
const MuiCard = () => {
  return (
    <Box width='300px'>
      <Card>
        <CardMedia 
          component='img'
          height='140px'
          image='https://cdn.britannica.com/38/2338-004-AE838B06/flag-Proprietor-state-Maryland-family-arms-Lord-1904.jpg'
          alt='unsplash image'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='div' >
            React
          </Typography>
          <Typography variant='body2' color='text.secondary'>
            Some words on line one will eventually lead you
            Some more words on line two
          </Typography>
        </CardContent>
        <CardActions>
          <Button size='small'>Share</Button>
          <Button size='small'>Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  )
}
export default MuiCard