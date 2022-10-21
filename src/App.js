import Header from "./Components/Header/header";
import "./App.css";
import Footer from "./Components/Footer";

import CreateList from "./Components/Main/createList/creatList";

import Main from "./Components/Main";

function App() {
  return (
    <>
      <div className="main-content">
        <Header />
        <Main />
      </div>

      <Footer />
    </>
  );
}

export default App;
