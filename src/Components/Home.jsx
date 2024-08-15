import React from "react";
import RandomQuoteGenerator from "./Qoutes";
import "./Home.css";
import QRCodeGenerator from "./Qrcode";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* Carousel*/}
      <div id="yash"></div>
      <div className="container-fluid " id="maincaroselcontainer">
        <div className="container d-flex my-2 mt-0">
          <div className="py-5 text-left">
            <div>
              <br />
              <br />
              <br />
              <h4 id="hellotextmaincarousl">
                HELLO WELCOME TO CONVERTVERSE......!
              </h4>
              <br />
              <br />
              <h2 id="slogancarouesl">
                ConvertVerse - Your All-in-One Conversion Toolkit
              </h2>
              <br />
              <br />
              <h4 id="hellotextmaincarousl">Who Wee are?</h4>
              <br />
              <p id="homeslidetext">
                "ConvertVerse is dedicated to simplifying everyday conversions
                and computations for users across various domains. Our platform
                offers a comprehensive suite of calculators spanning essential
                areas such as BMI, interest, units, currency, QR code
                generation. Moreover, we understand the importance of
                versatility, which is why ConvertVerse goes beyond traditional
                calculator functionalities. With additional tools for string
                manipulation and image operations, ConvertVerse becomes your
                all-in-one solution for diverse computational needs. Whether
                you're a health enthusiast calculating BMI, a finance
                professional managing interests, or a tech-savvy individual
                generating QR codes, ConvertVerse provides an intuitive and
                user-friendly platform for seamless conversions. Our commitment
                to user satisfaction drives us to continually enhance our
                features, ensuring that ConvertVerse remains your go-to toolkit
                for all conversion requirements. Join us in simplifying your
                daily calculations and conversions with ConvertVerse."
              </p>
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* Quotes */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div
              className="container  bg-dark text-white  py-3 d-flex justify-content-center align-items-center"
              style={{ height: "150px" }}
            >
              <h2>A Quote that can make your day....</h2>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="contaiiner    p-5 text-center"
              style={{ height: "150px", backgroundColor: "rgb(240, 236, 236)" }}
            >
              <h5>
                <RandomQuoteGenerator />
              </h5>
            </div>
          </div>
        </div>
      </div>
      <br />

      {/* features */}
      <div className="container-fluid bg-dark text-white">
        <br />
        <br />
        <div className="container">
          <div className="text-center">
            <h3 className="pt-3 pb-2">FEATURES</h3>
            <h2 className="pb-3">
              Your Experience Gets Better And Better Over Time With US
            </h2>
            <div class="container">
              <div class="row">
                <div class="col-sm-4 mb-3">
                  <div
                    class="bg-light p-3 text-dark"
                    style={{ backgroundColor: " rgb(240, 236, 236)" }}
                  >
                    <h5>Image Operations</h5>
                  </div>
                </div>
                <div class="col-sm-4 mb-3">
                  <div
                    class="bg-light p-3 text-dark"
                    style={{ backgroundColor: " rgb(240, 236, 236)" }}
                  >
                    <h5>Text Operations</h5>
                  </div>
                </div>
                <div class="col-sm-4 mb-3">
                  <div
                    class="bg-light p-3 text-dark"
                    style={{ backgroundColor: " rgb(240, 236, 236)" }}
                  >
                    <h5>Calculators</h5>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <br />
          </div>
        </div>
      </div>

      {/* customer  */}
      <div className="container-fluid" id="maincaroselcontainer">
        <div className="container text-center py-5">
          <h2>Trusted by 20000+ Users From Pan India</h2>
        </div>
        <div class="container text-center pb-5">
          <div class="row">
            <div class="col-sm-4 mb-3">
              <div class=" p-3 text-dark">
                <h1>100%</h1>
                Satisfaction
              </div>
            </div>
            <div class="col-sm-4 mb-3">
              <div class=" p-3 text-dark">
                <h1> 600K</h1>
                Happy Users
              </div>
            </div>
            <div class="col-sm-4 mb-3">
              <div class=" p-3 text-dark">
                <h1>20k+ </h1>
                Monthly Visitors
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why us */}
      <div class="container-fluid bg-dark text-white py-5">
        <div className="container">
          <div class="row">
            <div class="col-md-3 d-flex justify-content-center align-items-center">
              <div>
                <div
                  class="d-flex justify-content-center px-5 align-items-center"
                  style={{ height: "100%" }}
                >
                  <h1 className="pt-3">ConvertVerse</h1>
                </div>
              </div>
            </div>
            <div class="col-md-9">
              <div style={{ height: "auto" }}>
                <h4 className="py-4 px-3">Why ConvertVerse..?</h4>
                <p className="py-3 px-3">
                  "Unlock the potential of seamless conversions with
                  ConvertVerse. Designed with versatility and efficiency in
                  mind, ConvertVerse offers an array of powerful tools to
                  streamline your daily tasks. From calculating BMI to managing
                  financial interests, converting units, generating QR codes,
                  and beyond, our comprehensive suite of tools empowers you to
                  tackle any conversion challenge with ease.
                  <br />
                  <br />
                  At ConvertVerse, we prioritize user experience and convenience
                  above all else. Our intuitive platform ensures that whether
                  you're a seasoned professional or a newcomer to the world of
                  conversions, you'll find everything you need to succeed. With
                  a commitment to continual improvement, we're dedicated to
                  providing you with the best-in-class tools and resources,
                  ensuring that your journey with ConvertVerse is both
                  productive and rewarding.
                  <br />
                  <br />
                  Experience the difference for yourself. Join the ConvertVerse
                  community today and discover why thousands of users trust us
                  to simplify their conversion needs."
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <br />

      <div class="container-fluid">
        <div class="row">
          <div class="col-md-8 d-flex align-items-center justify-content-center">
            <div
              class="container p-3"
              id="betafeatures"
              style={{ backgroundColor: "rgb(240, 236, 236)", height: "550px" }}
            >
              <br />
              <h2 style={{ fontSize: "2.1rem" }}>Try Our Beta* Features</h2>
              <p class="p-2">
                "As part of our unwavering commitment to serving our valued
                customers with excellence, we uphold the belief that customers
                are the cornerstone of our success. Continually striving to
                exceed expectations, we embark on a journey of continuous
                improvement, where each addition to our platform reflects our
                dedication to providing unparalleled experiences.
                <br />
                <br />
                With this ethos at our core, we are thrilled to announce the
                integration of new features into our platform. Our{" "}
                <strong>QRcode generator</strong>, a vital tool for businesses
                seeking efficiency and accuracy, has been enhanced to deliver
                even greater functionality and precision. Experience the
                seamless transition as we introduce innovative capabilities,
                empowering you to elevate your digital presence with confidence
                and professionalism.
                <br />
                <br />
                As your trusted partner in digital innovation, we remain
                committed to fostering growth and success. Join us on this
                journey, where your experience evolves alongside our dedication
                to excellence, ensuring that together, we reach new heights of
                achievement."
              </p>
            </div>
          </div>

          <div
            class="col-md-4 d-flex align-items-stretch"
            style={{ height: "550px" }}
          >
            <div
              class="container bg-dark text-white p-3 text-center"
              style={{ overflowY: "auto" }}
              id="scroler"
            >
              <h4 class="p-3">Introducing the All New QR Code Generator..</h4>
              <QRCodeGenerator />

              <div class="scrollable-content text-left">
                <div class="p-3">
                  <br />
                  <strong>Instruction: </strong>
                  <br /> "Welcome to our QR code generator! Please note that
                  this service is currently in its initial phase, and bugs or
                  errors may occur. Kindly proceed with caution and report any
                  issues you encounter for improvement. Thank you for your
                  understanding."
                </div>
                <div class="p-3">
                  <strong> Warning:</strong>
                  <br />
                  "Attention: This QR code generator is in its initial phase of
                  development. While we strive for accuracy and reliability,
                  bugs and errors may occur unexpectedly. We kindly remind users
                  that the service is provided as-is, and we do not assume
                  responsibility for any issues or consequences arising from the
                  use of generated QR codes. Use at your own risk."
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Home;
