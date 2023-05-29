import * as React from "react";
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import {
  Box,
  Container,
  ThemeProvider,
  Typography,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { Height } from "@mui/icons-material";
import { Loader } from "@googlemaps/js-api-loader"
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
// const loader = new Loader({
//   apiKey: "YOUR_API_KEY",
//   version: "weekly",
//   ...additionalOptions,
// });

// loader.load().then(async () => {
//   const { Map } = await google.maps.importLibrary("maps");

//   map = new Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// });

// initMap();

const containerStyle = {
  width: "400px",
  height: "350px",
};

// Replace YOUR_API_KEY with your actual Google Maps API key
const apiKey = "AIzaSyDHKz0ICIUcPrGU8f4kNarH8EE3tRfqUqg";
const center = {
  lat: -3.745,
  lng: -38.523,
};


const CProfile = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container
        style={{
          margin:'3em auto',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:'column',
          // border: '1px solid #F0F0F0',
        }}
      >
        <Typography component="h1" variant="h5">
          Tentang Kami
        </Typography>

        <CssBaseline />
        <Box
        maxWidth={1800}
          sx={{
            border: '1px solid #F0F0F0',
            width:'100%',
            height:'400px',
            margin:'2em',
          }}
        ><img src="https://via.placeholder.com/1800x400" /></Box>
        <Typography variant="h4" style={{marginBottom:"22px"}}>
          Nama Perusahaan
        </Typography>
        <Typography component="h2" style={{textAlign:"center"}}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque vel laudantium sapiente ea cupiditate deleniti. Aut eius possimus explicabo ab provident. Harum nesciunt, consequuntur molestias deleniti amet iusto voluptatum incidunt! Officiis possimus eos nobis iure eius voluptas ad animi accusantium porro deleniti vel atque, dignissimos praesentium, vitae enim ullam? Ratione harum ipsam libero non? Quasi perferendis voluptatibus esse magni ipsam impedit minus, molestiae hic praesentium eius? Maxime eius voluptates facere corporis nemo quod hic ea voluptatem totam tempore nihil, incidunt consequuntur mollitia animi temporibus voluptas, cumque similique sunt quis omnis! Facilis, totam voluptate. Commodi consectetur nulla, rem iusto nostrum quia reiciendis, maxime vel autem itaque repellendus hic corporis, esse consequatur quam. Reiciendis quos similique unde excepturi repellendus id incidunt. Quibusdam perspiciatis saepe blanditiis necessitatibus eum non iste placeat velit nobis libero, possimus eos inventore voluptate cum delectus, alias et rem harum, accusamus corporis. Explicabo ratione, nisi asperiores voluptatem impedit earum.
        </Typography>
        <container
          style={{
            margin:'3em auto',
            display: "flex",
            width:'100%',
            justifyContent: "space-between",
            // alignItems: "center",
            // flexDirection:'column',
            border: '1px solid #F0F0F0',
          }}>
            <div>
              <Typography variant="h4" >
                Identitas Perusahaan
              </Typography>
            </div>
            <div>
              <Box
                maxWidth={600}
                  sx={{
                    border: '1px solid #F0F0F0',
                    width:'400px',
                    height:'350px',
                }}
              >
                <LoadScript googleMapsApiKey={apiKey}>
                  <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10} />
                </LoadScript>
              </Box>
            </div>
          
          
        </container>
        
      </Container>
    </ThemeProvider>
  );
};

export default CProfile;
