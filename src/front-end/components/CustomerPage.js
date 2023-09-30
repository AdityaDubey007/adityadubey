import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function CustomerPage() {
  // State to manage customer data and form inputs
  const [customers, setCustomers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    pan: '',
    gst: '',
    status: 'Active', // Default status
  });
  // Function to handle form submission
  const handleAddCustomer = () => {
    // Validate and add the customer data to the customers state
    // You can implement validation logic here
    setCustomers([...customers, formData]);
    setFormData({
      name: '',
      address: '',
      pan: '',
      gst: '',
      status: 'Active',
    });
  };
  return (
    <>
      <div>
        {/* Display existing customers */}
        {customers.map((customer, index) => (
          <Card key={index}>
            <CardContent>
              <Typography variant="h6">{customer.name}</Typography>
              <Typography variant="body2">
                Address: {customer.address}
              </Typography>
            </CardContent>
          </Card>
        ))}

        <form>
          <input
            type="text"
            placeholder="Customer Name"
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
          />
          {/* Include input fields for other customer data */}
          <Button variant="contained" onClick={handleAddCustomer}>
            Add Customer
          </Button>
        </form>
      </div>
    </>
  );
}
export default CustomerPage;
