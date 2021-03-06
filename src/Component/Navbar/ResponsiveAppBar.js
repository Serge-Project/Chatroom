import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { signOut } from '../Auth/authentification'

function ButtonAppBar(props) {

  const Logout = (event) => {
    event.preventDefault()
    signOut()
    console.log("we bout to logout")     
  }


  return (
    <Box sx={{ flexGrow: 1, position:'relative' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Chatroom
          </Typography>
          <Button color="inherit" onClick={Logout}>Logout</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default ButtonAppBar
