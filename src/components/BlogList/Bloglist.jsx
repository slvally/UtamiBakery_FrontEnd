import * as React from "react";
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
  CardActionArea,
  Paper,
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


const Blog = ({ title, desc, date, id}) => {
  return (
    <Card sx={{ width: 300, height: 320 }} href={`/blog/${id}`}>
    
    <CardActionArea
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        alignItems: 'center',
      }}
      href={`/blog/${id}`}
    ><CardMedia
      sx={{ height: 136 }}
      image="/static/images/cards/contemplative-reptile.jpg"
      title="green iguana"
    />
        <CardContent style={{ height:"134px", overflow:"hidden"}}>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" style={{textAlign:"justify"}}>
        {desc}
      </Typography>
    </CardContent>
    <CardActions style={{bottom:"0", position:"relative", display:"block"}}>
      <Button size="small">Share</Button>
    </CardActions>
    </CardActionArea>
    
  </Card>
  );
};

export default Blog;
