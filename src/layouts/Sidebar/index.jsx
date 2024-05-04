import React from 'react';
import { Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Navigation from './Navigation/index.jsx';

const drawerWidth = 220;

const Sidebar = ({ open, setOpen }) => {
  const drawerWidthCollapsed = 47; // 아이콘만 보일 때의 너비

  const handleMouseEnter = () => {
    setOpen(true);
  };

  const handleMouseLeave = () => {
    setOpen(false);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: open ? drawerWidth : drawerWidthCollapsed,
        flexShrink: 0,
        transition: 'width 0.3s ease',
        '& .MuiDrawer-paper': {
          width: open ? drawerWidth : drawerWidthCollapsed,
          boxSizing: 'border-box',
          transition: 'width 0.3s ease',
        },
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <IconButton />
      <Divider />
      <Navigation open={open} />
    </Drawer>
  );
};

export default Sidebar;
