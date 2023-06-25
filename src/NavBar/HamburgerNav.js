import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const COLORS = {
  primaryDark: "#cccccc",
  primaryLight: "#0c0c0c",
};

const MenuLabel = styled.label`
  background-color: black;
  top: 6rem;
  right: 6rem;
  border-radius: 20px;
  height: 50px;
  width: 60px;
  cursor: pointer;
  z-index: 10000;
  margin-right:2200px;
  
  box-shadow: 0 1rem 3rem rgba(182, 237, 200, 0.3);
  text-align: center;
`;

const NavBackground = styled.div`
  position: fixed;
  // top: 6.5rem;
  // right: 6.5rem;
  
  background-size: 20%;
  background-repeat : no-repeat;
  height: 6rem;
  width: 0%;
  border-radius: 50%;
  z-index: 600;
  transform: ${(props) => (props.clicked ? "scale(80)" : "scale(0)")};
  transition: transform 0.8s;
  
`;

const Icon = styled.span`
  position: relative;
  background-color: ${(props) => (props.clicked ? "transparent" : "white")};
  width: 20px;
  height: 2px;
  display: inline-block;
  margin-top: 20px;
  transition: all 0.3s;

  &::before,
  &::after {
    content: "";
    background-color: white;
    width: 20px;
    height: 2px;
    display: inline-block;

    position: absolute;
    left: 0;
    transition: all 0.3s;
  }

  &::before {
    top: ${(props) => (props.clicked ? "0" : "-0.8rem")};
    transform: ${(props) => (props.clicked ? "rotate(135deg)" : "rotate(0)")};
  }

  &::after {
    top: ${(props) => (props.clicked ? "0" : "0.8rem")};

    transform: ${(props) => (props.clicked ? "rotate(-135deg)" : "rotate(0)")};
  }

  ${MenuLabel}:hover &::before {
    top: ${(props) => (props.clicked ? "0" : "-1rem")};
  }
  ${MenuLabel}:hover &::after {
    top: ${(props) => (props.clicked ? "0" : "1rem")};
  }
`;

const Navigation = styled.nav`
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 600;
  width: ${(props) => (props.clicked ? "15%" : "0")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};

  transition: width 0.8s, opacity 0.8s;
  background-color: black;
  
`;

const List = styled.ul`
  position: absolute;
  list-style: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 100%;
`;
const ItemLink = styled(NavLink)`
  display: inline-block;
  font-size: 2rem;
  font-weight: 300;
  text-decoration: none;
  color: white;
  padding: 1rem 2rem;

  
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;
    color: #cfcfcf;
    transform: translateX(1rem);
  }
`;

function HamburgerNav() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <>
      <MenuLabel htmlFor="navi-toggle" onClick={handleClick}>
        <Icon clicked={click}>&nbsp;</Icon>
      </MenuLabel>
      <NavBackground clicked={click}>&nbsp;</NavBackground>

      <Navigation clicked={click}>
        <List>
          <li>
            <ItemLink onClick={handleClick} to="/header">
              Home
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/video">
              Video
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/hidden-security">
              Hidden
            </ItemLink>
          </li>
          <li>
            <ItemLink onClick={handleClick} to="/">
              Logout
            </ItemLink>
          </li>
          {/* <li>
            <ItemLink onClick={handleClick} to="/contact">
              Contact Us
            </ItemLink>
          </li> */}
        </List>
      </Navigation>
    </>
  );
}

export default HamburgerNav;