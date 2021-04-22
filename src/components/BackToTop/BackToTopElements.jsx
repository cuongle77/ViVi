import styled from "styled-components";

export const BackToTopContainer = styled.div`
  position: fixed;
  bottom: 7%;
  right: ${({ toTop }) => (toTop ? "-5%" : "3%")};
  background-color: #272b2b;
  z-index: 1000;
  transition: all 0.5s;
  cursor: pointer;
  opacity: ${({ toTop }) => (toTop ? "0" : "1")};
  visibility: ${({ toTop }) => (toTop ? "hidden" : "visible")};
  i {
    display: block;
    font-size: 2.5rem;
    color: #fff;
    padding: 8px;
  }
`;
