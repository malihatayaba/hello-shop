import "./App.css";

import Banner from "./Components/About/Banner";

import Bannercard from "./Components/About/Bannercard";
import Card from "./Components/About/Card";
import Footer from "./Components/About/Footer";
import Header from "./Components/About/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <Card></Card>
      <Bannercard></Bannercard>
      <Footer></Footer>
    </>
  );
}

export default App;
