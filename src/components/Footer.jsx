import React from "react";
import "./FooterStyle.css";

const Footer = () => {
  return (
    <div className="footer-32892">
        <div className="site-section">
            <div className="container">
            <div className="row">
                <div className="col-md-7 mb-7">
                <h3>About Us</h3>
                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam itaque unde facere repellendus, odio et iste voluptatum aspernatur ratione mollitia tempora eligendi maxime est, blanditiis accusamus. Incidunt, aut, quis!</p>
                <ul className="list-unstyled quick-info mb-4">
                    <li><a href="#" className="d-flex align-items-center"><span className="icon mr-3 icon-phone"></span> +1 291 3912 329</a></li>
                    <li><a href="#" className="d-flex align-items-center"><span className="icon mr-3 icon-envelope"></span> info@gmail.com</a></li>
                </ul>

                <form action="#" className="subscribe">
                    <input type="text" className="form-control" placeholder="Enter your e-mail" />
                    <input type="submit" className="btn btn-submit" value="Send" />
                </form>
                </div>

                <div className="col-md-1 mb-1">
                    <div></div>
                </div>

                <div className="col-md-4 mb-4">
                    <h3>Instagram</h3>
                    <div className="row gallery">
                        <div className="col-6">
                        <a href="#"><img src="images/img_1.jpg" alt="Image" className="img-fluid" /></a>
                        <a href="#"><img src="images/img_2.jpg" alt="Image" className="img-fluid" /></a>
                        </div>
                        <div className="col-6">
                        <a href="#"><img src="images/img_3.jpg" alt="Image" className="img-fluid" /></a>
                        <a href="#"><img src="images/img_4.jpg" alt="Image" className="img-fluid" /></a>
                        </div>
                    </div>
                </div>
                
                
                
            </div>
            </div>
        </div>

        <script src="js/jquery-3.3.1.min.js"></script>
        <script src="js/popper.min.js"></script>
        <script src="js/bootstrap.min.js"></script>
    </div>
  )

}

export default Footer;