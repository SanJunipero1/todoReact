import Header from "./Components/Header/header";
import "./App.css";
import Footer from "./Components/Footer";

import CreateList from "./Components/Main/createList/creatList";
import H2 from "./Components/Main/createList/h2";
import H2Div from "./Components/Main/createList/h2div";

import Main from "./Components/Main";

function App() {
  return (
    <>
      <div className="main-content">
        <Header />
        <CreateList />
        Hier Header und Main
        <Main />
      </div>

      <Footer />
    </>
  );
}

export default App;
