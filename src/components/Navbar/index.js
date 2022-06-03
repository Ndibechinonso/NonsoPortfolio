import React, { useEffect, useState } from "react";
import "./Navbar.css";
import styled from "styled-components";

const StyledHamburger = styled.div`
  position: relative;
  flex-direction: column;
  padding: 16px 2px;
  opacity: 0;
  display: none;
  @media screen and (max-width: 700px) {
    opacity: 1;
    display: flex;
  }
  .hamburger-btn {
    width: 28px;
    height: 2px;
    background-color: #000000;
    box-shadow: 0 2px rgba(255, 101, 47, 0.2);
    transition: all 0.5s cubic-bezier(0.42, 0.01, 0, 1.04);
    opacity: ${({ menuOpen }) => (menuOpen ? "0" : "1")};
  }
  ::before,
  ::after {
    content: "";
    position: absolute;
    width: 28px;
    height: 2px;
    background-color: #000000;
    box-shadow: 0 2px rgba(255, 101, 47, 0.2);
    transition: all 0.5s cubic-bezier(0.42, 0.01, 0, 1.04);
  }
  ::before {
    transform: ${({ menuOpen }) => (menuOpen ? "" : "translateY(-7px)")};
    transform: ${({ menuOpen }) => (menuOpen ? "rotate(45deg)" : "")};
  }
  ::after {
    transform: translateY(7px);
    transform: ${({ menuOpen }) => (menuOpen ? "rotate(-45deg)" : "")};
  }
`;
const StyledHamburgerMenu = styled.div`
  background: #ffffff;
  top: 85px;
  position: fixed;
  width: 100vw;
  transition: all 0.5s ease-in-out;
  transform: ${({ menuOpen }) => (!menuOpen ? "translateY(-500px)" : "")};
  transition: all 0.5s cubic-bezier(0.42, 0.01, 0, 1.04);
  border-bottom: 1px solid #000000;
`;

export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [deviceSize, changeDeviceSize] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if (deviceSize > 700) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [deviceSize]);

  const setMenuState = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  };
  return (
    <div className="navbarContainer" id="navbar">
      <div className="navbar">
        <div className="name">
          <a href="#navbar">Ndibe Nonso.</a>
        </div>
        <div className="links">
          <div className="deskop-links">
            <div className="about">
              <a href="#intro">HOME</a>
            </div>{" "}
            <div className="about">
              <a href="#anime">ABOUT</a>
            </div>{" "}
            <div className="portfolio">
              <a href="#portfolio">PORTFOLIO</a>
            </div>
            <div className="contact">
              <a href="#footer">CONTACT</a>
            </div>{" "}
          </div>
          <StyledHamburger onClick={setMenuState} menuOpen={menuOpen}>
            <div className="hamburger-btn"></div>
          </StyledHamburger>
        </div>
      </div>
      <StyledHamburgerMenu menuOpen={menuOpen}>
        <div className="mobile-links">
          <div className="about">
            <a href="#intro" onClick={setMenuState}>
              HOME
            </a>
          </div>{" "}
          <div className="about">
            <a href="#anime" onClick={setMenuState}>
              ABOUT
            </a>
          </div>{" "}
          <div className="portfolio">
            <a href="#portfolio" onClick={setMenuState}>
              PORTFOLIO
            </a>
          </div>
          <div className="contact">
            <a href="#footer" onClick={setMenuState}>
              CONTACT
            </a>
          </div>{" "}
        </div>
      </StyledHamburgerMenu>
    </div>
  );
}
