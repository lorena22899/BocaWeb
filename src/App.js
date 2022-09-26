import './App.css';
import { Component } from 'react';
import { Cabecalho } from './Components/Cabecalho';
import { Footer } from './Components/Footer';
import { Lista } from './Components/Lista';

class App extends Component{
  state = {
    busca: '',
    odas: []
  }

  componentDidMount(){
    this.carregaODAs();
  }

  carregaODAs(){
    const {busca} = this.state;
    fetch('https://www.bocaweb.com.br/apibocaweb?nome='+busca)
    .then(response => response.json())
    .then(odas => this.setState({odas}));
  }

  buscaODA = (evento) => {
    this.setState({busca: evento.target.value});
    this.carregaODAs();
  }

  render(){
    const {odas} = this.state;
    return(
      <section>  
       <Cabecalho
          busca={this.state.busca}
          buscaODA={this.buscaODA}
       />
        <Lista
          odas={odas}
        />
        <Footer/>
        </section>
    )
  }
}
export default App;
