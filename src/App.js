
import Header from "./Components/Header/header"
import  "./App.css"
import Modal from "./Components/Header/modal/modal";
import Footer from "./Components/Footer";
import CreateList from "./Components/Main/createList/creatList";
import H2 from "./Components/Main/createList/h2";
import H2Div from "./Components/Main/createList/h2div";




function App() {
  
  return (
    <>
      <div className="main-content">
        <Header />
        <Modal />
        <CreateList  />
        Hier Header und Main
        
      </div>

     

      <Footer />
    </>
  );
}

export default App