import Pages from "./pages/Pages";
import Catagory from "./components/Catagory";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { GiKnifeFork } from "react-icons/gi";

function App() {

  return (
    <div className="App">
      <BrowserRouter>
      <Nav>
        <GiKnifeFork/>
        <Logo to={'/'}>Yum-Num</Logo>
      </Nav>
        <Search/>
        <Catagory/>
        <Pages/>
      </BrowserRouter> 
    </div>
  );
}


const Logo=styled(Link)`
  text-decoration: none;
  font-size: 2.2rem;
  font-weight: 400;
  font-family: 'Lobster Two', cursive;

`;

const Nav= styled.div`
  padding: 4rem 0rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg{
    font-size: 3rem;
  }
`;

export default App;
