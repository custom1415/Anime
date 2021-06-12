import styled from "styled-components";
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  padding: 20px;
  place-content: center;
  place-items: center;
  grid-gap: 20px;
`;
export const Error = styled.div`
  display: grid;
  place-items: center;
`;

export const Msg = styled.h1`
  text-align: center;
  font-size: 35px;
  font-weight: lighter;
  border-left: 3px solid #ff0157;
  padding-left: 12px;
`;
