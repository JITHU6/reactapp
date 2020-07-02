import React ,{useState}from 'react'   
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Login from './Login'
import ArticleList from './ArticleList'
import SignUp from './SignUp'
import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import {
  BrowserRouter as Router,
  Switch,
  Route,
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
import TemporaryDrawer from './Drawer'
import PersistentDrawerLeft from './PersiDrawer'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  menuItems: {
    textDecoration: 'none',
    color: '#FFF'
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  appBar: {
    position: 'relative',
    zIndex: 1400,

  },
  toolbar: theme.mixins.toolbar,
}));

const NavBar = () => {
  const classes = useStyles(); 
  return(

        <div className={classes.root}>
          
          <PersistentDrawerLeft/>
        </div>
           
  )
}

export default NavBar;


