import styled from "styled-components";

export const BackToTopContainer = styled.div`
  position: fixed;
  bottom: 7%;
  right: ${({ show }) => (show ? "3%" : "-5%")};
  background-color: #272b2b;
  z-index: 999;
  transition: all 0.5s;
  cursor: pointer;
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  i {
    display: block;
    font-size: 2.5rem;
    color: #fff;
    padding: 8px;
  }
`;
