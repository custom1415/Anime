import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10px 15px;
  margin: 20px;
  border: 6px solid #fff;
  height: 100%;
  background: #fff;
  box-shadow: 0px 3px 16px 3px rgba(0, 0, 0, 0.2);
  transition: 0.5s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 6px 40px 3px rgba(0, 0, 0, 0.3);
    transform: translateY(-16px);
  }
`;
export const Title = styled.h1`
  font-family: "poppins";
  font-size: 16px;
  margin: 8px;
`;
export const Image = styled.img`
  margin: 8px;
  width: 80%;
  height: auto;
`;

export const Description = styled.p`
  margin: 12px;
`;
