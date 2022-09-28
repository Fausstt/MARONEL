import { Close } from '@mui/icons-material';
import {
  AppBar,
  Box,
  Divider,
  IconButton,
  Modal,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';

function Basket({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box
        sx={{
          position: 'relative',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          height: { xs: '100%', sm: '90%', md: '50%' },
          width: { xs: '100%', sm: '90%', md: '50%' },
          bgcolor: 'background.paper',
          borderRadius: 3,
          border: '2px solid #000',
          boxShadow: 24,
        }}
      >
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Корзина</Typography>
          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Toolbar>

        <Divider
          sx={{ bgcolor: 'black' }}
          variant='fullWidth'
        />
      </Box>
    </Modal>
  );
}

export default Basket;
