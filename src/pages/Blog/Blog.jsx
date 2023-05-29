import React, { useRef, useState, useEffect } from 'react';
import Bloglist from '../../components/BlogList/Bloglist';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Axios from 'axios';
import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
  CssBaseline,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Grid,
  Paper,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";
const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },
  palette: {
    primary: {
      main: "#662577",
      darker: "#DFDFDF",
    },
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Blog = () =>
{
  const [prods, setprods] = useState(null);
  useEffect(() => {
    Axios.get('https://utamibakery-backend.vercel.app/blogs').then((response) => {
      setprods(response.data.data.blogs);
      console.log(response.data.data.blogs);
    });
  }, []);
  return(
    <div>
       <ThemeProvider theme={theme}>
      <Navbar />
     
      <Typography
        gutterBottom

        variant="h4"
        component="div"
        sx={{ margin: "0 1em", textAlign:"center" }}
      >
        Blog
      </Typography>
      <Box sx={{ padding:"1.5em" }}>
      {
        
        prods == null ? <CircularProgress />
        : (
          
          <Grid container sx={{justifyContent:"center"}} spacing={2}>
            {prods.map((blogs, index)  => (
              <Grid item key={index} >
                <Bloglist 
                id={blogs._id}
                title={blogs.title}
                desc={blogs.description}
                date={blogs.date}
                />
              </Grid>
            ))}
          </Grid>
        )
      }
      </Box>
   
    
    <Footer />
    </ThemeProvider>
    </div>
  );
};

export default Blog;
