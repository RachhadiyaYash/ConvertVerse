import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom"; // Import Link from React Router

const Footer = () => {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us:</span>
        </div>

        <div>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="twitter" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="google" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="instagram" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href="" className="me-4 text-reset">
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon icon="gem" className="me-3" />
                ConvertVerse
              </h6>
              <p>ConvertVerse - Your All-in-One Conversion Toolkit</p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="/intrestCalculator" className="text-reset">
                  {" "}
                  {/* Update */}
                  Calculators
                </Link>
              </p>
              <p>
                <Link to="/Imageconverter" className="text-reset">
                  {" "}
                  {/* Update */}
                  Image Operations
                </Link>
              </p>

              <p>
                <Link to="/firstlattercapital" className="text-reset">
                  {" "}
                  {/* Update */}
                  String Operations
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/privacy" className="text-reset">
                  {/* Update */}
                  Privacy & Policy
                </Link>
              </p>
              <p>
                <Link to="/terms" className="text-reset">
                  {" "}
                  {/* Update */}
                  Terms & Conditions
                </Link>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Vadodra , Gujrat India.
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@convertverse.com
              </p>

              <p>
                <MDBIcon icon="print" className="me-3" /> +91 72854-56777
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4"
        style={{ backgroundColor: "  rgb(50, 50, 50)", color: "white" }}
      >
        © 2024 Copyright:
        <a className="text-reset fw-bold" href="#maincaroselcontainer">
          ConvertVerse
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
