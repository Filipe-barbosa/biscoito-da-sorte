import { render } from "@testing-library/react";
import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textoFrase: "",
    };
    this.quebrabiscoito = this.quebrabiscoito.bind(this);
    this.frases = [
      "A vingança nunca é plena, mata a alma e envenena",
      "Eu sabia que você era idiota, mas não a nível executivo!",
      "Estou falando com a mula, não com os seus carrapatos",
      "Somente um idiota responde uma pergunta com outra pergunta",
      "A diferença entre as duas Alemanhas é simples, é de um lado que se toma vodka e do outro cerveja",
      "Na salada a gente coloca vinagre, não cachaça",
      "Não existe trabalho ruim, o ruim é ter que trabalhar",
      "Não há nada mais trabalhoso que viver sem trabalhar! ",
      "São todas assim: começam ficando com o chapéu e acabam ficando com a carteira!",
      "As pessoas boas devem amar os seus inimigos",
      "A barriga é a última que morre Seu Esperança",
      "Quando a fome aperta, a vergonha afrouxa...",
    ];
  }

  quebrabiscoito() {
    let state = this.state;
    let randomNumber = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = ' " '+ this.frases[randomNumber] + ' " ';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Biscoito da Sorte do Seu Madruga</h1>
        <img src={require("./assests/biscoito.png")} className="img" />

        <Botao name="Abrir Biscoito" acaoBtn={this.quebrabiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn}> {this.props.name} </button>
      </div>
    );
  }
}

export default App;
