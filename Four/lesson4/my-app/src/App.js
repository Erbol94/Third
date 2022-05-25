import './App.css';
import MainPage from "./pages/mainPage/MainPage";
import ContactPage from "./pages/contactPage/ContactPage";
import MainPageHw from "./DZ4/pages_HW/MainPageHw";
import ContactPageHw from "./DZ4/pages_HW/ContactPageHw";

function App() {
  const user = [
    {
      name: "Erbol",
      age: 28,
      position: "Front-End"
    },
    {
      name: "Sanjar",
      age: 21,
      position: "Front-End"
    },
    {
      name: "Alina",
      age: 21,
      position: "UX/UI"
    },
    {
      name: "Aisezim",
      age: 18,
      position: "UX/UI"
    },
  ]

  return (
      <div>
        {/*<MainPage users={users}/>*/}
        {/*<ContactPage />*/}
        <MainPageHw user={user}/>
        <ContactPageHw />
      </div>
  );
}

export default App;
