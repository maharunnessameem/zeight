
import { Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Services from "./Component/Services";
import PopularCourses from "./Component/PopularCourses";
import TopSellingCourses from "./Component/TopSellingCourses";
import AllCourses from "./Component/AllCourses";


function App() {
  return (
    <div className="bg-amber-50">
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route path="/popular" element={<PopularCourses></PopularCourses>}></Route>
        <Route path="/topselling" element={<TopSellingCourses></TopSellingCourses>}></Route>
        <Route path="/allcourses" element={<AllCourses></AllCourses>}></Route>
      </Routes>
      {/* <Home></Home> */}
    </div>
  );
}

export default App;
