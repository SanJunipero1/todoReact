
import Header from "./Components/Header/header"
import  "./App.css"
import Modal from "./Components/Header/modal/modal";
import Footer from "./Components/Footer";


function App() {
  
  return (
    <>
      <div className="main-content">
        <Header />
        <Modal />
        Hier Header und Main
      </div>

     

      <Footer />
    </>
  );
}

export default App