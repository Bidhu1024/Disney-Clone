import styled from "styled-components";
import HomeLogo from "../Assets/home-background.png";
import ImageSlider from "./ImageSlider";
import NewDisney from "./NewDisney";
import Recommends from "./Recommends";
import Viewers from "./Viewers";
import Originals from "./Originals";
import Trendings from "./Trending";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import db from "../firebase";
import setMovies from "../features/Movie/MoviesSlice";
import { selectUserName } from "../features/user/userSlice";
const Home = (props) => {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);

  let Recommends = [];
  let NewDisney = [];
  let Originals = [];
  let Trendings = [];

  useEffect(() => {
    db.collection("movies").onSnapshot((snapshot) => {
      snapshot.docs.map((doc) => {
        console.log(Recommends);
        switch (doc.data().type) {
          case "recommend":
            Recommends = [...Recommends, { id: doc.id, ...doc.data() }];
            break;
          case "new":
            NewDisney = [...NewDisney, { id: doc.id, ...doc.data() }];
            break;
          case "original":
            Originals = [...Originals, { id: doc.id, ...doc.data() }];
            break;
          case "trending":
            Trendings = [...Trendings, { id: doc.id, ...doc.data() }];
            break;
          default:
            return [];
        }
      });
    });

    dispatch(
      setMovies({
        recommend: Recommends,
        newDisney: NewDisney,
        original: Originals,
        trending: Trendings,
      })
    );
  }, [userName]);
  return (
    <Container>
      <ImageSlider />
      <Viewers />
      <Recommends />
      <NewDisney />
      <Originals />
      <Trendings />
    </Container>
  );
};

const Container = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    background: url(${HomeLogo}) center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

export default Home;
