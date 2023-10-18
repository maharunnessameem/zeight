import { Route, Routes } from "react-router-dom";
import Header from "./Shared/Header/Header";
import "./App.css"
import Footer from "./Shared/Footer/Footer";
import Banner from "./Home/Banner/Banner";


function App() {
  return (
    <div className="">
      <Header></Header>
      <Banner></Banner>
      {/* <Routes>
        <Route></Route>
      </Routes> */}
      <Footer></Footer>
    </div>
  );
}

export default App;
