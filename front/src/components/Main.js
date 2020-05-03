import React, { Component } from "react"

export default class Main extends Component {
  constructor(props) {
    super(props)

    this.state = {
      novaTarefa: ""
    }
  }

  inputmudou() {

  }

  render() {
    return (
      <div className="main">
        <h1>LISTA DE TAREFAS</h1>

        <form action="#">
          <input onChange={this.inputmudou} type="text" />
          <button type="submit">enviar</button>
        </form>
      </div>
    )
  }
}
