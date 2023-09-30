import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import ListItem from '@mui/material/ListItem';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TagIcon from '@mui/icons-material/Tag';
import { Link } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Billing from './Billing';
import Master from './Master';

const drawerWidth = 240;

export default function ClippedDrawer() {
  return (
    <>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            zIndex: theme => theme.zIndex.drawer + 1,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div"></Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: 'auto', marginTop: '60px' }}>
            <List>
              <Link to="/dashboard">
                <ListItem button to="/Dashboard">
                  <ListItemIcon>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItem>
              </Link>
              <Link to="/master">
                <ListItem button to="/Master">
                  <ListItemIcon>
                    <TagIcon />
                  </ListItemIcon>
                  <ListItemText primary="Master" />
                </ListItem>
              </Link>
              <Link to="/billing">
                <ListItem button to="/Billing">
                  <ListItemIcon>
                    <ReceiptLongIcon />
                  </ListItemIcon>
                  <ListItemText primary="Billing" />
                </ListItem>
              </Link>
            </List>
          </Box>
        </Drawer>
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            displey: 'flex',
            flexDirection: 'column',
            alignItem: 'center',
            justifyContent: 'center',
          }}
        >
          <Toolbar
            sx={{
              overflow: 'auto',
              flexGrow: 1,
              p: 3,
              displey: 'flex',
              flexDirection: 'column',
              alignItem: 'center',
              justifyContent: 'center',
            }}
          />

          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/master" element={<Master />} />
            <Route path="/billing" element={<Billing />} />
          </Routes>
        </Box>
      </Box>
    </>
  );
}
