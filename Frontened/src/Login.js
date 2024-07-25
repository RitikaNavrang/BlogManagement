import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { TextField, Button, Box, Typography, Container, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './simpleimage.jpg';
import Link from '@mui/material/Link';

const Login = () => {
  const [email, setEmail] = useState(''); 
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [responseSuccess, setResponseSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`https://localhost:7235/user/login?email=${email}&password=${password}`);
      setResponseSuccess(response.data);
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  useEffect(() =>{
    console.log(responseSuccess);
      if (responseSuccess) {
        navigate('/home');
    }
  },[responseSuccess]);

return (
    <Container maxWidth="100%" sx={{backgroundColor: 'lightblue', height:"100vh", width:"100%", mx:"0", backgroundRepeat:'no-repeat',backgroundSize:'cover' ,backgroundImage:`url(${backgroundImage})`}}>
    
    <Container  sx={{  textAlign:'left', height:'150px', width:"30%", paddingTop:'90px', paddingLeft:'0', marginLeft:'200px'}}>
        <Typography variant="h3" component="div" sx={{zIndex:'2', paddingTop: '25px', paddingLeft:'0', fontSize:'8vw',fontFamily:' "Prata", serif'}}>
          Blog Studio
        </Typography>
        <Typography variant="h5" component="div" sx={{ paddingTop: '5px', 
        fontFamily: '"Playwrite CU", cursive',
        fontSize:'1.5vw',
        fontStyle: 'normal',
        paddingLeft:'100px',
        zIndex:'2'}}>Write your first blog here</Typography>
      </Container>

      <Box
        sx={{   
          marginTop: 15,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor:'white',
          width:'500px',
          height:'350px',
          paddingTop:'25px',
          border:'2px grey',
          marginLeft:'55%',
          boxShadow:'0 0 20px rgba(0, 0, 0, 1)',
          transition: 'transform 0.3s'
        }}
      >
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            variant="contained"
            sx={{ mt: 2, mb: 3, marginLeft: 'auto', marginRight: 'auto', display:'block' }}
          >
            Sign In
          </Button>
        </Box>
        <Link href="/signUp" variant="body2">
           Create account / Register Yourself!
        </Link>
      </Box>
    {responseSuccess? (
        <>
        <Alert severity="success" style={{width:'300px',  marginLeft:'56%', marginTop:'20px'}}>Login Successfully!</Alert>
        </>
    ) : (
        <Alert severity="error" style={{width:'300px',  marginLeft:'59%', marginTop:'20px'}} >You are not registered!</Alert>
    )}
    </Container>
  );
}

export default Login;