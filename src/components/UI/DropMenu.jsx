import { Button, Drawer, List, MenuItem } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

function DropMenu({ openMenu, closeMenu, list }) {
  return (
    <Drawer
      anchor='top'
      open={openMenu}
      onClose={closeMenu}
    >
      <List sx={{ width: '500px' }}>
        {list.map((item) => (
          <Link
            className='link'
            key={item.id}
            to={item.href}
          >
            <MenuItem>
              <Button
                onClick={closeMenu}
                sx={{ color: 'black' }}
              >
                {item.label}
              </Button>
            </MenuItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}

export default DropMenu;
