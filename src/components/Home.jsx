import Header from "./Header";
import Slider from "./Slider";
import Navbar from "./Navbar";
import Contact from "./Contact";
import Footer from "./Footer";
import Body from "./Body";
import styled from "styled-components";
export default function Home() {
  return (
    <HomeContainer>
      <Header />
      <Navbar />
      <Slider />
      <Body />
      <Contact />
      <Footer />
    </HomeContainer>
  );
}
const HomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: rgb(16 25 29);
  height: auto;
`;
