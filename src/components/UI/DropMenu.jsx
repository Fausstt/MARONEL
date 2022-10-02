import { Button, Drawer, List, MenuItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function DropMenu({ openMenu, closeMenu, list }) {
  return (
    <Drawer
      anchor='left'
      open={openMenu}
      onClose={closeMenu}
    >
      <List sx={{ width: '300px' }}>
        {list.map((item) => (
          <MenuItem>
            <Link
              className='link'
              key={item.id}
              to={item.href}
            >
              <Button
                onClick={closeMenu}
                sx={{ color: 'black' }}
              >
                {item.lable}
              </Button>
            </Link>
          </MenuItem>
        ))}
      </List>
    </Drawer>
  );
}

export default DropMenu;
