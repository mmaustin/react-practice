import {AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from '@mui/material';
import { CatchingPokemon, KeyboardArrowDown } from '@mui/icons-material';
import { useState } from 'react';

const MuiNavbar = () => {

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = e => setAnchorEl(e.currentTarget);
  const handleClose = e => setAnchorEl(null);

  return (
    <AppBar position='fixed'>
      <Toolbar>
        <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
          <CatchingPokemon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{flexGrow: 1}}>
          POKEMONAPP
        </Typography>
        <Stack direction='row' spacing={2}>
          <Button color='inherit' onClick={()=> console.log('button clicked')}>Features</Button>
          <Button color='inherit'>Pricing</Button>
          <Button color='inherit'>About</Button>
          <Button
            aria-controls={open ? 'resources-menu' : undefined}
            color='inherit'
            id='resources-button'
            onClick={handleClick}
            aria-haspopup='true'
            aria-expanded={open ? 'ture' : undefined}
            endIcon={<KeyboardArrowDown/>}
          >
            Resources
          </Button>
          <Button color='inherit'>Login</Button>
        </Stack>
        <Menu
          anchorEl={anchorEl}
          id='resources-menu'
          open={open}
          MenuListProps={{
            'aria-labelledby': 'resources-button',
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
}
export default MuiNavbar