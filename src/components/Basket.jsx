import { Close } from '@mui/icons-material';
import {
  Box,
  Divider,
  IconButton,
  Modal,
  Toolbar,
  Typography,
} from '@mui/material';
import React from 'react';
import BasketListL from './BasketList';

const styles = {
  root: {
    position: 'relative',
    height: { xs: '100%', sm: '90%', md: '50%' },
    width: { xs: '100%', sm: '90%', md: '50%' },
    bgcolor: 'background.paper',
    borderRadius: 3,
    border: '2px solid #000',

    boxShadow: 24,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  }
}

function Basket({ open, onClose, BasketList }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
    >
      <Box sx={styles.root}>
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }} children={'Корзина'} />
          <IconButton onClick={onClose} children={<Close />} />
        </Toolbar>

        <Divider
          sx={{ bgcolor: 'black' }}
          variant='fullWidth'
        />
        <BasketListL />
      </Box>
    </Modal>
  );
}

export default Basket;
