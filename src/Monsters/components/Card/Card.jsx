import React from "react";
import { Container, Title, Image, Description } from "./Card.styles";
const Card = ({ title, image_url, score, synopsis }) => {
  return (
    <Container className="card">
      <Title>{title}</Title>
      <Image src={image_url} alt="" />
      <p>{score}</p>
      <Description>{synopsis}</Description>
    </Container>
  );
};
export default Card;
