import React from 'react';
import './App.css';
import {InputGroup, Input, InputGroupAddon, Button} from 'reactstrap'

function App() {
  const Header = () => {
    return (
      <div className = "image">
        <div className="favo-filter"></div>
        {/*<h1>Procure seu livro</h1>*/}
        <div nameOnClass = "boxToSearch">
          <InputGroup size = 'md'>
            <Input placeholder = 'Procure seu livro aqui!'/>
            <InputGroupAddon addonType = 'append'>
              <Button color = 'secondary'>
                Procurar
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </div>
      </div> 
    );
  }
  return (
    <div>
      {Header()}
    </div>
  );
}

export default App;
