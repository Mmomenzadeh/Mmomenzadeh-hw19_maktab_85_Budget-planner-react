import "./App.css";
import Footer from "./Components/UI/Footer/Footer";
import Header from "./Components/UI/Header/Header";
import Main from "./Components/UI/Main/Main";
import styled from "@emotion/styled";

const App_container = styled.div`
  padding: 1rem 3rem;
`;

function App() {
  return (
    <div className="app-ui">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
export default App;
