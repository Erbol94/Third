import './App.css';
import MainPage from "./lesson7/pages/mainPage/MainPage";
import ContactPage from "./lesson7/pages/contactPage/ContactPage";
import AboutPage from "./lesson7/pages/aboutPage/AboutPage";
import {Routes, Route} from "react-router-dom";
import Menu from "./lesson7/components/menu/Menu";
import PortfolPage from "./lesson7/pages/portfolPage/PortfolPage";
import Header from "./lesson7/components/header/Header";
import Footer from "./lesson7/components/footer/Footer";
import Discription from "./lesson7/components/discription/Discription";
import BlogsPage from "./lesson7/pages/blogsPage/BlogsPage";
import BlogOne from "./lesson7/components/blogOne/BlogOne";
import Layout from "./lesson7/components/layouts/Layout";
import LayoutBack from "./lesson7/components/layouts/LayoutBack";

// import SecondPage from "./pages/secondPage/SecondPage";
// import CountPage from "../../../lesson5/my-app/src/pages/countPage/CountPage";
// import AboutPage from "./lesson7/pages/aboutPage/AboutPage";

function App() {
  return (
    // <div>
    //     {/*<h1>DZ6_Shakeev_Erbol_12-01</h1>*/}
    //     {/*<SecondPage />*/}
    //     {/*<MainPage />*/}
    // </div>

      <div>
          {/*<Header />*/}
          <Routes>
              <Route path='/' element={<Layout/>}>
                  <Route index element={<MainPage />}/>
                  <Route path='/Contact' element={<ContactPage />}/>
                  <Route path='/About' element={<AboutPage />}/>
                  <Route path='/Port' element={<PortfolPage/>}/>
                  <Route path='/Discription' element={<Discription />}/>
                  <Route path='/Blogs' element={<BlogsPage/>} />

              </Route>
              <Route path='/' element={<LayoutBack/>}>
                  <Route path='/Blogs/:name' element={<BlogOne />} />
              </Route>

          </Routes>
          {/*<Footer/>*/}
      </div>
  );
}

export default App;
