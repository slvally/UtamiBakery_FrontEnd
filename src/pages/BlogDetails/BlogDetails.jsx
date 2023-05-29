import {
  Box,
  CircularProgress,
  Typography,
  ImageList,
  ImageListItem,
  Grid,
  Divider,
  Fab,
  createTheme,
  ThemeProvider,
  Container,
  CssBaseline,
  Button,
} from "@mui/material";
import { Icon } from "@iconify/react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

import { useState, useEffect } from "react";
import Axios from "axios";
import FsLightbox from "fslightbox-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
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
const BlogDetails = () => {
  const [blog, setBlog] = useState(null);
  const [prods, setProds] = useState(null);
  const [previous, setPrevious] = useState("");
  const [next, setNext] = useState("");
  const id = window.location.pathname.split("/").pop();

  const [toggler, setToggler] = useState(false);

  useEffect(() => {
    Axios.get(`https://utamibakery-backend.vercel.app/blogs/${id}`).then(
      (response) => {
        setBlog(response.data.data.blog);
        console.log(response.data.data.blog);
      }
    );

    Axios.get("https://utamibakery-backend.vercel.app/blogs").then(
      (response) => {
        const blogs = response.data.data.blogs;
        const currentIndex = blogs.findIndex((blog) => blog._id === id);

        if (currentIndex > 0) {
          setPrevious(blogs[currentIndex - 1]._id);
        }
        if (currentIndex < blogs.length - 1) {
          setNext(blogs[currentIndex + 1]._id);
        }

        console.log(previous);
        console.log(response.data.data.blogs[currentIndex - 1]._id);
        setProds(blogs);
      }
    );
  }, [id]);
 
  return blog == null ? (
    <CircularProgress />
  ) : (
    <div>
      <Navbar />
      <ThemeProvider theme={theme}>
        <Container
          style={{
            margin: "3em auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            // border: '1px solid #F0F0F0',
          }}
        >
          {/* <Typography component="h1" variant="h5">
            blog detail
          </Typography> */}

          <CssBaseline />
          <Box
            maxWidth={1800}
            sx={{
              borderRadius: "12px",
              border: "1px solid #F0F0F0",
              width: "100%",
              height: "400px",
              margin: "2em",
            }}
          >
            <img src="https://via.placeholder.com/1800x400" />
          </Box>
          <Typography
            variant="h4"
            style={{ marginBottom: "22px", textAlign: "left", width: "100%" }}
          >
            {blog.title}
          </Typography>
          <Typography component="h2" style={{ textAlign: "justify" }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            vel laudantium sapiente ea cupiditate deleniti. Aut eius possimus
            explicabo ab provident. Harum nesciunt, consequuntur molestias
            deleniti amet iusto voluptatum incidunt! Officiis possimus eos nobis
            iure eius voluptas ad animi accusantium porro deleniti vel atque,
            dignissimos praesentium, vitae enim ullam? Ratione harum ipsam
            libero non? Quasi perferendis voluptatibus esse magni ipsam impedit
            minus, molestiae hic praesentium eius? Maxime eius voluptates facere
            corporis nemo quod hic ea voluptatem totam tempore nihil, incidunt
            consequuntur mollitia animi temporibus voluptas, cumque similique
            sunt quis omnis! Facilis, totam voluptate. Commodi consectetur
            nulla, rem iusto nostrum quia reiciendis, maxime vel autem itaque
            repellendus hic corporis, esse consequatur quam. Reiciendis quos
            similique unde excepturi repellendus id incidunt. Quibusdam
            perspiciatis saepe blanditiis necessitatibus eum non iste placeat
            velit nobis libero, possimus eos inventore voluptate cum delectus,
            alias et rem harum, accusamus corporis. Explicabo ratione, nisi
            asperiores voluptatem impedit earum.
          </Typography>
          <Container
            style={{
              borderRadius: "12px",
              marginTop: "4em",
              display: "flex",
              height: "80px",
              justifyContent: "space-between",
              alignItems: "center",
              // flexDirection: "column",
              // border: "1px solid #F0F0F0",
            }}
          >
            <Button
              variant="outlined"href={`/blog/${previous}`}
              style={{
                border: "1px solid #F0F0F0",
                borderRadius: "12px",
                padding: "12px 28px",
                
              }}
            >
              <Typography
                style={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <ArrowBackIcon
                  sx={{ width: 40, height: 40, marginRight: "8px" }}
                  
                />
                Back
              </Typography>
            </Button>

            <Button
              variant="outlined"
              style={{
                border: "1px solid #F0F0F0",
                borderRadius: "12px",
                padding: "12px 28px",
                
              }}href={`/blog/${next}`}
            >
              <Typography
                style={{
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Next
                <ArrowForwardIcon
                  sx={{ width: 40, height: 40, marginLeft: "8px" }}
                  
                />
              </Typography>
            </Button>
          </Container>
        </Container>
      </ThemeProvider>
      <Footer />
    </div>
  );
};

export default BlogDetails;
