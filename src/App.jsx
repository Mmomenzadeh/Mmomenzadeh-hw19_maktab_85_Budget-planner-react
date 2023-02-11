import "./App.css";
import Footer from "./Components/UI/Footer/Footer";
import Header from "./Components/UI/Header/Header";
import Main from "./Components/UI/Main/Main";
import styled from "@emotion/styled";


const App_container = styled.div`
  padding: 1rem 3rem;
  position: absolute;

      
`;

function App() {
  return (
    <App_container>
      <Header />
      <Main />
      <Footer />
    </App_container>
  );
}
export default App;
