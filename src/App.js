import styled from 'styled-components'
import './App.css';

const Left = styled.div`
 flex: 1;
 display: flex;
 align-items: center;
`;

const Center = styled.div`
 flex: 1;
 text-align: center;
`;

const Right = styled.div`
 display: flex;
 justify-content: flex-end;
`;

const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

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
    <div className="App"  style={{backgroundColor: '#310655'}}>
      <Wrapper>
        <Center style={{color: "white"}}>Home</Center>
        <Center style={{color: "white"}}>About</Center>
        <Center style={{color: "white"}}>Github</Center>
        <Center style={{color: "white" }}>Contact</Center>
        <Right>
          <Button variant="text">Login</Button>
          <Button onclick="activateLasers()">SignUp</Button>
        </Right>
      </Wrapper>
      
      <Wrapper>
        <img src="image.png"></img>
        <Center style={{color: "white"}}><p><b>PRODUCTS MADE</b><br></br><b>WITH LOVE</b></p></Center>
      </Wrapper>
    </div>
  );
}

export default App;
