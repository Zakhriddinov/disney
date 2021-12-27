import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectNewDisney } from "../../features/movie/movieSlice";
import { Header } from "../../utils/header";
import { Container, Content, Wrap } from "../../utils/movieStyles";

const NewDisney = (props) => {
  const movies = useSelector(selectNewDisney);

  return (
    <Container>
      <Header>New to Disney+</Header>
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

export default NewDisney;
