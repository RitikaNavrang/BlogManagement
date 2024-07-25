import * as React from 'react';
import {Box,Drawer,CssBaseline,AppBar,Toolbar,List,Typography,Divider,ListItem,ListItemButton,ListItemIcon,ListItemText} from '@mui/material';

// import Drawer from '@mui/material/Drawer';
// import CssBaseline from '@mui/material/CssBaseline';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import List from '@mui/material/List';
// import Typography from '@mui/material/Typography';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const drawerWidth = 240;

export default function Home() {
const [data, setData] = React.useState([]); 
const routes = [ 
    {title:"AddPost", link:"/addpost"}];
const navigate = useNavigate();

React.useEffect(() => {
    axios.get('https://localhost:7235/post/getAllPost', {
        headers: {
        'Content-Type': 'application/json'
        }
    })
        .then(response => {
        setData(response.data); 
        })
        .catch(error => {
        console.error(error);
        });
    }, []);
    
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
           Posts
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:'pink'
          },
        }}
        variant="permanent"
        anchor="left"
        
      >
        <Toolbar />
        {/* <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider /> */}
        <Typography style={{color:'white', textDecoration:'bold', fontSize:'30px', marginLeft:'40px',marginTop:'0'}}>
            Blog Studio
          </Typography>
        <List>
          {routes.map((text, index) => (
            <ListItem key={text.title} disablePadding onClick={() => navigate(text.link)}>
              <ListItemButton>
                <ListItemIcon style={{color:'white'}}>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.title} style={{color:'white'}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <div className="App">
          <div className="card-container"></div>
          {data.length > 0? (
            data.map(item => (
              <div key={item.id} className="card">
                <h2>{item.title}</h2>
                <img src={item.url} alt={"image not found"} className="card-image" />
                <p style={{ overflow: "hidden",  textWrap:'wrap', wordBreak:'break-word' }}>{item.content.slice(0,50)}</p>
                <h5>{item.publishedDate}</h5>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </Box>
    </Box>
  );
}
