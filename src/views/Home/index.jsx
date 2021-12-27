import React, { useEffect } from "react";
import ImgSlide from "../../components/ImgSlide";
import Viewers from "../../components/Viewers";
import NewDisney from "../../components/NewDisney";
import Recommends from "../../components/Recommends";
import Original from "../../components/Original";
import Trending from "../../components/Trending";
import { Container } from "./style";
import { useDispatch, useSelector } from "react-redux";
import db from "../../firebase";
import { selectUserName } from "../../features/user/userSlice";
import { setMovies } from "../../features/movie/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  let recommends = [];
  let newDisneys = [];
  let originals = [];
  let trending = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(recommends);
        switch (doc.data().type) {
          case "recommend":
            recommends = [...recommends, { id: doc.id, ...doc.data() }];
            break;

          case "new":
            newDisneys = [...newDisneys, { id: doc.id, ...doc.data() }];
            break;

          case "original":
            originals = [...originals, { id: doc.id, ...doc.data() }];
            break;

          case "trending":
            trending = [...trending, { id: doc.id, ...doc.data() }];
            break;
        }
      });

      dispatch(
        setMovies({
          recommend: recommends,
          newDisney: newDisneys,
          original: originals,
          trending: trending,
        })
      );
    });
  }, [userName]);
  return (
    <Container>
      <ImgSlide />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Original />
      <Trending />
    </Container>
  );
};
export default Home;
