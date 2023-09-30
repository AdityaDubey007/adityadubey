import React from 'react';
import ClippedDrawer from './front-end/components/ClippedDrawer';
// import Dashboard from './front-end/components/Dashboard';
// import Billing from './front-end/components/Billing';
// import Master from './front-end/components/Master';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import CustomerPage from './front-end/components/CustomerPage';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <ClippedDrawer />
      </BrowserRouter>
    </>
    // <Router>
    //   <div>
    //     <ClippedDrawer />
    //     <Routes>
    //       <Route path="/Dashboard" component={<Dashboard />} />
    //       <Route path="/Master" component={<Master />} />
    //       <Route path="/Billing" component={<Billing />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}
