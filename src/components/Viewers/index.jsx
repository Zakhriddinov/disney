import React from "react";
import { data } from "../../utils/viewers";
import { Container, Wrap } from "./style";

const Viewers = () => {
  return (
    <Container>
      {data.map(({ id, img, video }) => (
        <Wrap key={id}>
          <img src={img} alt="" />
          <video autoPlay={true} loop={true} playsInline={true}>
            <source src={video} type="video/mp4" />
          </video>
        </Wrap>
      ))}
    </Container>
  );
};
export default Viewers;
