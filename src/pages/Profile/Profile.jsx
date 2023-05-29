import React from 'react';
import { Container, Grid, Box, TextField, Button, Typography, InputAdornment,} from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import LockIcon from '@mui/icons-material/Lock';

const Profile = () => {
  const containerStyle = {
    maxWidth: 1800,
    position: "relative",
    width: '100%',
    display:'flex',
    justifyContent:"center",
    alignItems:"center",
    padding:"2em 0",
  };

  const mainLeftStyle = {
    display: 'flex',
    // height:'600px',
    position: "relative",
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid #F0F0F0',
    maxWidth:'400px',
    // justifyContent:'space-between',
    padding:'2em 0',
    boxSizing: 'border-box',
    borderRadius:'8px',
  };


  const mainRightStyle = {
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #F0F0F0',
    maxWidth:'600px',
    padding:'2em',
    borderRadius:'8px',
  };

  const circleStyle = {
    borderRadius: '50%',
    width: 100,
    height: 100,
    backgroundColor: 'gray',
    margin: '2em 0',
  };

  const inputStyle = {
    display: 'none',
  };
  const userLoggedIn = JSON.parse(window.localStorage.getItem('userLoggedIn'));

  return (
    <Container style={containerStyle} sx={{height:{md:'100vh'}}}>
      <Grid container style={{boxSizing:"border-box", justifyContent:"center"}} gap={2}>
        <Grid item xs={12} md={6}  style={mainLeftStyle}>
          <Typography variant="h4">Nama User</Typography>
          <Typography variant="h6">@username</Typography>
          <div style={circleStyle}></div>
          <input
            accept="image/*"
            style={inputStyle}
            id="contained-button-file"
            type="file"
          />
          <label htmlFor="contained-button-file" style={{marginBottom:"22px"}}>
            <Button variant="contained" component="span">
              Upload Foto
            </Button>
          </label>
          <Typography variant="body2"style={{marginBottom:"3em"}} >Syarat foto: ...</Typography>
          <div >Utami Bakery</div>
        </Grid>
        <Grid item xs={12} md={6} style={mainRightStyle} sx={{justifyContent:{xs:'center'}, alignItems:{xs:"center", md:" flex-start"},}}>
          <Typography variant="h3" style={{marginBottom:"1em"}}>Edit Profile</Typography>
          <Box component="form" sx={{display: {xs:'flex', md:'block'}, width:{xs:'100%'}, flexDirection:"column", justifyContent:{xs:'center'}, alignItems:{xs:"center"}, }}>
            <TextField sx={{ marginBottom:"1em", fontSize:"8px", width:"100%", maxWidth:"400px"}} label="Nama" value={userLoggedIn.name == null ? null : userLoggedIn.name}/>
            <TextField sx={{ marginBottom:"1em", fontSize:"8px", width:"100%", maxWidth:"400px"}} label="Email" />
            <TextField sx={{ marginBottom:"1em", fontSize:"8px", width:"100%", maxWidth:"400px"}} label="Nomor Telepon" value={userLoggedIn.telephone}/>
          </Box>
          <div style={{display:"flex", gap:"1em", marginTop:"1em"}}>
            <Button variant="contained" color="primary" style={{ marginTop: 'auto', maxWidth:"220px", padding:"8px 40px", margin:"0" }}>
            Simpan
            </Button>
            <Button variant="contained" color="primary" style={{ marginTop: 'auto', maxWidth:"220px", padding:"8px 40px", margin:"0" }}>
              Ubah
            </Button>
            <Button variant="contained" color="primary" style={{ marginTop: 'auto', maxWidth:"220px", padding:"8px 40px", margin:"0" }}>
              Batalkan
            </Button>
          </div>
          
        </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
