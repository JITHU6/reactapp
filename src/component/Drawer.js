import React ,{useState}from 'react'   
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {
  Link
} from "react-router-dom";
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    fullList: {
      width: 'auto',
    },
    appBar: {
      position: 'relative',
      zIndex: 1400,
  
    },
    toolbar: theme.mixins.toolbar,
  }));

export default function TemporaryDrawer() {

    const users = [
      {
          index: 0,
          text: 'aaa',
          to: '/',
      },
      {
          index: 1,
          text: 'bbb',
          to: '/login',
      },
    ];
  
    const classes = useStyles();
    const [state, setState] = React.useState({  
      left: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };
  
    const list = (anchor) => (
      <div
        className={clsx(classes.list, {
          [classes.fullList]: anchor === 'top' || anchor === 'bottom',
        })}
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <List>
          {users.map(user => (
            <ListItem button key={user.text} component={Link}  to={user.to}>
              <ListItemIcon>{user.index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={user.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  
    return (
      <div>
        {['left'].map((anchor) => (
          <React.Fragment key={anchor}>
           
            <IconButton onClick={toggleDrawer(anchor, true)}  edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
                    <MenuIcon />
                </IconButton>
            <Drawer 
            anchor={anchor} 
            open={state[anchor]} 
            onClose={toggleDrawer(anchor, false)}
            classes={{
              paper: "side-nav"
            }}
            containerStyle={{paddin:200}}
            >
               <div className={classes.toolbar} />
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </div>
    );
  }