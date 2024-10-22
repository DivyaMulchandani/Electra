import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import "./navbar.css"
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined';
import ExitToAppOutlinedIcon from '@mui/icons-material/ExitToAppOutlined';
import HowToRegOutlinedIcon from '@mui/icons-material/HowToRegOutlined';
import WhereToVoteOutlinedIcon from '@mui/icons-material/WhereToVoteOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import logo from "./logo2.svg"
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";

import "@fontsource/poppins"; // Defaults to weight 400
import "@fontsource/poppins/400.css"; // Specify weight
import "@fontsource/poppins/400-italic.css"; // Specify weight and style

const useStyles = makeStyles({
  root: {
    background: "#A1887F",
    padding: "0px",
    height: "100vh"
  },

  back:
  {
    background: "#D7CCC8"
  }
  ,
  text: {
    color: "#5D4037", fontWeight: 'bold'
  },
  text1:
  {
    color: '#795548'
  }
});

const drawerWidth = 310;

function ResponsiveDrawer(props) {
  const [phase, setPhase] = useState("");
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  useEffect(() => {
    setPhase(localStorage.getItem("Phase"));
  }, []); // Empty dependency array to run only once on mount

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };
   const classes = useStyles();
  const icons = [
    'InboxIcon', 'MailIcon'

  ];

  const drawer = (
    <div className={classes.root}>
      <Toolbar />
      <Link to={'/'}>
      <img src={logo} className="logos" />
      </Link>
      <List >
        <Link to={'/dashboard'} className='link'>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <EditCalendarOutlinedIcon />
              </ListItemIcon>
              <ListItemText className='navitem'
                primary="Dashboard" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to={'/profile'} className='link'>
          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <PermIdentityOutlinedIcon />
              </ListItemIcon>
              <ListItemText className='navitem'
                primary="Profile" />
            </ListItemButton>
          </ListItem>

          </Link>
          {/* <Link to={'/registration'} className='link'>

          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <HowToRegOutlinedIcon />
              </ListItemIcon>
              <ListItemText className='navitem'
                primary="Voter Registration" />
            </ListItemButton>
          </ListItem>
          </Link> */}
          {phase === "Registration Open" && (
            <Link to={'/enroll'} className='link'>
              <ListItem divider>
                <ListItemButton>
                  <ListItemIcon>
                    <BookmarkAddOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText className='navitem'
                    primary="Enroll as Candidate" />
                </ListItemButton>
              </ListItem>
            </Link>
          )}
          <Link to={'/votingarea'} className='link'>

          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <WhereToVoteOutlinedIcon />
              </ListItemIcon>
              <ListItemText className='navitem'
                primary="Voting Area" />
            </ListItemButton>
          </ListItem>
          </Link>
          <Link to={'/result'} className='link'>

          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <CommentOutlinedIcon />
              </ListItemIcon>
              <ListItemText className='navitem'
                primary="Result" />
            </ListItemButton>
          </ListItem>
          </Link>

          <Link to={'/'} className='link'>

          <ListItem divider>
            <ListItemButton>
              <ListItemIcon>
                <ExitToAppOutlinedIcon />
              </ListItemIcon>
              <ListItemText className='navitem'
                primary="Logout" />
            </ListItemButton>
          </ListItem>
          </Link>
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box >
      <CssBaseline />

      <IconButton
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer

          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer

          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;
