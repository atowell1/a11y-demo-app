import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./Menu.scss"
import Aria from './Aria';

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [ariaOpen, setAriaOpen] = React.useState(false)
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const openAriaPage = () => {
    console.log('getting here? ');
    <Aria open={setAriaOpen}/>
  }

  return (
    <div className='container'>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={openAriaPage()}>Aria</MenuItem>
        <MenuItem onClick={handleClose}>Charts</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
