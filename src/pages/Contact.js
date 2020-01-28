import React from "react";
import styled from "styled-components";
import Typing from "react-typing-animation";

import Bg from "../images/background.jpg";

const Styled = styled.div`
  /* background: no-repeat url("${Bg}");   */

`;

const Img = styled.img`
  width: 100vw;
  height: 100%;
`;

const Contact = () => {
  return (
    <>
      <Styled>
        <h1>Contact</h1>
        <Typing loop={true} startDelay={1000}>
          <span>This page is created by react</span>
          <Typing.Backspace count={29} />
        </Typing>
      </Styled>
    </>
  );
};

export default Contact;
