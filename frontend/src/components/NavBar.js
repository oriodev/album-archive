import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setSort } from '../reducers/sorting';

import { Container, Stack, Button, Typography } from '@mui/material';

// icons
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SortIcon from '@mui/icons-material/Sort';

const NavBar = ({ formOpen, setFormOpen }) => {
  const sortStyle = useSelector((state) => state.sorting.value);

  const dispatch = useDispatch();

  const sortHandler = () => {
    if (sortStyle === 'highToLow') {
      dispatch(setSort('lowToHigh'));
    } else if (sortStyle === 'lowToHigh') {
      dispatch(setSort('highToLow'));
    }
  };

  return (
    <Container
      sx={{
        marginTop: 5,
        marginBottom: 5,
      }}
    >
      {/* nav bar */}
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={3}
      >
        <h1 sx={{ color: 'secondary' }}>Album Archive</h1>
        <Stack direction="row" spacing={3}>
          <Button
            startIcon={<AddCircleIcon />}
            variant="contained"
            size="small"
            onClick={() => setFormOpen(!formOpen)}
          >
            Add Album
          </Button>
          <Button
            startIcon={<SortIcon />}
            variant="contained"
            size="small"
            onClick={sortHandler}
          >
            Sort Albums
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default NavBar;
