import Header from "./Components/Header/header";
import "./App.css";
import Modal from "./Components/Header/modal/modal";
import Footer from "./Components/Footer";
import Main from "./Components/Main";

function App() {
  return (
    <>
      <div className="main-content">
        <Header />
        <Modal />
        <Main />
      </div>

      <Footer />
    </>
  );
}

export default App;
