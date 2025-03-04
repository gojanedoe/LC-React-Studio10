// TODO: Add the useRef hook to the import from 'react'
import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const boxSize = 240 + "px";
const accentColor = "darkmagenta";

const ShadowedBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: auto;
  height: ${boxSize};
  padding: 0px;
  margin: 0px 0px 35px;
  border: 3px solid white;
  cursor: pointer;
  box-shadow: 10px 10px ${accentColor};
  filter: grayscale(100%);
  transition: filter 0.5s ease-in-out;
  &:hover {
    filter: grayscale(0%);
    transition: filter 0.5s ease-in-out;
  }
`;

const NameOverlay = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 16pt;
  color: white;
  background-color: black;
  width: ${boxSize};
  height: 5px;
  bottom: 36px;
  opacity: 0;
  transition: all 0.3s ease-out;
  ${ShadowedBox}:hover & {
    height: 40px;
    bottom: 12px;
    opacity: 0.7;
    transition: all 0.3s ease-in;
  }
`;

// PRIMARY COMPONENT
const PhotoBox = (props) => {
  // TODO: Create a ref called boxRef to identify a unique instance of this component as the one that was clicked. Don't forget to add the necessary hook to the import from 'react'
  const boxRef = useRef();

  console.log(boxRef);

  return (
    // TODO: Add a ref attribute and pass in boxRef
    // Note: ShadowedBox is a styled div, not a component, so we can put the ref directly on it
    // TODO: Add an onClick attribute and give it the handleOpen prop that was passed in from the Stylists component
    <ShadowedBox onClick={props.handleOpen} ref={boxRef}>
      <NameOverlay>{props.stylist.name}</NameOverlay>
      <img
        src={`images/${props.stylist.image}`}
        width={boxSize}
        height={boxSize}
        alt={props.stylist.name}
      />
    </ShadowedBox>
  );
};

PhotoBox.propTypes = {
  stylist: PropTypes.object.isRequired,
  handleOpen: PropTypes.func.isRequired
};

export default PhotoBox;
