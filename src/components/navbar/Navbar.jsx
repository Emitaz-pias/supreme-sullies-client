import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { Slide, useScrollTrigger } from '@mui/material';
import PropTypes from 'prop-types';
import CssBaseline from '@mui/material/CssBaseline';
import Fade from '@mui/material/Fade';
import Fab from '@mui/material/Fab';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: 'lightgrey',
  '&:hover': {
    backgroundColor: 'grey',
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

const Navbar = (props) => {
  function HideOnScroll(props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
    });

    return (
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    );
  }

  HideOnScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };
  function ScrollTop(props) {
    const { children, window } = props;

    const trigger = useScrollTrigger({
      target: window ? window() : undefined,
      disableHysteresis: true,
      threshold: 100,
    });

    const handleClick = (event) => {
      console.log('topped');
      const anchor = (event.target.ownerDocument || document).querySelector(
        '#back-to-top-anchor',
      );

      if (anchor) {
        anchor.scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        });
      }
    };

    return (
      <Fade in={trigger}>
        <Box
          onClick={handleClick}
          role="presentation"
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          {children}
        </Box>
      </Fade>
    );
  }

  ScrollTop.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
  };

  const [anchorEl,setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  // const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
    
  };



  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <Box sx={{padding:'0.1em'}} onClick={handleMenuClose}><CloseIcon/></Box>
      <MenuItem >
          <Link style={{textDecoration:"none",color:'black'}} to ='/about-us'>
            About Us
          </Link>
      </MenuItem>
      <MenuItem>

        <Link style={{textDecoration:"none",color:'black'}} to ='/accessories'>
        Accessories
        </Link>

      </MenuItem>
      <MenuItem>

        <Link style={{textDecoration:"none",color:'black'}} to='/agro'>Agro</Link>

      </MenuItem>
      <MenuItem>

        <Link style={{textDecoration:"none",color:'black'}} to='/IT'>IT</Link>

      </MenuItem>
      <MenuItem>
        <Link style={{textDecoration:"none" ,color:'black'}} to='/garments'>Garments</Link>  
      </MenuItem>
      <MenuItem>
        <Link style={{textDecoration:"none" ,color:'black'}} to='/blog'>Blog</Link>  
      </MenuItem>
    </Menu>
  );

  return (
    <Box  id="back-to-top-anchor" sx={{ flexGrow: 1 }}>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar position="static" sx={{ backgroundColor: '#fff' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              aria-label="open drawer"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h3"
              component="div"
            >
              <Link style={{textDecoration:"none" ,color:'black'}} to='/'>
              <img style={{ width: '4em', height: '2em',paddingTop:'0.2em' }} src={logo} alt="logo" />
              </Link>
            </Typography>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ display: { xs: 'none', md: 'flex',color:'grey' } }}>
              <MenuItem >    <Link  style={{textDecoration:"none",color:'black'}} to='/about-us'>About Us</Link>   </MenuItem>
              <MenuItem>     <Link style={{textDecoration:"none",color:'black'}} to='/accessories'>Accessories</Link>   </MenuItem>
              <MenuItem>    <Link style={{textDecoration:"none",color:'black'}} to='/agro'>Agro</Link>    </MenuItem>             
              <MenuItem>    <Link style={{textDecoration:"none",color:'black'}} to='/IT'>IT</Link>  </MenuItem>
              <MenuItem>   <Link  style={{textDecoration:"none",color:'black'}}to='/garments'>Garments</Link>   </MenuItem>
              <MenuItem>  <Link style={{textDecoration:"none" ,color:'black'}} to='/blog'>Blog</Link></MenuItem>
            </Box>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      {renderMobileMenu}
    </Box>
  );
}

export default Navbar