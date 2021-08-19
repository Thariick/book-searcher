import React, {useState} from 'react';
import './App.css';
import {InputGroup, Input, InputGroupAddon, Button} from 'reactstrap'
//import { ToastContainer, toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Pagination from './components/Pagination';
import axios from 'axios';


function App() {
  //states
  const [results, setResults] = useState();
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [pages, totalPages] = useState()

  //handleSearch
  const handleSubmit = () => {
    setLoading(true);
    axios.target('https://www.googleapis.com/books/v1/volumes?q=${query}&results=${results}')
    .then (pages => {
      totalPages
    });
  }
  


  const Header = () => {
    return (
      <div className = "image">
        {/*<div className="favo-filter"></div>*/}
        {/*<h1>Procure seu livro</h1>*/}
        <div nameOnClass = "boxToSearch">
          <InputGroup size = 'md'>
            <Input placeholder = 'Procure seu livro aqui!' value = {query} 
              onChange = {e => setQuery(e.target.value)}/>
            <InputGroupAddon addonType = 'append'>
              <Button color = 'secondary' onClick = {handleSubmit}>
                Procurar
              </Button>
              <Button color = 'primary'>
                Livros Favoritos
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
      <ToastContainer/>
    </div>
  );
}

export default App;
