import { Search } from '@mui/icons-material';
import { InputBase } from '@mui/material';
import { alpha, styled } from '@mui/system';
import React from 'react';

const SearchIcon = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('xs')]: {
      width: '0ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

function SearchCastom({ placeholder, setSearhFocus }) {
  return (
    <>
      <SearchIcon
        onFocus={() => setSearhFocus(true)}
        onBlur={() => setSearhFocus(false)}
      >
        <SearchIconWrapper>
          <Search />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholder}
          inputProps={{ 'aria-label': 'search' }}
        />
      </SearchIcon>
    </>
  );
}

export default SearchCastom;
