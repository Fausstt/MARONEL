import { Menu, MenuItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function MenuList({ openMenu, closeMenu, list }) {
  return (
    <Menu
      id='lame-menu'
      anchorEl={openMenu}
      open={Boolean(openMenu)}
      onClose={closeMenu}
    >
      {list.map((item) => (
        <Link
          className='link'
          key={item.id}
          to={item.href}
        >
          <MenuItem
            onClick={closeMenu}
            sx={{ color: 'black' }}
          >
            {item.lable}
          </MenuItem>
        </Link>
      ))}
    </Menu>
  );
}

export default MenuList;
