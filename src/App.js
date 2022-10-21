import React from "react";
import "./App.css";
import Footer from "./component/footer";
import Howto from "./component/howto";
import Landing from "./component/lander";
import Nav from "./component/nav/nav";
import Newarrivel from "./component/newarrivel";
import Products from "./component/products";
import Whatmakeus from "./component/whatmakeus";
import Whatsappbot from "./component/whatsappbot";
function App() {
  return (
    <div className="App">
      <Nav />
      <Landing />
      <Howto />
      <Whatmakeus />
      <Newarrivel />
      <Products />
      <Footer />
      <Whatsappbot />
    </div>
  );
}

export default App;
