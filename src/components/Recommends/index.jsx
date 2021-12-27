import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectRecommend } from "../../features/movie/movieSlice";
import { Header } from "../../utils/header";
import { Container, Content, Wrap } from "../../utils/movieStyles";
const Recommends = () => {
  const movies = useSelector(selectRecommend)
  return (
    <Container>
      <Header>Recommended for you</Header>
      <Content>
        {movies &&
          movies.map((movie, key) => (
            <Wrap key={key}>
              {movie.id}
              <Link to={`/detail/` + movie.id}>
                <img src={movie.cardImg} alt={movie.title} />
              </Link>
            </Wrap>
          ))}
      </Content>
    </Container>
  );
};
export default Recommends;
