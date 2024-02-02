import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Link from 'next/link';
import asset from '@/json/asset';

interface Props {
 
  window?: () => Window;
}

const drawerWidth = 240;
const navItems = ['Home', 'About'];

export default function Header(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Stablo
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" color='inherit' sx={{boxShadow: "none"}}>
        <Toolbar sx={{margin: "auto"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
          </IconButton>
          <Box sx={{ display: 'flex'}}>
          <Link href="/">
              <Button sx={{ color: 'black', mr: 2  }}>
                Home
              </Button></Link>
          <Typography
            variant="h6"
            component="div"
            sx={{  display: { xs: 'none', sm: 'block' } }}
          >
            <center><img src={asset.nav} alt="" height={30}/></center>
          </Typography>
          <Link href="/about">
              <Button sx={{ color: 'black', ml: 2 }}>
                About
              </Button></Link>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {/* {navItems.map((item) => (
              <Link href="/">
              <Button key={item} sx={{ color: '#fff' }}>
                {item}
              </Button></Link>
            ))} */}
            {/* <Link href="/">
              <Button sx={{ color: 'black' }}>
                Home
              </Button></Link>
              <Link href="/about">
              <Button sx={{ color: 'black' }}>
                About
              </Button></Link> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}