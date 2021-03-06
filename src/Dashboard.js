import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Button from '@material-ui/core/Button';
import TouchAppIcon from '@material-ui/icons/TouchApp'
import LibraryAddIcon from '@material-ui/icons/LibraryAdd'
import Popper from '@material-ui/core/Popper';
import Routes from './Route.js';




function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Shoe Store by KA
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
      
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',


  },
  btn: {
    padding: '3px 6px',
    width: '150px',
    '& > *': {
      margin: theme.spacing(1),
    },

  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    // backgroundImage: 'url(./newshoes.png)',
    backgroundColor: '#7659ff',

    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(9),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  iconbtn:{
    color: 'white',

  },
  alrtpaper: {
    border: '1px solid',
    padding: theme.spacing(4),
    backgroundColor: theme.palette.background.paper,
  },
 
  fixedHeight: {
    height: 240,
  },
}));
{/* <img className={classes.img} alt="complex" src="./shoespicsidebar.png" /> */ }
export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  // for alert
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const openn = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" fontStyle="oblique" variant="h7" color="#7659ff" noWrap className={classes.title}>
            Shoe Store
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon onClick={handleClick}/>
             
            </Badge>
            <Popper id={id} open={openn} anchorEl={anchorEl}>
        <div className={classes.alrtpaper}>Welcome to Shoe Store.</div>
      </Popper>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer

        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        {/* <img className={classes.img} alt="complex" src="./shoespicsidebar.png" /> */}
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>


        <Link >
          <IconButton   aria-label="upload picture" component="span">
            <ShoppingCartIcon fontSize="large" className={classes.iconbtn} />
          </IconButton>
          <Button variant="contained" color="primary" className={classes.btn} onClick={(e) => {
            e.preventDefault();
            window.location.href = "/"
          }}>Home</Button> </Link>
        <Link>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <LibraryAddIcon fontSize="large" className={classes.iconbtn}/>
          </IconButton>
          <Button variant="contained" color="primary" className={classes.btn} onClick={(e) => {
            e.preventDefault();
            window.location.href = "/Launch"
          }}>Launch</Button> </Link>
        <Link>
          <IconButton color="primary" aria-label="upload picture" component="span">
            <TouchAppIcon fontSize="large" className={classes.iconbtn}/>
          </IconButton>
          <Button variant="contained" color="primary" className={classes.btn} onClick={(e) => {
            e.preventDefault();
            window.location.href = "/product"
          }}>Product</Button> </Link>



      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Routes />

            {/* Chart */}
            {/* <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <Chart />
              </Paper>
            </Grid> */}
            {/* Recent Deposits
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                <Deposits />
              </Paper>
            </Grid> */}
            {/* Recent Orders */}
            {/* <Grid item xs={12}>
              <Paper className={classes.paper}>
                <Orders />
              </Paper>
            </Grid> */}
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}