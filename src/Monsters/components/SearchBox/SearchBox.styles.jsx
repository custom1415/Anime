import styled from "styled-components";
export const Container = styled.div`
  padding: 20px;
  width: 100%;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SearchBox = styled.input`
  width: 50%;
  padding: 6px;
  font-size: 20px;
`;

export const Heading = styled.h1`
  text-align: center;
  margin: 15px;
`;
export const Search = styled.button`
  background: #000;
  margin-left: 8px;
  cursor: pointer;
  outline: none;
  border: none;
  padding: 8px 12px;
  font-family: "poppins";
  font-size: 14px;
    transition: 0.6s;
    color: white;
  &:hover {
    transform: scale(1.1);
  }
`;
