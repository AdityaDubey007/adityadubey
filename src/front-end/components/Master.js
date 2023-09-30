import React from 'react';
import { Container } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Router, Route, Routes } from 'react-router-dom';

import { Link } from 'react-router-dom'; // Import Link from React Router
import CustomerPage from './CustomerPage';
function MyCard({ title, content, link }) {
  return (
    <Card
      component={Link}
      to={link}
      style={{ textDecoration: 'none', margin: '10px' }}
    >
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
}
export default function Master() {
  return (
    <>
      <Container maxWidth="md" sx={{ mt: 5, ml: 0 }}>
        <h1>Master</h1>
        <div
          style={{
            display: 'flex',
            // alignItems: 'flex-start',
          }}
        >
          <Link to="/customer">
            <MyCard
              title="Customer"
              content="Read or Create customer data"
              link="/customer"
            />
          </Link>
          <Link to="/items">
            <MyCard
              title="Items"
              content="Read or Create Items data"
              link="/item"
            />
          </Link>
          <Routes>
            <Route path="/customer" element={<CustomerPage />} />
            <Route path="/item" element={<itemPage />} />
          </Routes>
        </div>
      </Container>
    </>
  );
}
