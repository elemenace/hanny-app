import {Routes,Route} from "react-router";
import HomePage from "../Pages/HomePage";
import MainLayout from "../Layout/MainLayout";
import About from "../Pages/About"
import Gallery from "../Pages/Gallery";


const Router = () => {
  return (
    <Routes>
        <Route element={<MainLayout />}>
           <Route path="/" element={<HomePage />} />
           <Route path="/about" element={<About/>}/>
           <Route path="/gallery" element={<Gallery/>}/>


        </Route>
    </Routes>



  )
}

export default Router