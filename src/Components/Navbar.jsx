import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
        <div className="container">
          <a className="navbar-brand" href="/">
            Convertverse
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarMain"
            aria-controls="navbarMain"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Calculators
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/agecounter">
                      Age Calculator
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/intrestcalculator">
                      Intrest Calculator
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/unitconverter">
                      Unit Converter
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/currencyconverter">
                      Currency Converter
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/bmicalculator">
                      BMI Calculator
                    </Link>
                  </li>
                </ul>
              </li>
              {/* textoperatons */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Text Oprations
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/uppercase">
                      Uppercase
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/lowercase">
                      Lowercase
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/togglecase">
                      Togglecase
                    </Link>
                  </li>

                  <li>
                    <Link className="dropdown-item" to="/removespace">
                      Space Remover
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/firstlattercapital">
                      AlphaCapCreator
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Image */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Image Operations
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/Imagecompressor">
                      Image Compressor
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/Imageconverter">
                      JPEG to PNG
                    </Link>
                  </li>
                </ul>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
