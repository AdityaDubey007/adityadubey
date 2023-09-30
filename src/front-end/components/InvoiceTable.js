// import React, { useState } from 'react';
// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   TextField,
// } from '@mui/material';
// import XLSX from 'xlsx'; // You'll need to install this library

// function InvoiceTable() {
//   const [data, setData] = useState([]); // State to hold Excel data
//   const [filteredData, setFilteredData] = useState([]); // State to hold filtered data
//   const [searchTerm, setSearchTerm] = useState('');

//   // Function to handle file upload and data extraction
//   const handleFileUpload = e => {
//     const file = e.target.files[0];
//     const reader = new FileReader();

//     reader.onload = e => {
//       const binaryData = e.target.result;
//       const workbook = XLSX.read(binaryData, { type: 'binary' });
//       const sheetName = workbook.SheetNames[0];
//       const sheet = workbook.Sheets[sheetName];
//       const jsonData = XLSX.utils.sheet_to_json(sheet);

//       setData(jsonData);
//     };

//     reader.readAsBinaryString(file);
//   };

//   // Function to filter data based on Invoice Number
//   const handleSearch = () => {
//     const filtered = data.filter(item =>
//       item['Invoice ID'].toString().includes(searchTerm)
//     );
//     setFilteredData(filtered);
//   };

//   // Function to view details of an invoice
//   const viewDetails = invoiceId => {
//     // Implement this function to display all details of the selected invoice
//     // You can use a dialog or a modal to display the details
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleFileUpload} accept=".xlsx" />
//       <TextField
//         label="Search by Invoice ID"
//         value={searchTerm}
//         onChange={e => setSearchTerm(e.target.value)}
//       />
//       <Button variant="contained" color="primary" onClick={handleSearch}>
//         Search
//       </Button>
//       <TableContainer component={Paper}>
//         <Table>
//           <TableHead>
//             <TableRow>
//               <TableCell>Invoice ID</TableCell>
//               <TableCell>Customer Name</TableCell>
//               <TableCell>Item Name</TableCell>
//               <TableCell>Amount</TableCell>
//               <TableCell>View</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {filteredData?.map(invoice => (
//               <TableRow key={invoice.id}>
//                 <TableCell>{invoice['Invoice ID']}</TableCell>
//                 <TableCell>{invoice['Customer Name']}</TableCell>
//                 <TableCell>{invoice['Item Name']}</TableCell>
//                 <TableCell>{invoice['Amount']}</TableCell>
//                 <TableCell>
//                   <Button
//                     variant="contained"
//                     color="primary"
//                     onClick={() => viewDetails(invoice['Invoice ID'])}
//                   >
//                     View
//                   </Button>
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// }

// export default InvoiceTable;

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from '@mui/material';

function InvoiceTable({ invoices }) {
  return (
    <TableContainer component={Paper} sx={{ mt: 5 }}>
      <Table>
        <TableHead style={{ backgroundColor: 'blue', color: 'white' }}>
          <TableRow>
            <TableCell>Invoice ID</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Item Name (s)</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices?.map(invoice => (
            <TableRow key={invoice.id}>
              <TableCell>{invoice.invoiceId}</TableCell>
              <TableCell>{invoice.customerName}</TableCell>
              <TableCell>{invoice.itemName}</TableCell>
              <TableCell>{invoice.amount}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary">
                  View
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InvoiceTable;
