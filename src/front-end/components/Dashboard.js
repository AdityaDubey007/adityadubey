import React from 'react';
// import ClippedDrawer from './ClippedDrawer';
import { Container, InputAdornment, TextField } from '@mui/material';
import { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InvoiceTable from './InvoiceTable';
// import { maxHeight } from '@mui/system';
export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5, ml: 0 }}>
        <h1>Dashboard</h1>
        <TextField
          id="search"
          type="search"
          label="Search"
          value={searchTerm}
          onChange={handleChange}
          sx={{ width: 450 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <InvoiceTable />
      </Container>
    </>
  );
}
