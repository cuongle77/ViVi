import styled from "styled-components";

export const MainPageTitle = styled.div`
  position: relative;
  overflow: hidden;
  padding-top: 240px;
  padding-bottom: 180px;
  text-align: center;
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  z-index: 1;

  @media (min-width: 740px) and (max-width: 1023px) {
    padding-top: 150px;
    padding-bottom: 120px;
  }

  @media (max-width: 739px) {
    padding-top: 140px;
    padding-bottom: 100px;
  }
`;
