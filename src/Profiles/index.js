import React from "react";
import Skills from "../Skills-List";
import ToggleDisplay from "react-toggle-display";

export default class Profiles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.createDino = this.createDino.bind(this);
  }

  handleClick() {
    this.setState({
      show: !this.state.show
    });
  }

  createDino(item) {
    return (
      <li onClick={this.handleClick.bind(this)}>
        <div className="profile-card">
          <header className="profile-header">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
          </header>
          <ToggleDisplay if={this.props.show}>
            <Skills dinosaurs={item} />
          </ToggleDisplay>
        </div>
      </li>
    );
  }

  render() {
    return (
      <main>
        <section id="profiles-container">
          <h2>Profiles</h2>
          <ul id="profiles">{this.props.dinosaurs.map(this.createDino)}</ul>
        </section>
      </main>
    );
  }
}
