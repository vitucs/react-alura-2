import React, {Component}from 'react';
import './App.css';
import FormularioDeCadastro from './FormularioDeCadastro/FormularioDeCadastro';
import {Container, Typography} from "@material-ui/core";
import '@fontsource/roboto';
class App extends Component {
  render(){
    return (
      <Container component="article" maxWidth="sm">
        <Typography align="center" variant="h4" component="h1">Formulário de Cadastro</Typography>
        <FormularioDeCadastro onSubmit={form}/>
      </Container>
      );
  }
}

function form(dados){
  console.log(dados);
}

export default App;
