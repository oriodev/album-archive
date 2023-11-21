import React from 'react';

import { Container, Stack, Button } from '@mui/material';

// icons
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SortIcon from '@mui/icons-material/Sort';

const NavBar = () => {
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
        <h1>album archive</h1>
        <Stack direction="row" spacing={3}>
          <Button
            startIcon={<AddCircleIcon />}
            variant="contained"
            size="small"
          >
            Add Album
          </Button>
          <Button startIcon={<SortIcon />} variant="contained" size="small">
            Sort Albums
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default NavBar;
