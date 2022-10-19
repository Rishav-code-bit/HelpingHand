import styled from 'styled-components'
import './App.css';

const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
`;

const Right = styled.div`
 display: flex;
 justify-content: flex-end;
`;

const Button = styled.button`
  color: black;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  backgroundColor:'#fa9405',
  borderColor: '#fff'
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

function App() {
  return (
    <div className="App">
      Rishav
      <Right>
        <Button variant="text" >Login</Button>
        <Button onclick="activateLasers()">SignUp</Button>
      </Right>
      <header className="App-header">

      </header>
    </div>
  );
}

export default App;
